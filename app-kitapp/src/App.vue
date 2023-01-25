<template>
  <div class="app-container">
    <div>
      <Header />
      <AddBookModal @book-added="increaseKey" v-if="store.showForm" />
      <BookWayChanger />
      <BookContainer :key="renderer" />
    </div>

  </div>


</template>

<script setup lang="ts">

import Header from './components/Header.vue';
import BookContainer from './components/BookContainer.vue';
import BookWayChanger from './components/BookWayChanger.vue';
import AddBookModal from './components/AddBookModal.vue';
import { ref } from 'vue';
import { bookWayStore } from './store/bookWay'

const store = bookWayStore()
const renderer = ref(0);

const increaseKey = () => {
  renderer.value++
}


</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

}
</style>
