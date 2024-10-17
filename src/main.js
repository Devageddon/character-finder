// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

// Import Global Styles
import './assets/global.css'; // Ensure this path is correct

const app = createApp(App);

app.use(router); // Use the router
app.mount('#app');
