<template>
    <div class="container" :key="render">
        <div class="horizontal">
            <div v-for="book in books" v-if="store.layout">
                <HorizontalCard :book="book" />
            </div>
        </div>
        <div class="vertical" v-for="book in books" v-if="!store.layout">
            <VerticalCard :book="book" />
        </div>
    </div>



</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import HorizontalCard from './HorizontalCard.vue';
import { bookGetter } from '../services/bookGetter';
import { bookSearch } from '../services/bookSearch'
import VerticalCard from './VerticalCard.vue';
import { bookWayStore } from '../store/bookWay'

const render = ref(1)
const books = ref([])
const store = bookWayStore()

onMounted(async () => {
    books.value = await bookGetter()
})

const searchBook = async (word: string) => {
    books.value = await bookSearch(word)
    render.value++
    store.searchClickedStatus = false
}

store.$subscribe((val: any) => {
    searchBook(val.events?.target?.searchWord)
})


</script>

<style scoped lang="scss">
.horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.vertical {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
</style>