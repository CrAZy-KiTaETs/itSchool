<template>
  <div v-if="show" @click="closeImg" class="fullImg">
    <img :src="bigImg" class="img" />
    <p>asdsaasd</p>
  </div>
</template>

<script>
export default {
  name: "myImg",
  data() {
    return {
      hide: true,
    };
  },
  methods: {
    closeImg() {
      this.show =  false;
    },
  },
  props: {
    bigImg: String,
    onClose: Function,
    show: Boolean
  },
};
</script>

<style>
.fullImg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.324);
}
</style>