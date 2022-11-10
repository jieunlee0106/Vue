<template>
  <div>
    <li @click="selectVideo">
      <img :src="thumbnailUrl" alt="">
      <span>{{ videoTitle | stringUnescape }}</span>
    </li>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'ViedoListItem',
  props: {
    video: Object,
  },
  methods: {
    selectVideo() {
      this.$emit('select-video', this.video)
    }
  },

  computed: {
    thumbnailUrl() { return this.video.snippet.thumbnails.default.url },
    videoTitle() { return this.video.snippet.title }
    // videoTitle() { return _.unesscape(this.video.snippet.title) }
  },
  filters: {
    stringUnescape(rawText) { return _.unescape(rawText) }
  }
}
</script>

<style>

</style>