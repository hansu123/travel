<template>
<div class="home-swiper">

<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="(elem,i) of bannerList" :key="i"><img class="banner_img" :src="elem.src"></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    
    
    </div>
  
  </swiper>
</div>

</template>


<script>

export default{

props:['bannerList'],
data(){

   return {
     swiperOption:{},
     bannerList:[
 
       ]


   }  
}


}

</script>


<style lang="scss">

.home-swiper{

width:100%;
height:0;
over-flow:hidden;
height:0;
padding-bottom:31.25%;
.banner_img{width:100%}
}

</style>