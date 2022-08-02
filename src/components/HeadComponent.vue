<template>
  <div class="main">
    <button></button>
    <div class="logo">Launch - Pad</div>
    <button>Change Keys</button>
  </div>
</template>

<script>

export default {
    data: () => ({
         
    })

}
</script>

<style>
    .main {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 50%;
    margin-top: 4vh;
    margin-bottom: 2vh;
}
</style>

<style scoped>

.logo{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 40px;
    width: 100vh;
}

button{
    min-width: 80px;
    min-height: 100px;
}
</style>