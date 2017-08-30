<template>
  <div>
    <div class="loading" v-show="isLoading">
      <img src="./loading.gif" width="24" height="24">
      <p class="desc">{{title}}</p>
    </div>
    <div class="loading" v-show="!isLoading&&length===0">
      <p class="desc">暂无数据</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      },
      isLoading: {
        type: Boolean,
        default: true
      },
      length: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>
