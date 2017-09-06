<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"
                :isLoading="isLoading" :rank="rank"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getMusicList} from 'api/rank'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'

  export default {
    computed: {
      title() {
        return this.toplist.topTitle
      },
      bgImage() {
        return this.toplist.picUrl
      },
      ...mapGetters([
        'toplist'
      ])
    },
    created() {
      this._getMusicList()
    },
    data() {
      return {
        songs: [],
        isLoading: true,
        rank: true
      }
    },
    methods: {
      _getMusicList() {
        getMusicList(this.toplist.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.songlist)
            this.isLoading = false
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list && list.forEach((musicData) => {
          if (musicData.data.songid && musicData.data.albumid) {
            ret.push(createSong(musicData.data))
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
