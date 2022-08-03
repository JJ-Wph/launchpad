<template>
    <div    class="main" 
            tabindex="-1"
            @keydown.q="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/31[kb]sp12-06.wav.mp3'); qIsClicked=!qIsClicked"
            @keydown.w="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/34[kb]sp12-28.wav.mp3'); wIsClicked=!wIsClicked"
            @keydown.e="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/25[kb]sp12-26.wav.mp3'); eIsClicked=!eIsClicked"
            @keydown.a="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/25[kb]sp12-20.wav.mp3'); aIsClicked=!aIsClicked"
            @keydown.s="playSound('https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/39[kb]Alert-Siren.wav.mp3'); sIsClicked=!sIsClicked"
            @keydown.d="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/18[kb]sp12-17.wav.mp3'); dIsClicked=!dIsClicked"
            @keydown.z="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/7[kb]sp12-24.wav.mp3'); zIsClicked=!zIsClicked"
            @keydown.x="playSound('https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/11[kb]Beep-Boop.wav.mp3'); xIsClicked=!xIsClicked"
            @keydown.c="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/28[kb]sp12-21.wav.mp3'); cIsClicked=!cIsClicked"
            
            
            
            
            
            
            
            
            >
        <div class="qdiv" :class="{colorRed: qIsClicked}" @keydown.q="qIsClicked=!qIsClicked">q</div>
        <div class="wdiv" :class="{colorRed: wIsClicked}" @keydown.w="wIsClicked=!wIsClicked">w</div>
        <div class="ediv" :class="{colorRed: eIsClicked}" @keydown.w="eIsClicked=!eIsClicked">e</div>
        <div class="adiv" :class="{colorRed: aIsClicked}" @keydown.w="aIsClicked=!aIsClicked">a</div>
        <div class="sdiv" :class="{colorRed: sIsClicked}" @keydown.w="sIsClicked=!sIsClicked">s</div>
        <div class="ddiv" :class="{colorRed: dIsClicked}" @keydown.w="dIsClicked=!dIsClicked">d</div>
        <div class="zdiv" :class="{colorRed: zIsClicked}" @keydown.w="zIsClicked=!zIsClicked">z</div>
        <div class="xdiv" :class="{colorRed: xIsClicked}" @keydown.w="xIsClicked=!xIsClicked">x</div>
        <div class="cdiv" :class="{colorRed: cIsClicked}" @keydown.w="cIsClicked=!cIsClicked">c</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            qIsClicked: false,
            wIsClicked: false,
            eIsClicked: false,
            aIsClicked: false,
            sIsClicked: false,
            dIsClicked: false,
            zIsClicked: false,
            xIsClicked: false,
            cIsClicked: false,
        }
    },

    computed: {

    },

    methods: {
        playSound(sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },
    }
}


</script>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 2% 2%; 
  grid-template-areas: 
    ". qdiv wdiv ediv ."
    ". adiv sdiv ddiv ."
    ". zdiv xdiv cdiv ."; 
  justify-content: center; 
  align-content: center; 
  align-items: stretch; 
  width: 100%; 
  height: 100%; 
}

.qdiv { grid-area: qdiv; }
.wdiv { grid-area: wdiv; }
.ediv { grid-area: ediv; }
.adiv { grid-area: adiv; }
.sdiv { grid-area: sdiv; }
.ddiv { grid-area: ddiv; }
.zdiv { grid-area: zdiv; }
.xdiv { grid-area: xdiv; }
.cdiv { grid-area: cdiv; }

.main > div {
    display: flex;
    border: 2px solid black;
    align-items: center;
    justify-content: center;
}

.colorRed{
    background-color: red;
}
</style>