<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {


    name: "HeaderPage",
    setup() {
            const store = useStore()
            const mainSum = computed(() => store.getters.mainSum);

            return {
                mainSum
            }

    },
}
</script>

<template>
    <header class="header">
        <div class="general_money">
            <p class="general_money-text">Мой счет</p>
            <p class="general_money-count">{{mainSum}}</p>
        </div>
    </header>
</template>

<style lang="scss">
    @import "./Header.scss"
</style>