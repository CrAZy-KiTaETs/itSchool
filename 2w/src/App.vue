<template>
  <div class="container">
    <Header />
    <div class="main">
      <Page />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

export default {
  name: "App",
  data() {
    return {
      msg: "adsadad",
    };
  },
  components: {
    Footer,
    Header,
    Page,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

.container {
  max-width: 1440px;
  margin: auto;
  padding: 1rem;
  border: 1px solid white;
  height: 100%;
}
.main {
  height: 100%;
}
</style>
