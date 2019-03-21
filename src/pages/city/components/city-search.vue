<template>
    <div>
        <div class="city-search">
            <form action="" method="get">
                <input class="search-body" type="text" placeholder="请输入搜索城市或拼音" v-model="kword" >
            </form>

        </div>
        <div class="search-info" ref="wrapper" v-show="kword">
            <ul>
                <li v-for="elem of infoList">
                    {{elem}}</li>
            </ul>
            <p v-show="isNoResult" class="search-noresult">未匹配到相关城市</p>
        </div>
    </div>
</template>


<script>
    import Bscroll from "better-scroll";

    export default {

        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper);
        },

        data() {
            return {
                kword: "",
                lightWord: [],
                startSearch:false,
                infoList: [],
         
            }
        },
        props: ['cityList'],
        methods: {
         
        },
        computed:{
        isNoResult(){
        if(!this.startSearch){
        return !this.infoList.length;
       }
      
        },
        },
        watch: {
            kword() {

                if (this.kword != "") {
                    this.infoList=[];//每次查询前清空
                    if (timer) { clearTimout(timer); }
                    this.startSearch=true;
                    var timer = setTimeout(() => {
                       
                        for (var i in this.cityList) {

                            this.cityList[i].forEach((value, k) => {
                                if (value.name.indexOf(this.kword) > -1 || value.spell.indexOf(this.kword) > -1) {
                                    if (value.name.indexOf(this.kword) > -1) { this.lightWord.push(this.kword); }
                                    this.infoList.push(value.name);
                                }
                            });
                        }
                    this.startSearch=false; 
       
                    }, 300);



                }
                else {
                    this.infoList = [];
                }
            }
        }
    }

</script>

<style lang="scss">
    @import "~common/sass/variable.scss";
    .city-search {
        font-size: .3rem;
        width: 100%;
        padding: .1rem 0.3rem;
        background: $themeColor;
        text-align: center;
        box-sizing: border-box;
        .search-body {
            width: 100%;
            height: .6rem;
            text-align: center;
            border: none;
            outline: none;
            border-radius: .1rem;
        }
    }

    .search-info {

        position: absolute;
        top: 1.64rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        overflow: hidden;
        background: #fff;
        font-size: .3rem;
        ul>li {
           
            margin: .1rem .3rem;
            padding: .1rem 0;
            border-bottom: 1px solid #eee;
        }
        .search-noresult{
        margin-top:.3rem;
        text-align:center;
        color:rgb(122, 118, 118);
        }
    }
</style>