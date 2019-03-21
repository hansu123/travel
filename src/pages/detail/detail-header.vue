<template>

<div class="detail-header">

    <div class="header-abs" v-show="showAbs">
        <div class="header-left"><router-link to="/"><span class="iconfont">&#xe766;</span></router-link></div> 
        <ul class="header-right"><li><span class="iconfont">&#xe696;</span></li><li><span class="iconfont">&#xe646;</span></li></ul>
    </div>

    <div class="header-fixed" v-show="!showAbs">
    <div class="header-left"><router-link to="/"><span class="iconfont">&#xe766;</span></router-link></div>
    <p class="header-title">景点详情</p> 
    <ul class="header-right"><li><span class="iconfont">&#xe696;</span></li><li><span class="iconfont">&#xe646;</span></li></ul>
    </div>

</div>

</template>


<script>

export default{


data(){
    return{
        showAbs:true
    }
},
methods:{
getScrollTop(){
console.log(1);
document.documentElement.scrollTop>42?this.showAbs=false:this.showAbs=true; 
}

},
activated(){
window.addEventListener("scroll",this.getScrollTop);
},
deactivated(){
window.removeEventListener("scroll",this.getScrollTop); 
}

}



</script>


<style lang="scss" scoped>
@import "~common/sass/variable.scss";
@import "~common/sass/mixins.scss";
.header-abs{
@include h-header(fixed);
display:flex;
justify-content:space-between;
.header-left{margin-right:0.3rem;line-height:$headerHeight;
}

span{padding:.1rem;color:#fff;background:rgba(0,0,0,0.5);border-radius:50%;}

}

.header-fixed{
@include h-header(fixed);
display:flex;
background:#fff;
color:#000;
z-index:11;

.header-left{
.backhome{padding:.1rem;color:#fff;}
}
.header-title{flex:1;text-align:center;}
}

.header-abs,.header-fixed{
.header-right{
display:flex;
li{margin-left:.2rem;}}
}

</style>