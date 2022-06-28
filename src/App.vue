<template>
<div class="home">
    <img alt="logo du site" class="logo" src="../src/assets/img/LogoFullBlack.png">
    <h1>Développeur Full Stack Junior</h1>
  </div>
  <router-view/>
  <navbarMenu />
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
  overflow: auto;
}
.color {
  
  background: linear-gradient(0deg, rgba(165,214,167,1) 0%, rgba(197,225,165,1) 100%);
}

.home{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 6%;
  height: 6%;
  margin: 1%;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 719px) {
  .logo {
    width: 25%;
  }
}
@media only screen and (min-device-width: 720px) and (max-device-width: 1200px) {
  .logo {
    width: 15%;
  }
}


</style>
