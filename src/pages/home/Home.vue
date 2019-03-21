<template>
  <div class="hello">
    <home-header></home-header>
    <home-swiper :bannerList="bannerList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekList="weekList"></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>

import HomeHeader from "@/pages/home/components/home-header"
import HomeSwiper from "@/pages/home/components/home-swiper"
import HomeIcons from "@/pages/home/components/home-icons"
import HomeRecommend from "@/pages/home/components/home-recommend"
import HomeWeekend from "@/pages/home/components/home-weekend"
import HomeFooter from "@/pages/home/components/home-footer"
export default {
  name: 'Home',
  created(){
    this.getWeekList()
  },
  data () {
    return {
      weekList:[],
      recommendList:[]

    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeFooter
  },
  methods:{
   
    getWeekList(){
      
      let url="http://localhost:8080/api/index.json";
      this.axios.get(url).then((result)=>{
      let res=result.data;
      if(res.data){
       let data=res.data;
       this.bannerList=data.bannerList;
       this.recommendList=data.recommendList;
       this.weekList=data.weekList;
      
      }
      
      })
       
    
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~common/sass/mixins.scss";
@import "~common/sass/main.scss";
</style>
