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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
