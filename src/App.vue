<template>
<div class="home">
    <img alt="logo du site" class="logo" src="../src/assets/img/LogoFullBlack.png">
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
}
.logo {
  width: 7%;
  height: 7%;
  margin-top: 10px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .logo {
    width: 25%;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .logo {
    width: 15%;
  }
}


</style>
