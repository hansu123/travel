<template>

        <div class="detail-banner">
        
        <div class="banner-wrapper">
                <swiper :options="swiperOption" >
                        <!-- slides -->
                        <swiper-slide v-for="(elem,i) of bannerList" :key="i">
                            <img class="banner_img" :src="elem.src" @click="handleGallaryShow">
                        </swiper-slide>
                    
                        <!-- Optional controls -->
                        <div class="swiper-pagination"  slot="pagination">
                        
                        
                        </div>
                      
                      </swiper>
            <ul class="banner-info">
                <li>上海自由行定制</li>
            </ul>
        </div>

        
        <gallary-banner v-show="gallary" :bannerList="bannerList"  @close="handleGallaryClose"></gallary-banner>
        
            
        </div>
        
        
        </template>
        
        <script>
         import GallaryBanner from "@/common/gallary/gallary.vue";
         export default{
         data(){return {
         gallary:false,
         swiperOption:{
         
         },

         bannerList:[
         {id:1,src:"https://b1-q.mafengwo.net/s10/M00/FE/B0/wKgBZ1nExhSAH2uCAAXNJxYQuPY71.jpeg?imageMogr2%2Fthumbnail%2F%21480x256r%2Fgravity%2FCenter%2Fcrop%2F%21480x256%2Fquality%2F100"},
         {id:2,src:"https://b2-q.mafengwo.net/s10/M00/FE/E6/wKgBZ1nExjqAA5r7AAQpa-p0QWE23.jpeg?imageMogr2%2Fthumbnail%2F%21480x256r%2Fgravity%2FCenter%2Fcrop%2F%21480x256%2Fquality%2F100"},
          
         ]
         }},
         methods:{
         handleGallaryShow(){
         this.gallary=true;
         },
         handleGallaryClose(){
         this.gallary=false;
         }
         },
         components:{
         GallaryBanner
         }
         }
        

        </script>
        
       
        <style lang="scss" >
        @import "~common/sass/main.scss";
        .banner-wrapper{
        position:relative;
        .swiper-wrapper{
        width:100%;
        height:0;
        padding-bottom:50%;}
        .banner-img{width:100%;}
        ul.banner-info{
        font-size:.2rem;
        position:absolute;
        left:.1rem;
        bottom:.4rem;
        z-index:10;
        color:#fff;
        }
        }
        </style>