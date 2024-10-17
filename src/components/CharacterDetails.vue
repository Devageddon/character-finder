<!-- src/components/CharacterDetails.vue -->

<template>
    <div class="character-details">
      <!-- Navbar -->
      <div class="navbar">
        <button class="btn btn-close" @click="closePage">Close</button>
        <button v-if="!isEditable" class="btn btn-edit" @click="toggleEdit">Edit</button>
        <div v-if="isEditable" class="edit-actions">
          <button class="btn btn-cancel" @click="cancelEdit">Cancel</button>
          <button class="btn btn-save" @click="saveDetails">Save</button>
        </div>
      </div>
  
      <!-- Content -->
      <div class="content">
        <div class="character-image">
          <img :src="character.path" alt="Character Image" />
        </div>
  
        <div class="details">
          <div class="detail-item">
            <label for="name">Name:</label>
            <input id="name" v-model="character.name" :disabled="!isEditable" />
          </div>
  
          <div class="detail-item">
            <label for="path">Path:</label>
            <input id="path" v-model="character.path" :disabled="!isEditable" />
          </div>
  
          <div class="detail-item">
            <label for="htmlCode">HTML Code:</label>
            <textarea id="htmlCode" v-model="character.htmlCode" :disabled="!isEditable"></textarea>
            <button class="btn btn-copy" @click="copyHTMLCode">Copy HTML Code</button>
          </div>
  
          <div class="detail-item">
            <label for="tags">Tags:</label>
            <input
              id="tags"
              v-model="tagsInput"
              :disabled="!isEditable"
              placeholder="Enter tags, separated by commas"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, get, update } from 'firebase/database';
  import { db } from '../firebase';
  
  export default {
    data() {
      return {
        character: {
          name: '',
          path: '',
          htmlCode: '',
          tags: [],
        },
        isEditable: false,
        tagsInput: '',
      };
    },
    methods: {
      // Fetch character details from Firebase
      async fetchCharacterDetails(characterId) {
        const characterRef = ref(db, `characters/${characterId}`);
  
        try {
          const snapshot = await get(characterRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            this.character = data;
            this.tagsInput = data.tags.join(', '); // Load tags as a comma-separated string
          } else {
            console.error('No character found.');
            alert('Character not found.');
          }
        } catch (error) {
          console.error('Error fetching character details:', error);
          alert('Failed to fetch character details.');
        }
      },
      // Toggle edit mode
      toggleEdit() {
        this.isEditable = true;
      },
      // Cancel edit mode and revert changes
      cancelEdit() {
        this.isEditable = false;
        this.fetchCharacterDetails(this.$route.params.id); // Revert any changes by reloading the data
      },
      // Save the edited details to Firebase
      async saveDetails() {
        const characterId = this.$route.params.id;
  
        // Update tags array
        this.character.tags = this.tagsInput.split(',').map(tag => tag.trim());
  
        const characterRef = ref(db, `characters/${characterId}`);
  
        try {
          await update(characterRef, this.character);
          this.isEditable = false;
          alert('Character details saved successfully!');
        } catch (error) {
          console.error('Error saving character details:', error);
          alert('Failed to save character details.');
        }
      },
      // Copy HTML Code to clipboard
      copyHTMLCode() {
        navigator.clipboard.writeText(this.character.htmlCode)
          .then(() => {
            alert('HTML Code copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy HTML Code:', err);
            alert('Failed to copy HTML Code.');
          });
      },
      // Navigate back to the Character List
      closePage() {
        this.$router.push({ name: 'CharacterList' });
      },
    },
    mounted() {
      const characterId = this.$route.params.id;
      this.fetchCharacterDetails(characterId);
    },
  };
  </script>
  
  <style scoped>
  /* Layout-specific styles for the Character Details page */
  
  .character-details {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  /* Navbar Styling */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    padding: 15px 20px;
    color: white;
  }
  
  .navbar .btn {
    background-color: #ecf0f1;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .navbar .btn:hover {
    background-color: #bdc3c7;
  }
  
  .edit-actions {
    display: flex;
    gap: 10px;
  }
  
  /* Content Styling */
  .content {
    display: flex;
    flex: 1;
    padding: 20px;
    background-color: #ecf0f1;
  }
  
  .character-image {
    flex: 1;
    max-width: 300px;
    margin-right: 30px;
  }
  
  .character-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .details {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .detail-item {
    display: flex;
    flex-direction: column;
  }
  
  .detail-item label {
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .detail-item input,
  .detail-item textarea {
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .detail-item textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .btn-copy {
    margin-top: 10px;
    align-self: flex-start;
    background-color: #3498db;
    color: white;
  }
  
  .btn-copy:hover {
    background-color: #2980b9;
  }
  
  /* Save and Cancel Buttons */
  .edit-actions .btn-save,
  .edit-actions .btn-cancel {
    background-color: #27ae60;
    color: white;
  }
  
  .edit-actions .btn-cancel {
    background-color: #c0392b;
  }
  
  .edit-actions .btn-save:hover {
    background-color: #1e8449;
  }
  
  .edit-actions .btn-cancel:hover {
    background-color: #96281b;
  }
  </style>
  