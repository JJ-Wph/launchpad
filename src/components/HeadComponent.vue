<template>
  <div class="main">
    <div class="logo">Dubstep Launch-Pad</div>
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
    width: 35%;
    border: 1px solid rgb(34, 34, 34);
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
.logo{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-size: 30px;
    padding: 40px;
    width: 100vh;
    font-family: 'Silkscreen', cursive;
}

button{
    min-width: 80px;
    min-height: 100px;
}
</style>