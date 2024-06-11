

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MyComponent text="hello"  />
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import MyComponent from './components/MyComponent'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
