<template>
<div class="home">
    <img alt="logo du site" class="logo" src="../src/assets/img/LogoFullBlack.png">
  </div>
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
}
.color {
  
  background: linear-gradient(0deg, rgba(165,214,167,1) 0%, rgba(197,225,165,1) 100%);
}

.home{
  display: flex;
  justify-content: center;
}
.logo {
  width: 7%;
  height: 7%;
  margin-top: 10px;
}


</style>
