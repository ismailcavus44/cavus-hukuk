import Redis from 'ioredis';

// Redis client (opsiyonel - eğer Redis varsa)
let redis: Redis | null = null;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL, {
    retryDelayOnFailover: 100,
    maxRetriesPerRequest: 3,
  });
}

// Fallback memory cache
const memoryCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 dakika

export class CacheManager {
  private static instance: CacheManager;
  
  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      if (redis) {
        const cached = await redis.get(key);
        return cached ? JSON.parse(cached) : null;
      } else {
        const cached = memoryCache.get(key);
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
          return cached.data;
        }
        return null;
      }
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    try {
      if (redis) {
        await redis.setex(key, ttl, JSON.stringify(value));
      } else {
        memoryCache.set(key, { data: value, timestamp: Date.now() });
      }
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  async del(key: string): Promise<void> {
    try {
      if (redis) {
        await redis.del(key);
      } else {
        memoryCache.delete(key);
      }
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }

  async flush(): Promise<void> {
    try {
      if (redis) {
        await redis.flushall();
      } else {
        memoryCache.clear();
      }
    } catch (error) {
      console.error('Cache flush error:', error);
    }
  }

  generateKey(prefix: string, ...params: string[]): string {
    return `${prefix}:${params.join(':')}`;
  }

  // Cache statistics
  async getStats() {
    if (redis) {
      const info = await redis.info('stats');
      return {
        connected: redis.status === 'ready',
        memory: info,
      };
    } else {
      return {
        connected: false,
        size: memoryCache.size,
      };
    }
  }
}

export const cache = CacheManager.getInstance(); 