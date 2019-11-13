<template>
  <div id="app">
    <router-view/>

    <!-- 底部导航组件strat -->
    <FooterGuide v-show="$route.meta.showFooter"/>
    <!-- 底部导航组件end -->
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

import {mapActions} from 'vuex'

export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted(){
    // 第一种方法
    // this.$store.dispatch('getAddress')
    // 第二种方法  map映射
    this.getAddress()
  },
  methods:{
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // @font-face
  //   font-family: 'iconfont';  /* project id 1492580 */
  //   src: url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.eot');
  //   src: url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.eot?#iefix') format('embedded-opentype'),
  //   url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.woff2') format('woff2'),
  //   url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.woff') format('woff'),
  //   url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.ttf') format('truetype'),
  //   url('//at.alicdn.com/t/font_1492580_g4d2mxi5n3.svg#iconfont') format('svg');
  // .iconfont 
  //   font-family: "iconfont" !important;
  //   font-size: 16px;
  //   font-style: normal;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
