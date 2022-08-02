<template>
  <div class="main">
    <button @click="playAudio1">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>10</button>
    <button>11</button>
    <button>12</button>
  </div>
</template>

<script>
    const audio1 = new Audio("launchpad/src/assets/mouse-click.mp3");

export default {
    data: () => ({
         
    }),

    methods: {
        playAudio1(){
            audio1.play()
        }
    }
}


</script>

<style scoped>
div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    width: 50%;
    margin-top: 4vh;
    margin-bottom: 2vh;
}

button{
    padding: 40px;
}
</style>