import { NextRequest, NextResponse } from 'next/server';
import { cache } from '@/lib/cache';
import { getCacheStats } from '@/lib/cache-utils';

// API route handler
export async function GET(request: NextRequest) {
  try {
    const stats = getCacheStats();
    const total = stats.hits + stats.misses;
    const hitRate = total > 0 ? (stats.hits / total) * 100 : 0;
    const cacheStats = await cache.getStats();

    return NextResponse.json({
      hits: stats.hits,
      misses: stats.misses,
      hitRate: Math.round(hitRate * 100) / 100,
      total,
      cache: cacheStats,
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