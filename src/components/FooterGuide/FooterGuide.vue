<template>
  <div class="footClass">
    <a href="javascript:;" class="item" :class="{active:'/index'===$route.path}" @click="goTo('/index')">
        <span class="item-icon"><i class="iconfont">&#xe646;</i></span>
        <span>首页</span>
    </a>
    <a href="javascript:;" class="item" :class="{active:'/search'===$route.path}" @click="goTo('/search')">
        <span class="item-icon"><i class="iconfont icon-sousuo"></i></span>
        <span>搜索</span>
    </a>
    <a href="javascript:;" class="item" :class="{active:'/order'===$route.path}" @click="goTo('/order')">
        <span class="item-icon"><i class="iconfont">&#xe643;</i></span>
        <span>订单</span>
    </a>
    <a href="javascript:;" class="item" :class="{active:'/personal'===$route.path}" @click="goTo('/personal')">
        <span class="item-icon"><i class="iconfont">&#xe641;</i></span>
        <span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
    name:'FooterGuide',
    data(){
        return{

        }
    },
    methods:{
        // 跳转页面
        goTo(path){
            this.$router.replace(path);
        }
    }
};
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .footClass 
        top-border-1px(#e4e4e4)
        width 100%
        height 50px
        position fixed
        z-index 100
        bottom 0
        left 0
        right 0
        background-color #fff
        display flex
        .item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            color #1e1e1e
            margin 5px
            &.active
                color #02a774
            span
                font-size 12px
                margin-bottom 5px
                .iconfont
                    font-size 22px
                   

</style>