<template>
  <div class="home">
      <div class="feature-card">
        <router-link to="/movie/tt0409591">
        <img src="https://i.pinimg.com/originals/91/ce/6e/91ce6edc136e9c6ecd651515e6693c02.jpg" alt="Naruto Poster" class="featured-img">
        <div class="detail">
          <h3>Naruto</h3>
          <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
        </div>
        </router-link>
      </div>
      <div class="search-movies-list">
        <form @submit.prevent="SearchMovies()" class="search-box">
          <input type="text" placeholder="What are you looking for ?" v-model="search">
          <button  type="submit" class="search-btn"><i class="fas fa-search"></i></button>
        </form>
        <p v-show="movies.length > 0" class="results-number"> Found {{movies.length}} results </p>
        <div class="movies-list">
          <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
              <div class="product-img">
                <img :src="movie.Poster" alt="Movie Poster">
                <div class="type">
                  {{ movie.Type }}
                </div>
              </div>
              <div class="detail">
                <p class="year"> {{ movie.Year}} </p>
                <h3> {{ movie.Title }} </h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import env from '@/env.js'

export default {
  setup() {
    const search = ref("");
    const searchHistory = search
    const movies = ref([])
    const SearchMovies = async () => {
      if(search.value != ""){
        const res = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        const data = await res.json()
        movies.value = data.Search
          // .then(res => res.json())
          // .then(data => {
          //   movies.value = data.Search
          //   }
      } 
    }
    return {
      search,
      movies,
      SearchMovies,
      searchHistory    
      }
  }

}
</script>
<style lang="scss">
  @import url('../styles/home.css');
</style>