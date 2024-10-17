<!-- src/components/AppNavbar.vue -->

<template>
  <div class="navbar">
    <h2 class="title">Character Finder</h2>
    <button v-if="showAddButton" class="btn btn-add" @click="navigateToAddCharacter">Add Character</button>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    showAddButton() {
      // Hide the "Add Character" button only on the "AddCharacter" page
      return this.$route.name !== 'AddCharacter';
    }
  },
  methods: {
    navigateToAddCharacter() {
      this.$router.push({ name: 'AddCharacter' });
    }
  }
};
</script>

<!-- No <style> section since shared styles are in global.css -->
