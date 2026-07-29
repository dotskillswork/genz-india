importScripts("https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCNLwSjHq6LlX9uUovTRHrz9ZfUwEIUWQM",
    authDomain: "genz-india.firebaseapp.com",
    projectId: "genz-india",
    storageBucket: "genz-india.firebasestorage.app",
    messagingSenderId: "149959470783",
    appId: "1:149959470783:web:71b7969ee2c8fc049c200a",
    measurementId: "G-RBRSDRKSRH"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});