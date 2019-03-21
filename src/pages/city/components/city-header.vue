<template>
<div class="city-header">
<router-link to="/">
<span class="iconfont headerback">&#xe766;</span>
</router-link>
城市选择
<div><span></span></div>

</div>


</template>


<script>

export default{


}

</script>

<style lang="scss">
@import "~common/sass/variable.scss";
.city-header{
position:relative;
font-size:.3rem;
line-height:$headerHeight;
background:$themeColor;
color:#fff;
text-align:center;
.headerback{
position:absolute;
left:.3rem;
top:0;
color:#fff;    
}}

</style>