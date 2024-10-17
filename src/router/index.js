// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import AddCharacter from '../components/AddCharacter.vue';
import CharacterDetails from '../components/CharacterDetails.vue';
import CharacterList from '../components/CharacterList.vue';

const routes = [
  {
    path: '/',
    name: 'CharacterList',
    component: CharacterList,
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true,
  },
  {
    path: '/add-character',
    name: 'AddCharacter',
    component: AddCharacter,
  },
  // Redirect any unknown routes to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
