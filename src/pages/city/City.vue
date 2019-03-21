<template>

<div class="city">
<city-header></city-header>
<city-search :cityList="cityList"></city-search>
<city-list :hotList="hotList" :cityList="cityList" :cityAlpha="cityAlpha"></city-list>
<city-sider @change="getLetter"></city-sider>
</div>

</template>


<script>

import CityHeader from "@/pages/city/components/city-header";
import CitySearch from "@/pages/city/components/city-search";
import CityList from "@/pages/city/components/city-list";
import CitySider from "@/pages/city/components/city-sider";
export default{

created(){
let url="http://localhost:8080/api/city.json";
this.axios.get(url).then((result)=>{
let res=result.data;
if(res.data){
let data=res.data;
this.hotList=data.hotCities;
this.cityList=data.cities;

}

})    
},
data(){return {

hotList:[],
cityList:[],
cityAlpha:"",
}},
methods:{

getLetter(value){
this.cityAlpha=value;
}
},
components:{
    CityHeader,
    CitySearch,
    CityList,
    CitySider
}

}

</script>

<style lang="scss">
@import "~common/sass/mixins.scss";
@import "~common/sass/main.scss";
</style>