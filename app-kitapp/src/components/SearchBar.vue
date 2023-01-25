<template>
    <i class="fa-solid fa-magnifying-glass search__button" v-on:click="searchBarVisibility()" />
    <div class="search__box" v-if="searchBarActive">
        <input type="text" v-model="searchWord" placeholder="Enter words to search">
        <button class="search__clear" v-on:click="clearSearch()">X</button>
        <span><button v-on:click="search(searchWord)">Search</button></span>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { bookWayStore } from '../store/bookWay'

const store = bookWayStore()
const searchWord = ref('')
const searchBarActive = ref(false)

const search = (word: string) => {
    store.searchWord = word
    store.searchClickedStatus = true
}

const clearSearch = () => {
    store.searchWord = ''
    searchWord.value = ''
}

const searchBarVisibility = () => {
    searchBarActive.value = !searchBarActive.value
}



</script>

<style scoped lang="scss">
.search {
    position: relative;
    width: 50%;
    margin-left: 1.1rem;

    &__box {
        margin-top: 0.5rem;
    }

    &__clear {
        border: none;
        background-color: transparent;
        position: absolute;
        left: 57%;
        margin-top: 0.2rem;
    }
}
</style>