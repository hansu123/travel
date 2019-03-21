<template>

<div class="detail">
<detail-header></detail-header>
<detail-banner></detail-banner>
<detail-list></detail-list>

    
</div>


</template>

<script>
import DetailBanner from "@/pages/detail/detail-banner.vue";
import DetailHeader from "@/pages/detail/detail-header.vue";
import DetailList from "@/pages/detail/detail-list.vue";
export default{

components:{
DetailBanner,
DetailHeader,
DetailList
}

}


</script>


<style lang="scss" scoped>
@import "~common/sass/main.scss";
.detail{height:2000px;}
</style>