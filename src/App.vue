<template>
  <div id="app">
    <HeadComponent></HeadComponent>

  </div>
</template>

<script>
import HeadComponent from './components/HeadComponent'

export default {
  name: 'App',
  components: {
    HeadComponent
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
  margin-top: 60px;
}
</style>
