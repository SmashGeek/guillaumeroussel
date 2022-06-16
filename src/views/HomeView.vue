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
}
</style>
