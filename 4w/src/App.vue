<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

export default {
  name: "App",
  data() {
    return {
      msg: "adsadad",
      userRegistrationSucces: false
    };
  },
  components: {
    Footer,
    Header,
    Page,
  },
  methods: {
    ready(state) {
      this.userRegistrationSucces = state
    }
  }
};
</script>

<template>
  <div class="container">
    <Header />
    <div class="main">
    userRegistrationSucces
     ? 
    : 

      <Page @fun="ready"   />
    </div>
    <Footer />
  </div>
</template>


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
