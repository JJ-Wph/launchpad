<template>
  <div id="app">
    <HeadComponent></HeadComponent>
    <LaunchPadComponent></LaunchPadComponent>
  </div>
</template>

<script>
import HeadComponent from './components/HeadComponent'
import LaunchPadComponent from './components/LaunchPadComponent.vue'

export default {
  name: 'App',
  components: {
    HeadComponent,
    LaunchPadComponent
}
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(128deg, rgba(89, 131, 252, 1) 20%, rgba(41, 53, 86, 1) 80%),  url(https://img.icons8.com/android/2x/happy.png);
  background-size: auto;
  background-position: left top;
  background-repeat: repeat;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
