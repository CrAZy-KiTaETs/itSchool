<script>
import { computed } from "vue";
import GraphVue from "@/modules/Graph/Graph.vue";
import kafe from "@/assets/gifs/kafe.gif";
import cart from "@/assets/gifs/cart.gif";
export default {
  name: "IncomePage",
  setup(props, { emit }) {
    const categories = computed(() => [
      { name: "Зарплата", amount: 0, icon: cart, color: "#1C546F" },
      { name: "Подарки", amount: 2, icon: kafe, color: "#240046" },
    ]);
    const graphData = categories.value.map((x) => x.amount);
    const graphColors = categories.value.map((x) => x.color);
    const changePage = () => {
      emit("update:active-page", "expenses");
    };
    return { categories, graphData, graphColors, changePage };
  },
  components: {
    GraphVue,
  },
};
</script>

<template>
  <section class="expenses">
    <ul class="categories">
      <li class="categories-item" v-for="(item, i) in categories" :key="i">
        <p class="categories-name">{{ item.name }}</p>
        <button class="categories-btn" :style="{ background: item.color }">
          <!-- <lord-icon
    src="https://cdn.lordicon.com/askdjvlo.json"
    trigger="hover"
    colors="primary:#ffc2d1,secondary:#ffc2d1"
    style="width:100%;height:100%" class="categories-gif">
</lord-icon> -->
          <img class="categories-gif" :src="item.icon" alt="" />
        </button>
      </li>
      <li class="categories-main" @click="changePage">
        <div class="categories-graph_wrapper">
          <GraphVue :data="graphData" :colors="graphColors" />
        </div>
        <div class="centred_info">
          <p class="centred_info-text">dddd</p>
          <p class="centred_info-expenses">0 ₸</p>
          <p class="centred_info-income">10325250 ₸</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "./Style.scss";
</style>