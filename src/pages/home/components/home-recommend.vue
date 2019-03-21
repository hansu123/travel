<template>
  <ul class="home-recommend">
    <div class="re_title">热销推荐</div>
    <li class="recommed_item" v-for="(elem,i) of recommendList" :key="i">
      <div class="re_content">
        <div class="re_header">
          <p>{{elem.title}}</p>
        </div>

        <dl class="re-body">
          <dt class="re_body_left">
      
              <img :src="elem.src">
        
          </dt>
          <dd class="re_body_right">
            <p class="re_desc">{{elem.content}}</p>
            <ul class="re_info">
              <li>{{elem.n_look}}</li>
              <li>
                作者:{{elem.author}}
                <img :src="elem.authorSrc">
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props:['recommendList'],
  data() {
    return {
     
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "~common/sass/mixins.scss";
.re_title {
 @include  hometitle;
}
.recommed_item {
  padding: 0.2rem 0.3rem;

  .re_header {
    font-size: 0.4rem;
    p {
      @include title-ellipsis;
    }
  }
  dl.re-body {
    width: 100%;
    color: rgb(141, 138, 138);
    margin-top: 0.1rem;
    display: flex;
    align-items: stretch;
    dt.re_body_left {
      width: 2.466rem;
 
        img {
          width: 100%;
          height: 2rem;
     
      }
    }
    dd.re_body_right {
      flex: 1;
      height: 2.4rem;
      padding-left: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p.re_desc {
        line-height: 1.3em;
        font-size: 0.3rem;
        padding: 0.14rem 0 0;
        text-align:left;
        @include text-ellipsis;
      }
      ul.re_info {
        display: flex;
        justify-content: space-around;
        line-height: 0.5rem;
        font-size: 0.3rem;
        img {
          border-radius: 50%;
          vertical-align: middle;
          width: 0.5rem;
        }
      }
    }
  }
}
</style>