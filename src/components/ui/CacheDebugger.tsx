'use client';

import { useEffect, useState } from 'react';

interface CacheStats {
  hits: number;
  misses: number;
  hitRate: number;
  total: number;
  cache: any;
  timestamp: string;
}

export default function CacheDebugger() {
  const [stats, setStats] = useState<CacheStats | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const fetchStats = async () => {
      try {
        const response = await fetch('/api/cache/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Cache stats fetch error:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !stats) return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full z-50 hover:bg-gray-800 transition-colors"
        title="Cache Debugger"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      </button>

      {/* Debug Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 bg-black text-white p-4 rounded-lg text-sm max-w-xs z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Cache Stats</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Hits:</span>
              <span className="text-green-400">{stats.hits}</span>
            </div>
            <div className="flex justify-between">
              <span>Misses:</span>
              <span className="text-red-400">{stats.misses}</span>
            </div>
            <div className="flex justify-between">
              <span>Hit Rate:</span>
              <span className={`${stats.hitRate > 80 ? 'text-green-400' : stats.hitRate > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                {stats.hitRate.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>{stats.total}</span>
            </div>
            <div className="flex justify-between">
              <span>Connected:</span>
              <span className={stats.cache.connected ? 'text-green-400' : 'text-red-400'}>
                {stats.cache.connected ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-700 text-xs text-gray-400">
            <div>Last Update: {new Date(stats.timestamp).toLocaleTimeString()}</div>
          </div>
        </div>
      )}
    </>
  );
} 