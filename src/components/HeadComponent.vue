<template>
  <div class="main">
    <div class="logo">Dubstep LaunchPad
      <p v-if="isMobile()">Warning: This app has got delays on mobile devices.</p>
    </div>
  </div>
</template>

<script>

export default {
    methods:{
        isMobile() {
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
          } else {
            return false
          }
        },
    }

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
    width: 100%;
    padding: 5% 0 5% 0;
    font-family: 'Silkscreen', cursive;
}

.logo > p {
  font-family: 'Times New Roman', Times, serif;
  color: red;
  font-size: x-small;
}

button{
    min-width: 80px;
    min-height: 100px;
}

@media (max-width: 1200px) {
        .main {
            width: 350px;
            height: 100px;
        }
}
</style>