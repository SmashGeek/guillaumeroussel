<template>
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
.divided-home {
  display: flex;
  margin: 3% 5% 5% 5%;
  justify-content: space-evenly;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 719px) {
  .divided-home {
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;
  }
}
@media only screen and (min-device-width: 720px) and (max-device-width: 1200px) {
  .divided-home {
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;
  }
}
</style>
