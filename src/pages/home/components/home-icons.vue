<template>
  <div class="home-icons">
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="(icon,i) of iconList" :key="i">
      
     <ul>
  
    <li v-for="(value,i) of icon" :key="i">
      <a class="icon-img"><img :src="value.src"></a>
    <p>{{value.title}}</p>
    </li>
  
    </ul></swiper-slide>

  



    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    
    
    </div>
  
  </swiper>




</div>
</template>

<script>
export default {
  data () {
    return {
    iconImgs:[
      {title:"酒店",src:"//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp"},
       {title:"机票",src:"//gw.alicdn.com/tfs/TB1DoXFwHsrBKNjSZFpXXcXhFXa-210-126.png_110x10000.jpg_.webp"},
       {title:"火车票",src:"//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp"},
       {title:"汽车票",src:"//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"},
       {title:"酒店",src:"//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp"},
       {title:"机票",src:"//gw.alicdn.com/tfs/TB1DoXFwHsrBKNjSZFpXXcXhFXa-210-126.png_110x10000.jpg_.webp"},
       {title:"火车票",src:"//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp"},
       {title:"汽车票",src:"//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"},
       {title:"汽车票",src:"//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp"},
      ],
      swiperOption:{},

    };
  },

  components: {},

  computed: {
  iconList(){
  
  let pages=[];
  this.iconImgs.forEach((elem,i)=>{
  let k=Math.floor(i/8);
  if(!pages[k]){
   pages[k]=[]; 
  }
  pages[k].push(elem); 
  });

  return pages;

  }


  },

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>

@import "~common/sass/variable.scss";
.home-icons{

width:100%;
height:0;
padding-bottom:$icon-height;
margin-bottom:.2rem;

ul>li{

float:left;
width:$icon-width;
height:0;
padding-bottom:25%;
position:relative;

.icon-img{
display:block;
position:absolute;
padding:.1rem;
top:0;
left:0;
right:0;
bottom:.3rem;

}
img{width:100%;height:100%}
p{position:absolute;font-size:.3rem;bottom:0;left:0;right:0;text-align:center;}
}
}


</style>