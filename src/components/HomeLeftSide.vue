<template>
<div class="left-side">
    <p><font-awesome-icon :icon="['fas', 'quote-left']" size="2x" /> Bienvenue sur mon e-portfolio, developpeur Full Stack Junior depuis 2022, je realise des applications web (responsive), respectant les (standards) et les normes en vigueur,
    j'utilise Vue.js 3 et d'autres technologies a decouvrir sur ce site.<font-awesome-icon :icon="['fas', 'quote-right']" size="2x" /></p>
</div>
    
</template>

<script>
export default {
  name: 'HomeLeftSide',
  components: {
  }
}
</script>

<style scoped>
.left-side {
    width: 50%;
    margin: 5% 5% 8% 5%;
    padding: 0% 2% 0% 2%;
    font-size: 2em;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 5px;
    text-align: justify;
}

</style>