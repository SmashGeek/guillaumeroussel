<template>
<div class="card-container">
  <div class="card-project">
    <div class="project-description"><p>CV realise sous forme d'application Web </p></div>
    </div>
  <div class="card-project">
    <div class="project-description"></div>
    </div>
  <div class="card-project">
    <div class="project-description"></div>
    </div>
  <div class="card-project">
    <div class="project-description"></div></div>
  <div class="card-project"><div class="project-description"></div>
  </div>
  <div class="card-project">
    <div class="project-description"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PortfolioView',

}
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card-project {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
	padding: 1% 2% 1% 2%;
    margin: 2% 2% 5% 2%;
    width: 25%;
    height: 80vh;
}

</style>