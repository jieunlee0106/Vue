<template>
  <div id="app">
    <h1 style="color: #FF6F61;">My First Youtube Project</h1>
    <div class='d-flex justify-content-center'>
      <div>
      <TheSearchBar
        @input-change='inputChange'
      />
      </div>
      <div>
        <button class=" row ml-3" @click="inputChange">search</button>
      </div>
    </div>
    <div class='row'>
      <div class="col-12 col-lg-8">
        <VideoDetail :selected-video='selectedVideo'/>
      </div>
      <div class="col-12 col-lg-4">
        <VideoList :videos="videos" 
        @select-video="selectVideo"/>
      </div>
    </div>
  </div>
</template>

<script>

import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'
import TheSearchBar from './components/TheSearchBar.vue'
import axios from 'axios'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
export default {
  name: 'App',
  components: {
    VideoDetail,
    VideoList,
    TheSearchBar,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,

    }
  },
  methods: {
    inputChange(query) {
      axios({
        url: 'https://www.googleapis.com/youtube/v3/search',
        params:{
          key: API_KEY,
          part: 'snippet',
          q: query,
          type: 'video'          
        },
      })
      .then(res => {
        console.log(res.data)
        this.videos = res.data.items
      })
      .catch(err => console.log(err))
    },
    selectVideo(video) {
      console.log(video)
      this.selectedVideo = video
    }, 
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
