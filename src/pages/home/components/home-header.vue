<template>

<div class="header">
<div class="header-left"><span class="iconfont">&#xe766;</span></div>
<div class="header-input">
<span class="iconfont search_icon">&#xe64a;</span><input type="text" class="header_search" placeholder="请输入城市"></div>
<router-link to="/city">
<div class="header-right" id="localCity"><span ref="LoaclCityName">{{this.$store.state.city}}</span><span class="iconfont">&#xe6b5;</span></div>
</router-link>
</div>
</template>



<script>







export default{


methods:{
data(){
return {
CityName:this.$store.state.city
}
}
}
}


</script>



<style lang="scss">



@import "~common/sass/variable.scss";

.header{
padding:0 0.2rem;    
font-size:0.3rem;
background:$themeColor;
display:flex;
color:#fff;


.header-left{margin-right:0.3rem;line-height:$headerHeight;}

.header-input{
flex:1;
position:relative;
.header_search{
padding-left:0.2rem;    
width:100%;
height:.64rem;
margin-top:.1rem;
margin-right:-0.2rem;
border-radius:0.1rem;
border:none;
outline:none;
}
.search_icon{
position:absolute;
top:0.42rem;
left:0.2rem;
}

}
.header-right{
margin-left:0.3rem;
line-height:$headerHeight;
text-align:center;
color:#fff;
}

}

</style>