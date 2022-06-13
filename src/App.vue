<template>
  <navbarMenu />
  <router-view/>
</template>

<script>
import navbarMenu from './components/Navbar.vue'

export default {
  components: {
    navbarMenu
  }
}
</script>


<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
body {
  background-color: #CFD8DC;
}
</style>
