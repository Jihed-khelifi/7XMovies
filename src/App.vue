<template>
  <app-header></app-header>
  <main>
    <router-view/>
  </main>
  <app-footer></app-footer>
</template>
<script>
export default {
  data() {
    return {
    } 
  },
}
</script>

<style lang="scss">
@import url('./styles/app.css');
</style>
