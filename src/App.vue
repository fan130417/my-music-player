<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import { mapGetters, mapMutations } from 'vuex'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'

  export default {
    computed: {
      ...mapGetters([
        'fullScreen'
      ])
    },
    methods: {
      ...mapMutations({
        setFullScreen: 'SET_FULL_SCREEN'
      })
    },
    watch: {
      $route: {
        handler: function () {
          if (this.fullScreen) {
            this.setFullScreen(!this.fullScreen)
            this.$router.forward()
            return
          }
        }
      }
    },
    components: {
      MHeader,
      Tab,
      Player
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  #app
    color: $color-theme

</style>
