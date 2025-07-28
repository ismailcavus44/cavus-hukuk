import { NextRequest, NextResponse } from 'next/server';
import { cache } from '@/lib/cache';

// Cache statistics
let cacheHits = 0;
let cacheMisses = 0;

export function incrementCacheHit() {
  cacheHits++;
}

export function incrementCacheMiss() {
  cacheMisses++;
}

export async function GET(request: NextRequest) {
  try {
    const total = cacheHits + cacheMisses;
    const hitRate = total > 0 ? (cacheHits / total) * 100 : 0;
    const stats = await cache.getStats();

    return NextResponse.json({
      hits: cacheHits,
      misses: cacheMisses,
      hitRate: Math.round(hitRate * 100) / 100,
      total,
      cache: stats,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Cache stats error:', error);
    return NextResponse.json(
      { error: 'Failed to get cache stats' },
      { status: 500 }
    );
  }
} 