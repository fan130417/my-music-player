<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs" :isLoading="isLoading"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getDiscDetail} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'

  export default {
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    created() {
      this._getDiscDetail()
    },
    data() {
      return {
        songs: [],
        isLoading: true
      }
    },
    methods: {
      _getDiscDetail() {
        if (!this.disc.dissid) {
          this.$router.push({
            path: '/recommend'
          })
          return
        }
        getDiscDetail(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.cdlist[0])
            this.songs = this._normalizeSinger(res.cdlist[0].songlist)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all .3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
