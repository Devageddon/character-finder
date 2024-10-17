<template>
    <div class="character-list">
      <!-- Navbar -->
      <AppNavbar />
  
      <!-- Search bar -->
      <div class="search-bar flex-center gap-10 p-20 bg-secondary">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search characters..."
          class="search-input w-500 font-medium"
          @input="searchCharacters"
        />
        <button class="btn btn-search" @click="searchCharacters">Search</button>
      </div>
  
      <!-- Character grid -->
      <div v-if="filteredCharacters.length" class="character-grid">
        <div
          v-for="(character, index) in filteredCharacters"
          :key="character.id"
          class="character-card"
        >
          <div class="character-image" @click="copyHTMLCode(character.htmlCode, index)">
            <img :src="character.path" alt="Character Image" />
            <div class="copy-overlay" v-if="copiedIndex === index">
              Copied!
            </div>
          </div>
          <h3>{{ character.name }}</h3>
  
          <!-- Info Button with an Icon -->
          <button @click="openCharacterDetails(character)" class="btn btn-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"/>
              <path d="M8.93 6.588a.5.5 0 1 0-.854-.354L8 7l-.076-.354a.5.5 0 0 0-.854.354l.252 1.086a.5.5 0 0 0 .487.374h1.224a.5.5 0 0 0 .487-.374l.252-1.086zM8 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM9 11v1H7v-1h2zm0-1V9H7v1h2z"/>
            </svg>
          </button>
        </div>
      </div>
  
      <!-- No Characters Found Message -->
      <div v-else-if="searchQuery.trim()" class="no-characters">
        <p>No characters found. Try adjusting your search.</p>
      </div>
  
      <!-- Prompt to Search Message -->
      <div v-else class="all-characters">
        <p>To find an image, please search for a tag.</p>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from './AppNavbar.vue';
  import { db } from '../firebase';
  import { ref, get } from 'firebase/database';
  
  export default {
    components: {
      AppNavbar,
    },
    data() {
      return {
        searchQuery: '',
        characters: [], // Loaded from Firebase database
        filteredCharacters: [], // To store search results
        copiedIndex: null, // Track copied image index
      };
    },
    methods: {
      openCharacterDetails(character) {
        this.$router.push({ name: 'CharacterDetails', params: { id: character.id } });
      },
      copyHTMLCode(htmlCode, index) {
        navigator.clipboard.writeText(htmlCode)
          .then(() => {
            this.copiedIndex = index;
            setTimeout(() => {
              this.copiedIndex = null;
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy HTML Code:', err);
            alert('Failed to copy HTML Code.');
          });
      },
      searchCharacters() {
        if (this.searchQuery.trim() === '') {
          this.filteredCharacters = [];
          return;
        }
  
        const queryTerms = this.searchQuery
          .toLowerCase()
          .split(',')
          .map(term => term.trim())
          .filter(term => term !== '');
  
        this.filteredCharacters = this.characters.filter(character => {
          const matchesName = queryTerms.some(term => character.name.toLowerCase().includes(term));
          const matchesTags = character.tags && character.tags.some(tag =>
            queryTerms.some(query => tag.toLowerCase().includes(query))
          );
          return matchesName || matchesTags;
        });
      },
      async fetchCharacters() {
        const characterRef = ref(db, 'characters/');
        try {
          const snapshot = await get(characterRef);
          if (snapshot.exists()) {
            this.characters = Object.entries(snapshot.val()).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            console.log("Fetched characters:", this.characters);
          } else {
            console.log("No characters found in the database.");
          }
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      },
    },
    created() {
      this.fetchCharacters();
    },
  };
  </script>
  
  <style scoped>
  /* Increase the height of the search input */
  .search-input {
    padding: 15px 10px; /* Increase vertical padding */
    font-size: 16px; /* Adjust font size if needed */
    height: 50px; /* Set a fixed height */
    box-sizing: border-box;
  }
  
  /* Ensure the input takes full width on smaller screens */
  @media (max-width: 600px) {
    .search-input {
      width: 100%;
    }
  }
  </style>
  