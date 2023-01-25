<template>
    <section class="header">
        <div class="header__title">
            <h1>AppKitapp</h1>
        </div>
        <div class="header__cta">
            <i v-on:click="store.changeFormVisibility()"
                :class="[ !store.showForm ? 'fa-sharp fa-solid fa-plus' : 'fa-solid fa-minus' ]"></i>
            <i v-on:click="changeLayout()" :class="[isLayoutChanged ? 'fa-solid fa-grip-vertical' : 'fa-solid fa-list'
            ]"></i>
            <SearchBar />
        </div>
        <div class="header__seperator"></div>
    </section>
</template>
<script  setup lang="ts">
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import { bookWayStore } from '../store/bookWay'

const store = bookWayStore()

const isLayoutChanged = ref(true)

const changeLayout = () => {
    isLayoutChanged.value = !isLayoutChanged.value
    store.changeLayout()
}

</script>
<style lang="scss">
.header {

    &__title {
        h1 {
            font-family: $font-primary;
            color: $color-light;
            font-size: 2.5rem;
            text-align: center;
        }
    }

    &__cta {
        text-align: center;

        i {
            color: $color-light;
            margin: 0 0.5rem;
            font-size: 1.5rem;

        }
    }

    &__seperator {
        text-align: center;
        background-color: $color-light;
        width: 90%;
        height: 0.2rem;
        margin: 1rem auto;
    }
}
</style>