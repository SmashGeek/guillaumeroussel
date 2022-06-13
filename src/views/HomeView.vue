<template>
  <div class="home">
    <img alt="logo du site" class="logo" src="../assets/img/LogoFullBlack.png">
  </div>
  <div class="divided-home">
  <HomeLeftSide />
  <HomeRightSide />
  </div>
</template>

<script>
import HomeLeftSide from '../components/HomeLeftSide.vue'
import HomeRightSide from '../components/HomeRightSide.vue'

export default {
  name: 'HomeView',
  components: {
    HomeLeftSide,
    HomeRightSide
  }
}
</script>
<style scoped>
.home{
  display: flex;
  justify-content: center;
}
.logo {
  width: 7%;
  height: 7%;
}

.divided-home {
  display: flex;
  flex-direction: row;
}
</style>
