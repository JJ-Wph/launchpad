<template>
    
    <div
        v-if="!isMobile()"
        class="main"
        tabindex="-1"
        @keydown.q="playSound(qSound.link); qSound.isClicked=!qSound.isClicked"
        @keyup.q="qSound.isClicked=!qSound.isClicked"
        @keydown.w="playSound(wSound.link); wSound.isClicked=!wSound.isClicked"
        @keyup.w="wSound.isClicked=!wSound.isClicked"
        @keydown.e="playSound(eSound.link); eSound.isClicked=!eSound.isClicked"
        @keyup.e="eSound.isClicked=!eSound.isClicked"
        @keydown.a="playSound(aSound.link); aSound.isClicked=!aSound.isClicked"
        @keyup.a="aSound.isClicked=!aSound.isClicked"
        @keydown.s="playSound(sSound.link); sSound.isClicked=!sSound.isClicked"
        @keyup.s="sSound.isClicked=!sSound.isClicked"
        @keydown.d="playSound(dSound.link); dSound.isClicked=!dSound.isClicked"
        @keyup.d="dSound.isClicked=!dSound.isClicked"
        @keydown.z="playSound(zSound.link); zSound.isClicked=!zSound.isClicked"
        @keyup.z="zSound.isClicked=!zSound.isClicked"
        @keydown.x="playSound(xSound.link); xSound.isClicked=!xSound.isClicked"
        @keyup.x="xSound.isClicked=!xSound.isClicked"
        @keydown.c="playSound(cSound.link); cSound.isClicked=!cSound.isClicked"
        @keyup.c="cSound.isClicked=!cSound.isClicked"
        >
        <div class="powerButton" @click="isOn=!isOn"><button>{{isOn}}</button></div>
        <div
            class="qdiv"
            :class="{colorRed: qSound.isClicked, colorGreen: !qSound.isClicked}">q</div>
        <div
            class="wdiv"
            :class="{colorRed: wSound.isClicked, colorGreen: !wSound.isClicked}">w</div>
        <div
            class="ediv"
            :class="{colorRed: eSound.isClicked, colorGreen: !eSound.isClicked}">e</div>
        <div
            class="adiv"
            :class="{colorRed: aSound.isClicked, colorBlue: !aSound.isClicked}">a</div>
        <div
            class="sdiv"
            :class="{colorRed: sSound.isClicked, colorBlue: !sSound.isClicked}">s</div>
        <div
            class="ddiv"
            :class="{colorRed: dSound.isClicked, colorBlue: !dSound.isClicked}">d</div>
        <div
            class="zdiv"
            :class="{colorRed: zSound.isClicked, colorPurple: !zSound.isClicked}">z</div>
        <div
            class="xdiv"
            :class="{colorRed: xSound.isClicked, colorPurple: !xSound.isClicked}">x</div>
        <div
            class="cdiv"
            :class="{colorRed: cSound.isClicked, colorPurple: !cSound.isClicked}">c</div>
        <div class="volume">
            <input type="range">
            <input type="range">
        </div>
        
    </div>
    
    <div v-else>haba baba</div>
</template>

<script>

    export default {

        data() {
            return {
                isOn: false,

                qSound:{
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/31[kb]sp12-06.wav.mp3',
                    isClicked: false
                },
                wSound:{
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/34[kb]sp12-28.wav.mp3',
                    isClicked: false
                },
                eSound:{
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/25[kb]sp12-26.wav.mp3',
                    isClicked: false
                },
                aSound:{
                    link: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/VIDEO%20GAMES/zaxxon/17[kb]01.wav.mp3',
                    isClicked: false
                },
                sSound:{
                    link: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/39[kb]Alert-Siren.wav.mp3',
                    isClicked: false
                },
                dSound:{
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/18[kb]sp12-17.wav.mp3',
                    isClicked: false
                },
                zSound:{
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/7[kb]sp12-24.wav.mp3',
                    isClicked: false
                },
                xSound:{
                    link: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/11[kb]Beep-Boop.wav.mp3',
                    isClicked: false
                },
                cSound: {
                    link: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/28[kb]sp12-21.wav.mp3',
                    isClicked: false
                }
            }
        },

        methods: {
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },

            playSound(sound) {
                if (sound) {
                    var audio = new Audio(sound);
                    audio.play();
                }
            },
        }
    }
</script>

<style scoped="scoped">
    .main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 2% 2%;
        grid-template-areas:    "powerButton qdiv wdiv ediv" 
                                "volume adiv sdiv ddiv" 
                                "volume zdiv xdiv cdiv";
        justify-items: center;
        align-items: center;
        width: 35%;
        height: 50%;
        border: 2px solid silver;
        outline: none;
    }

    .qdiv {
        grid-area: qdiv;
    }
    .wdiv {
        grid-area: wdiv;
    }
    .ediv {
        grid-area: ediv;
    }
    .adiv {
        grid-area: adiv;
    }
    .sdiv {
        grid-area: sdiv;
    }
    .ddiv {
        grid-area: ddiv;
    }
    .zdiv {
        grid-area: zdiv;
    }
    .xdiv {
        grid-area: xdiv;
    }
    .cdiv {
        grid-area: cdiv;
    }

    .main > div {
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        width: 8rem;
        height: 8rem;
    }

    .colorRed {
        background: radial-gradient(#e7c0c0, #c41c1c);
    }

    .colorGreen {
        background: radial-gradient(#e9f0ea00, #42bb52);
    }

    .colorBlue{
        background: radial-gradient(#e8d6f7, #1d2bc2);
    }

    .colorPurple{
        background: radial-gradient(#faf5ff, #df6afc);
    }

    .powerOff {
        background-color: blue;
    }

    .volume {


        transform: rotate(90deg);
    }
</style>