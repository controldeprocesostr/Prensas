importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAB4UlwaVJzc4U4VbmddLf4mejKAOvTufw",
  authDomain: "hornosapp-60887.firebaseapp.com",
  projectId: "hornosapp-60887",
  messagingSenderId: "853377072466",
  appId: "1:853377072466:web:4401d39cb461a20e03ce8b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  const options = {
    body,
    icon: "/Prensas/icon-192.png",
    vibrate: [200, 100, 200],
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});
