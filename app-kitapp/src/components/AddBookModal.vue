<template>
    <div class="container">
        <input type="text" v-model="bookInput.image" placeholder="Enter Image Url" required>
        <input type="text" v-model="bookInput.title" placeholder="Enter Book Name" required>
        <input type="text" v-model="bookInput.author" placeholder="Enter Author" required>
        <div class="tiny_inputs">
            <input type="number" v-model="bookInput.page" placeholder="Enter Page" required>
            <input type="number" v-model="bookInput.year" placeholder="Enter Publish Year" required>
            <select v-model="bookInput.way">
                <option value="" disabled selected>Select Book Type</option>
                <option value="paper">Paper</option>
                <option value="ebook">E-Book</option>
            </select>
            <select v-model="bookInput.genre">
                <option value="" disabled selected>Select Genre</option>
                <option v-for="genre in bookGenres" :value="genre">{{ genre }}</option>
            </select>
        </div>

        <button v-on:click="addNewBook()">Add</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BookAdder } from '../services/bookAdder'
import { bookGenres } from '../helpers/bookGenres'

const emit = defineEmits(['bookAdded'])
const addBook = BookAdder()
const bookInput = ref({
    way: '',
    image: '',
    title: '',
    genre: '',
    author: '',
    page: '',
    year: '',
})

const addNewBook = () => {
    if (Object.values(bookInput.value).every(val => val === '' || val === null)) return
    addBook(bookInput.value)
    emit('bookAdded')
}

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0 1rem;
}

.tiny_inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.22rem;

    input {
        width: 47%;
    }

    select {
        width: 49.4%;
    }
}
</style>