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
html {
  min-height: 100%;
}
body {
  margin: 0;
  overflow: hidden;
}
.color {
  
  background: linear-gradient(0deg, rgba(165,214,167,1) 0%, rgba(197,225,165,1) 100%);
}

</style>
