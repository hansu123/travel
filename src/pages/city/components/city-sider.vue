<template>

    <div class="sider-list">
        <ul class="sider-item">
            <li class="active" @click="showLetter" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">A</li>
            <li @click="showLetter">B</li>
            <li @click="showLetter">C</li>
            <li @click="showLetter">D</li>
            <li @click="showLetter">E</li>
            <li @click="showLetter">F</li>
            <li @click="showLetter">G</li>
            <li @click="showLetter">H</li>
            <li @click="showLetter">J</li>
            <li @click="showLetter">K</li>
            <li @click="showLetter">L</li>
            <li @click="showLetter">M</li>
            <li @click="showLetter">N</li>
            <li @click="showLetter">P</li>
            <li @click="showLetter">Q</li>
            <li @click="showLetter">R</li>
            <li @click="showLetter">S</li>
            <li @click="showLetter">T</li>
            <li @click="showLetter">W</li>
            <li @click="showLetter">X</li>
            <li @click="showLetter">Y</li>
            <li @click="showLetter">Z</li>
        </ul>

    </div>

</template>


<script>

    export default{

        data(){
        touchStatus:false
        },

        methods:{
            showLetter(e){
            this.$emit("change",e.target.innerHTML);
            },
            handleTouchStart(){},
            handleTouchMove(){},
            handleTouchEnd(){},
        }
    }

</script>


<style lang="scss" scoped>
  @import "~common/sass/variable.scss";

    .sider-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        .sider-item {
            padding: 0 .1rem;
            font-size: .1rem;
            li {
                text-align: center;
                margin: .1rem 0;
            }
            li.active {
                color: $themeColor;
            }
        }
    }

</style>