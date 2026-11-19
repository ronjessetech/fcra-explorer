import { useState, useEffect } from 'react';

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [offlineSince, setOfflineSince] = useState<Date | null>(null);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      setOfflineSince(null);
    }

    function handleOffline() {
      setIsOnline(false);
      setOfflineSince(new Date());
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, offlineSince };
}
