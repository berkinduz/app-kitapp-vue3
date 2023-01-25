<template>
    <div class="way">
        <div :class="store.isPaperActive() ? 'way__content' : 'way__content-inactive'">

            <p v-on:click="store.changeBookWay('paper')">Paper Book</p>
            <div v-if="store.isPaperActive()" class="way__content-seperator"></div>
        </div>
        <div :class="!store.isPaperActive() ? 'way__content' : 'way__content-inactive'">

            <p v-on:click="store.changeBookWay('ebook')">e-Book</p>
            <div v-if="!store.isPaperActive()" class=" way__content-seperator"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { bookWayStore } from '../store/bookWay'

const store = bookWayStore()


</script>

<style scoped lang="scss">
.way {
    display: flex;
    flex-direction: row;
    font-family: $font-secondary;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3%;
    font-size: 1.5rem;

    &__content-seperator {
        height: 0.1rem;
        width: 2rem;
        background-color: $color-light;
        margin: 0 auto;
    }

    &__content {
        line-height: 0;
    }

    &__content-inactive {
        line-height: 0;
        color: gray;
    }
}
</style>