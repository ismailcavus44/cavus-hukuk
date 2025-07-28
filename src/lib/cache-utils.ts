// Cache statistics - global değişkenler
let cacheHits = 0;
let cacheMisses = 0;

// Cache hit/miss fonksiyonları
export function incrementCacheHit() {
  cacheHits++;
}

export function incrementCacheMiss() {
  cacheMisses++;
}

export function getCacheStats() {
  return {
    hits: cacheHits,
    misses: cacheMisses,
  };
} 