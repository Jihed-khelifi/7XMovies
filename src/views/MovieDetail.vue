<template>
  <div class="movie">
      <div class="player">
          <iframe src="//streamtape.com/e/R7gwOXdLMXCdVdb" frameborder="0"></iframe>
      </div>
      <div class="movie-detail">
          <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
          <div class="movie-info">
              <h2>{{movie.Title}}</h2>
              <p>{{ movie.Year }}</p>
              <p> {{movie.Plot}} </p>
          </div>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import {useRoute}  from 'vue-router'
import env from '@/env.js'
export default {
    setup() {
        const movie = ref({})
        const route  = useRoute()
        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
                .then(res => res.json())
                .then(data => {
                    movie.value = data
                    console.log(data);
                    })
        });
        return {
            movie

        }
    }
}
</script>

<style lang="scss">
@import url('../styles/movieDetail.css');
</style>