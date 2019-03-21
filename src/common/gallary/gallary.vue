<template>

<div class="gallary-wrapper" @click="handleGallary">


        <swiper :options="swiperOptions" ref="mySwiper" @someSwiperEvent="callback" class="gallary-content">
                <!-- slides -->
                <swiper-slide v-for="(elem,i) of bannerList" :key="i">
                    <img class="banner_img" :src="elem.src" @click="isShow">
                </swiper-slide>
            
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination">
                
                
                </div>
              
        </swiper>



</div>

</template>


<script>
export default{
data(){
return{
swiperOptions:{
    observeParents:true,
    observe:true
}
}
},
props:['bannerList'],
methods:{
handleGallary(){
    this.$emit("close")
}    

}
}


</script>

<style lang="scss" scoped>

.gallary-wrapper{

position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:10;
overflow:hidden;
background:#000;
display:flex;
flex-direction:column;
justify-content:center;
.gallary-content{
width:100%;
height:0;
padding-bottom:60%;
.swiper-pagination{
color:#fff;
}
}
}

</style>