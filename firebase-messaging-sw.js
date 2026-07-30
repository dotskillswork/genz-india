importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCNLwSjHq6LlX9uUovTRHrz9ZfUWeIUWQM",
    authDomain: "genz-india.firebaseapp.com",
    projectId: "genz-india",
    storageBucket: "genz-india.firebasestorage.app",
    messagingSenderId: "149959470783",
    appId: "1:149959470783:web:71b7969ee2c8fc049c200a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/26a1.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});