<template>
  <div class="main" @keyup.q="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')">
    <button @click="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" 
            @keyup.q="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')">Q</button>




    <button @click="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/34[kb]sp12-28.wav.mp3')" 
            @keyup.w="playSound">W</button>
    <button @click="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/25[kb]sp12-26.wav.mp3')" @keyup.e="playSound">E</button>
    <button @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" @keyup.q="playSound">A</button>
    <button @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" @keyup.q="playSound">S</button>
    <button @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" @keyup.q="playSound">D</button>
    <button @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" @keyup.q="playSound">Z</button>
    <button @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" @keyup.q="playSound">X</button>
    <button @click.prevent="playSound('')" @keyup.q="playSound">C</button>
  </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        playSound(sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
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
    padding: 40px;
    margin-top: 4vh;
    margin-bottom: 2vh;
    background-color: cyan;
}

button{
    padding: 40px;
}
</style>