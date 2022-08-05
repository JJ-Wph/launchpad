<template>
    
    <div
        v-if="!isMobile()"
        class="main"
        tabindex="-1"
        @keydown.q="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/31[kb]sp12-06.wav.mp3'); qIsClicked=!qIsClicked"
        @keyup.q="qIsClicked=!qIsClicked"
        @keydown.w="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/34[kb]sp12-28.wav.mp3'); wIsClicked=!wIsClicked"
        @keyup.w="wIsClicked=!wIsClicked"
        @keydown.e="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/25[kb]sp12-26.wav.mp3'); eIsClicked=!eIsClicked"
        @keyup.e="eIsClicked=!eIsClicked"
        @keydown.a="playSound('https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/VIDEO%20GAMES/zaxxon/17[kb]01.wav.mp3'); aIsClicked=!aIsClicked"
        @keyup.a="aIsClicked=!aIsClicked"
        @keydown.s="playSound('https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/39[kb]Alert-Siren.wav.mp3'); sIsClicked=!sIsClicked"
        @keyup.s="sIsClicked=!sIsClicked"
        @keydown.d="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/18[kb]sp12-17.wav.mp3'); dIsClicked=!dIsClicked"
        @keyup.d="dIsClicked=!dIsClicked"
        @keydown.z="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/7[kb]sp12-24.wav.mp3'); zIsClicked=!zIsClicked"
        @keyup.z="zIsClicked=!zIsClicked"
        @keydown.x="playSound('https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/11[kb]Beep-Boop.wav.mp3'); xIsClicked=!xIsClicked"
        @keyup.x="xIsClicked=!xIsClicked"
        @keydown.c="playSound(cSound.link); cSound.isClicked=!cSound.isClicked"
        @keyup.c="cSound.isClicked=!cSound.isClicked"
        >
        <div class="powerButton" @click="isOn=!isOn"><button>{{isOn}}</button></div>
        <div
            class="qdiv"
            :class="{colorRed: qIsClicked}"
            @mousedown="playSound('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/EMU%20SP%2012%20Kult/31[kb]sp12-06.wav.mp3'); qIsClicked=!qIsClicked"
            @mouseup="qIsClicked=!qIsClicked"
            
            >q</div>
        <div
            class="wdiv"
            :class="{colorRed: wIsClicked}"
            @keydown.w="wIsClicked=!wIsClicked">w</div>
        <div
            class="ediv"
            :class="{colorRed: eIsClicked}"
            @keydown.e="eIsClicked=!eIsClicked">e</div>
        <div
            class="adiv"
            :class="{colorRed: aIsClicked}"
            @keydown.w="aIsClicked=!aIsClicked">a</div>
        <div
            class="sdiv"
            :class="{colorRed: sIsClicked}"
            @keydown.w="sIsClicked=!sIsClicked">s</div>
        <div
            class="ddiv"
            :class="{colorRed: dIsClicked}"
            @keydown.w="dIsClicked=!dIsClicked">d</div>
        <div
            class="zdiv"
            :class="{colorRed: zIsClicked}"
            :style="dynClass[0]"
            @keydown.w="zIsClicked=!zIsClicked">z</div>
        <div
            class="xdiv"
            :style="dynClass[1]"
            :class="{colorRed: xIsClicked}"
            @keydown.w="xIsClicked=!xIsClicked">x</div>
        <div
            class="cdiv"
            :class="{colorRed: cSound.isClicked}"
            @keydown.c="cSound.isClicked=!cSound.isClicked">c</div>
    </div>
    <div v-else>haba baba</div>
</template>

<script>

    export default {

        data() {
            return {
                isOn: false,

                qIsClicked: false,
                wIsClicked: false,
                eIsClicked: false,
                aIsClicked: false,
                sIsClicked: false,
                dIsClicked: false,
                zIsClicked: false,
                xIsClicked: false,

                dynClass: [
                {
                    backgroundColor: 'green',
                    border: '3px solid red'
                },
                {
                    backgroundColor: 'yellow',
                    border: '1px dashed cyan'
                }
                ],

                qSound:{},
                wSound:{},
                eSound:{},
                aSound:{},
                sSound:{},
                dSound:{},
                zSound:{},
                xSound:{},
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 2% 2%;
        grid-template-areas:    ". qdiv wdiv ediv ." 
                                ". adiv sdiv ddiv ." 
                                ". zdiv xdiv cdiv .";
        justify-items: center;
        align-items: center;
        width: 50%;
        height: 100%;
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
        border: 2px solid black;
        align-items: center;
        justify-content: center;
        width: 8rem;
        height: 8rem;
    }

    .colorRed {
        background-color: red;
    }

    .powerOff {
        background-color: blue;
    }
</style>