<template>

    <div class="city-list" ref="wrapper">
        <div>
            <div class="city-now">
                <p class="city-now_title">当前城市</p>
                <button><span class="iconfont">&#xe60f;</span>{{this.$store.state.city}}</button>
            </div>
            <div class="city-hot">
                <p>热门城市</p>
                <div class="city-hot_item">
                    <a href="#" v-for="(elem,i) of hotList" :key="i" @click="handleCityClick(elem.name)" >{{elem.name}}</a>
                </div>



            </div>
            <div class="city-content" >
                <dl class="content-item" v-for="(elem,i) of cityList" :key="i">
                    <dt class="item-header" :ref="i" >{{i}}</dt>
                    <dd class="item-address" v-for="(value,k) of elem" :key="k">{{value.name}}</dd>
                </dl>

            </div>

        </div>
       
    </div>
</template>


<script>
    import Bscroll from 'better-scroll';
    export default {
      
        data(){return {}},
        methods:{
         
        },
        props:['hotList','cityList','cityAlpha'],
        methods:{
            handleCityClick(city){
            // this.$store.dispatch("changeCity",city);
            this.$store.commit("changeCity",city);
            }
        },

        watch:{

        cityAlpha(){

           if(this.cityAlpha){
               let element=this.$refs[this.cityAlpha][0];
               this.scroll.scrollToElement(element);
           }
        },

       
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper,{click:true,tap: true});

        }

    }


</script>

<style lang="scss">
    @import "~common/sass/variable.scss";
    .city-list {
        font-size: .3rem;
        position: absolute;
        top: 1.64rem;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        .city-now {
            padding: .1rem .3rem;

            button {
                font-size: .3rem;
                width: calc(100/3*1% - .2rem);
                margin-top: .1rem;
                padding: .1rem .3rem;
                border: 1px solid #eee;
                outline: none;
                background: #fff;
            }
        }
        .city-hot {
            padding: .1rem .6rem .1rem .3rem;


            .city-hot_item {

                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                margin: 0 -.1rem;
            }
            a {
                width: calc(100/3*1% - .2rem);
                box-sizing: border-box;
                display: block;
                margin: .1rem;
                padding: .1rem .3rem;
                text-align: center;
                border: 1px solid #eee;
                border-radius: .1rem;
                outline: none;
                background: #fff;
            }

        }
        .city-content {
            padding: .1rem .3rem;
            dl.content-item {
                dt.item-header {
                    margin: 0 -0.3rem;
                    padding-left: .3rem;
                    background: #eee;
                    line-height: $headerHeight;
                }
                dd.item-address {
                    line-height: .6rem;
                    border-bottom: 1px solid #eee;
                }
            }
        }

    }

</style>