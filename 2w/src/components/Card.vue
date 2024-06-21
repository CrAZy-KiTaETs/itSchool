<script>
import myImg from "./myImg";


export default {
  name: "itemsCard",
  data() {
    return {
        show: true
    }
  },
  props: {
    img: String,
    title: String,
    text: String,
  },
  components: {
    myImg,
  },
  methods: {
    lol(e) {
        console.log('asdad', !e)
        return false
    }
  }
};
</script>


<template>
  <div class="card">
    <img :src="img" class="img" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <myImg :bigImg="img" :onClose="lol" :show="show" />
  </div>
</template>



<style>
.card {
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid black;
}

.img {
  max-width: 100px;
}
</style>