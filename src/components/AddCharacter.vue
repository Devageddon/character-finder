<!-- src/components/AddCharacter.vue -->

<template>
    <div class="add-character">
      <!-- Navbar -->
      <AppNavbar />
  
      <!-- Add Character Form -->
      <div class="form-container p-20 bg-secondary">
        <h2>Add New Character</h2>
        <form @submit.prevent="addCharacter">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              v-model="name"
              id="name"
              type="text"
              required
              class="input-primary"
              placeholder="Enter character name"
            />
          </div>
  
          <div class="form-group">
            <label for="path">Image Path:</label>
            <input
              v-model="path"
              id="path"
              type="text"
              required
              class="input-primary"
              placeholder="Enter image URL or path"
            />
          </div>
  
          <div class="form-group">
            <label for="htmlCode">HTML Code:</label>
            <textarea
              v-model="htmlCode"
              id="htmlCode"
              required
              class="input-primary"
              placeholder="Enter HTML code"
            ></textarea>
          </div>
  
          <div class="form-group">
            <label for="tags">Tags (comma separated):</label>
            <input
              v-model="tags"
              id="tags"
              type="text"
              required
              class="input-primary"
              placeholder="e.g., hero, villain, fantasy"
            />
          </div>
  
          <!-- Save and Cancel Buttons -->
          <div class="action-buttons">
            <button type="button" class="btn btn-cancel" @click="closePage">Cancel</button>
            <button type="submit" class="btn btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from './AppNavbar.vue';
  import { db } from '../firebase';
  import { ref, push } from 'firebase/database';
  
  export default {
    name: 'AddCharacter',
    components: {
      AppNavbar,
    },
    data() {
      return {
        name: '',
        path: '',
        htmlCode: '',
        tags: '',
      };
    },
    methods: {
      async addCharacter() {
        const newCharacterRef = ref(db, 'characters/');
        try {
          await push(newCharacterRef, {
            name: this.name,
            path: this.path,
            htmlCode: this.htmlCode,
            tags: this.tags.split(',').map(tag => tag.trim().toLowerCase()),
          });
          alert('Character added successfully!');
          this.$router.push({ name: 'CharacterList' });
        } catch (error) {
          console.error('Error adding character:', error);
          alert('Failed to add character.');
        }
      },
      closePage() {
        this.$router.push({ name: 'CharacterList' });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Layout-specific styles for the Add Character page */
  
  .form-container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #ecf0f1;
    padding: 30px;
    border-radius: 8px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px; /* Space between form fields */
  }
  
  .form-group label {
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px; /* Space between Cancel and Save buttons */
    margin-top: 20px;
  }
  </style>
  