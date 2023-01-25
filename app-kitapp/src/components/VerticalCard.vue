<template>
    <div class="card" v-show="props.book.way === store.bookWay">

        <img class="card__image" :src="props.book.image" alt="">

        <div class="card__content">
            <div class="card__content-left">
                <p class="title">{{ props.book.title }}</p>
                <p class="info">By: {{ props.book.author }}</p>
                <p class="rating">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </p>
            </div>
            <div class="card__content-right">
                <p class="info">Page
                <div class="info__data">{{ props.book.page }}</div>
                </p>
                <p class="info">Genre
                <div class="info__data">{{ props.book.genre }}</div>
                </p>
                <p class="info">Published
                <div class="info__data">{{ props.book.year }}</div>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { bookWayStore } from '../store/bookWay'

const props = defineProps(['book'])
const store = bookWayStore()
</script>

<style scoped lang="scss">
.card {
    width: 90%;
    height: 15%;
    display: flex;
    font-family: $font-secondary;
    background-color: $color-secondary;
    margin-bottom: 1rem;

    &__image {
        max-width: 20%;
        max-height: 15%;
        object-fit: cover;
    }

    &__content {
        display: flex;
        padding: 0.6rem;
        justify-content: space-between;
        align-items: center;
        float: left;
        width: 100%;

        &-right {
            text-align: center;
        }


        &-right,
        &-left {
            display: flex;
            flex-direction: column;
            margin: auto 0;
            flex-wrap: wrap;
        }
    }
}

.title {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.info {
    font-size: 0.7rem;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;

    &__data {
        font-weight: 700;
        color: rgba($color: #000000, $alpha: 0.5);
        margin-bottom: 0.2rem;
    }
}

.rating {
    margin-top: 0.2rem;
}
</style>