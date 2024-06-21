<template>
  <div class="page">
    <ul class="list">
      <li v-for="i in items" v-bind:key="i">
        <Card :title="i.title" :text="i.text" :img="i.img"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "PageComp",
  data() {
    return {
      items: [
        { img: "https://i.pinimg.com/originals/77/5b/e6/775be601ddd3900571ecb4271204b089.png", title: "a", text: "dddd" },
        { img: "https://i.pinimg.com/originals/77/5b/e6/775be601ddd3900571ecb4271204b089.png", title: "a", text: "dddd" },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style>
.page {
  border: 1px solid yellow;
  margin: 1rem 0;
  height: 100%;
  padding: 1rem;
}
.list {
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
    gap: 1rem;
}
</style>