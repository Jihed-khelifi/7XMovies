<template>
  <header>
    <router-link to="/">
      <h1 class="logo-whole"><span class="logo-7x">7X</span>Movies</h1>
    </router-link>
    <div class="links-container">
      <router-link to="/" class="link">Home</router-link>

      <div class="genre-list-container">
        <p class="link genre">Genre</p>
        <div class="genre-list">
        <router-link to="/"><p>Action</p></router-link>
        <router-link to="/"><p>Adventure</p></router-link>
        <router-link to="/"><p>Biography</p></router-link>
        <router-link to="/"><p>Comedy</p></router-link>
        <router-link to="/"><p>Crime</p></router-link>
        <router-link to="/"><p>Drama</p></router-link>
        <router-link to="/"><p>Fantasy</p></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>

</style>