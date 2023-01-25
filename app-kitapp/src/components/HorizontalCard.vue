<template>
    <section v-show="props.book.way === store.bookWay" class="card" v-on:click="onClicked()">
        <div class="card__trans"></div>
        <img class="card__image" :src="props.book.image" alt="">
        <div :class="isClicked ? 'card__info-clicked' : 'card__info'">
            <div class="card__info-stats">
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
            </div>
            <h3 class="card__info-title">{{ props.book.title }}</h3>
            <div class="card__info-desc">
                <p>By: {{ props.book.author }}</p>
                <p>Page: {{ props.book.page }}</p>
                <p>Genre: {{ props.book.genre }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { bookWayStore } from '../store/bookWay'

const props = defineProps(['book'])
const store = bookWayStore()

const isClicked = ref(false)
const onClicked = () => {
    isClicked.value = !isClicked.value
}


</script>

<style lang="scss" scoped>
.card {


    display: block;
    width: 35vw;
    height: 30vh;
    max-height: 30vh;
    position: relative;
    margin: 0.5rem;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    &__info {
        display: none;
    }

    &__info-clicked {
        display: block;
        position: absolute;
        z-index: 2;
        top: 0;
        font-size: 2vw;
        color: white;
        background-color: $color-transparent;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: $font-secondary;
    }



    &__info-desc {
        line-height: 0.1rem;
        margin: 0 0 0.3rem 0.3rem;
    }

    &__info-title {
        position: relative;
        text-align: center;
        font-size: 5vw;
    }

    &__info-stats {
        margin: 0.3rem 0 0 0.3rem
    }






    // // &:active {
    // .card__trans {
    //     display: block;
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     background-color: $color-transparent;
    //     top: 0;
    // }

    // // }

}
</style>