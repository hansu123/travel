<template>
<div class="home-weekend">
<div class="weekend_title">周末游</div>
<div class="week_list">

<router-link to="/detail" class="week_item" v-for="(elem,i) of weekList" :key="i">
<dl class="week_content">
    <dt class="week_header">
 
    <img :src="elem.src">
    </dt>
    <dd class="week_body">
    <p class="week_title" data>{{elem.title}}</p>
    <p class="week_desc">{{elem.desc}}</p>
    <ul class="week_info"><li class="week_price">¥{{elem.price}}</li><li class="week_sale">{{elem.sale}}人购买</li><li>···</li></ul>
    </dd>
</dl>
</router-link>


</div>


  </div>
</template>

<script>
export default {
  props:['weekList'],
  data () {
    return {
  }},

  components: {},

  computed: {},

  mounted: {
    
  },

  created(){

  },

  methods: {


  }
}

</script>
<style lang='scss' scoped>
@import "~common/sass/mixins.scss";
@import "~common/sass/main.scss";
.weekend_title{@include hometitle}

.week_item{
display:block;

padding: 0.2rem 0.3rem;

dl.week_content{

dt.week_header{
width:100%;

img{width:100%;height:4rem;}
}

dd.week_body{
font-size:.3rem;
p.week_title{text-decoration:none;font-size:.4rem;color:rgb(94, 150, 145);}
.week_desc{margin-top:.2rem;font-size:.4rem;font-weight:bold;text-align:left;@include text-ellipsis;}
.week_info{display:flex;justify-content: space-around;align-items:center;margin-top:.2rem;line-height:.5rem;
.week_price{font-size:.4rem;color:rgb(255, 80, 0);}}
}
}

}
</style>