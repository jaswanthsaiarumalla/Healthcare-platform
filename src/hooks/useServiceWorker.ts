import { useEffect, useState } from 'react';
import { useAppStore } from '../store/useAppStore';

export const useServiceWorker = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const { setNotificationsEnabled } = useAppStore();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('ServiceWorker registration successful:', registration.scope);
      }).catch((err) => {
        console.error('ServiceWorker registration failed:', err);
      });
    }

    if ('Notification' in window) {
      setPermission(Notification.permission);
      if (Notification.permission === 'granted') {
        setNotificationsEnabled(true);
      }
    }
  }, [setNotificationsEnabled]);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return false;
    }
    
    if (Notification.permission === 'granted') {
      setNotificationsEnabled(true);
      return true;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === 'granted') {
      setNotificationsEnabled(true);
      return true;
    }
    return false;
  };

  const triggerMockNotification = () => {
    if (permission === 'granted' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('HealthSync Alert', {
          body: 'Critical: Patient James Wilson needs immediate attention.',
          icon: '/vite.svg', 
          vibrate: [200, 100, 200],
          tag: 'medical-alert'
        } as any);
      });
    } else {
      console.warn('Notification permission not granted or Service Worker not supported.');
      alert('Notification simulated: Patient James Wilson needs immediate attention.\n\n(Enable desktop notifications to see this as a native push notification)');
    }
  };

  return { permission, requestPermission, triggerMockNotification };
};
