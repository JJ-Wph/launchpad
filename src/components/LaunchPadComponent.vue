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
        <div 
            class="powerButton" 
            @click="powerOnOrOff; isOn=!isOn">
                <button :class="{colorRed: isOn}">
                        <img :class="{redSymbol: isOn}" src="./imgs/pwrbtn.png">
                </button>
        </div>
        
        
        
        <div
            class="qdiv"
            :class="{isoff: !isOn, colorRed: qSound.isClicked, colorGreen: !qSound.isClicked}">Q</div>
        <div
            class="wdiv"
            :class="{isoff: !isOn, colorRed: wSound.isClicked, colorGreen: !wSound.isClicked}">W</div>
        <div
            class="ediv"
            :class="{isoff: !isOn, colorRed: eSound.isClicked, colorGreen: !eSound.isClicked}">E</div>
        <div
            class="adiv"
            :class="{isoff: !isOn, colorRed: aSound.isClicked, colorBlue: !aSound.isClicked}">A</div>
        <div
            class="sdiv"
            :class="{isoff: !isOn, colorRed: sSound.isClicked, colorBlue: !sSound.isClicked}">S</div>
        <div
            class="ddiv"
            :class="{isoff: !isOn, colorRed: dSound.isClicked, colorBlue: !dSound.isClicked}">D</div>
        <div
            class="zdiv"
            :class="{isoff: !isOn, colorRed: zSound.isClicked, colorPurple: !zSound.isClicked}">Z</div>
        <div
            class="xdiv"
            :class="{isoff: !isOn, colorRed: xSound.isClicked, colorPurple: !xSound.isClicked}">X</div>
        <div
            class="cdiv"
            :class="{isoff: !isOn, colorRed: cSound.isClicked, colorPurple: !cSound.isClicked}">C</div>
    </div>
    
    <div v-else>haba baba</div>
</template>

<script>

    export default {

        data() {
            return {
                isOn: false,

                qSound:{
                    link: "",
                    isClicked: false
                },
                wSound:{
                    link: "",
                    isClicked: false
                },
                eSound:{
                    link: "",
                    isClicked: false
                },
                aSound:{
                    link: "",
                    isClicked: false
                },
                sSound:{
                    link: "",
                    isClicked: false
                },
                dSound:{
                    link: "",
                    isClicked: false
                },
                zSound:{
                    link: "",
                    isClicked: false
                },
                xSound:{
                    link: "",
                    isClicked: false
                },
                cSound: {
                    link: "",
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
        },

        computed:{
            powerOnOrOff() {
                if(this.isOn==false) {
                        this.qSound.link = '';
                        this.wSound.link = '@/assets/audio/BassF24.wav';
                        this.aSound.link = '';
                        this.sSound.link = '';
                        this.dSound.link = '';
                        this.zSound.link = '';
                        this.xSound.link = '';
                        this.cSound.link = '';
                } else {
                        this.qSound.link = "";
                        this.wSound.link = "";
                        this.eSound.link = "";
                        this.aSound.link = "";
                        this.sSound.link = "";
                        this.dSound.link = "";
                        this.zSound.link = "";
                        this.xSound.link = "";
                        this.cSound.link = "";
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
        grid-template-areas:    "powerButton qdiv wdiv ediv" 
                                ". adiv sdiv ddiv" 
                                ". zdiv xdiv cdiv";
        justify-items: center;
        align-items: center;
        width: 35%;
        height: 50%;
        background: #616161;
        background: -webkit-linear-gradient(to bottom, rgba(97, 97, 97, 1), rgba(15, 15, 16, 1));
        background: linear-gradient(to bottom, rgba(97, 97, 97, 1), rgba(15, 15, 16, 1));
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        outline: none;
    }
    .powerButton {
        grid-area: powerButton;
        display: flex;
        width: 100%;
        height: 100%;
    }

    button {
        width: 60%;
        height: 60%;
        background: radial-gradient(#e9e3e3, #706f6f);
        box-shadow: rgba(31, 31, 31, 0.4) 0px 2px 4px, rgba(20, 20, 20, 0.3) 0px 7px 13px -3px, rgba(12, 12, 12, 0.2) 0px -3px 0px inset;
        border: 1px solid grey;
        border-radius: 50%;
        outline: none;
    }

    img{
        width: 50%;
        height: auto;
        filter: invert(40%) sepia(52%) saturate(21%) hue-rotate(18deg) brightness(96%) contrast(81%);
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
        width: 6rem;
        height: 6rem;
    }

    .redSymbol {
        filter: invert(73%) sepia(43%) saturate(7492%) hue-rotate(325deg) brightness(100%) contrast(90%);
    }

    .colorRed {
        background: radial-gradient(#e7c0c0, #ff3737);
        box-shadow: rgb(167, 113, 113) 3px 3px 6px 0px inset, rgba(235, 132, 132, 0.5) -3px -3px 6px 1px inset;
    }

    .colorGreen {
        background: radial-gradient(#e9f0ea, #42bb52);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    .colorBlue{
        background: radial-gradient(#e8d6f7, #1d2bc2);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    .colorPurple{
        background: radial-gradient(#faf5ff, #692a79);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    .isoff {
        background: radial-gradient(#e9e3e3, #706f6f);
        box-shadow: rgba(31, 31, 31, 0.4) 0px 2px 4px, rgba(20, 20, 20, 0.3) 0px 7px 13px -3px, rgba(12, 12, 12, 0.2) 0px -3px 0px inset;
    }

    @media (max-width: 1200px) {
        .main > div {
            width: 4rem;
            height: 4rem;
        }
    }
</style>