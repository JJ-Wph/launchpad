<template>
  <div class="main">
    <button>Dodaj dupsko</button>
    <div class="logo">Launch-Pad</div>
    <button>Usuń kurwinoxa</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
}

.logo{
    background-color: rgb(0, 0, 0);
    padding: 40px;
    width: 100vh;
}

button{
    min-width: 80px;
    min-height: 100px;
}
</style>