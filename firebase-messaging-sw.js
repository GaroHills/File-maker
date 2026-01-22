// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCdbykOwpd71-dnGmgc-tgMQxNponPip2k",
  authDomain: "gh-filemaker.firebaseapp.com",
  projectId: "gh-filemaker",
  storageBucket: "gh-filemaker.firebasestorage.app",
  messagingSenderId: "369203199821",
  appId: "1:369203199821:web:9d2a497150a5130f31c104"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://raw.githubusercontent.com/GaroHills/File-maker/refs/heads/main/file_0000000087307230923a773d76222c7b.png',
    badge: 'https://raw.githubusercontent.com/GaroHills/File-maker/refs/heads/main/file_0000000087307230923a773d76222c7b.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
