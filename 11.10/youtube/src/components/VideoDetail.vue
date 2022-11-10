<template>
  <div>
    <div v-if="selectedVideo">
      <div class="ratio ratio-16x9">
        <iframe :src="videoUrl" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    selectedVideo: Object,
  },
  computed: {
    videoUrl(){
      console.log( " 마지막 ",this.selectedVideo)
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
    }
  }
}
</script>

<style>

</style>