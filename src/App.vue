<template>
  <navbarMenu />
  <router-view/>
</template>

<script>
import navbarMenu from './components/Navbar.vue'

export default {
  components: {
    navbarMenu,
}
}
</script>


<style lang="scss">
/*#app {
  font-family: Helvetica, Arial, sans-serif;
}*/
</style>
