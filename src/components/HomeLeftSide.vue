<template>
<div class="left-side">
    <p><font-awesome-icon :icon="['fas', 'quote-left']" size="2x" /> Bienvenue sur mon e-portfolio, je réalise toutes sortes de projets web, site vitrine, e-commerce, blogs, réseau social, mes applications sont respectueuses des standards du Web (<span class="bold">W3C</span>), d'accessibilités (<span class="bold">WCAG</span>), compatible avec tous les supports (Mobile, Tablette, PC) grâce au <span class="bold">Responsive Design</span> et optimisées pour le référencement naturel <span class="bold">SEO</span>.<font-awesome-icon :icon="['fas', 'quote-right']" size="2x" /></p>
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
  display: flex;
  align-items: center;
    width: 35%;
    padding: 0% 2% 0% 2%;
    font-size: 1.9em;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 5px;
    text-align: justify;
    height: 65vh;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 719px) {
  .left-side {
    width: 100%;
    font-size: 1.2em;
    margin-bottom: 5%;
  }
}
@media only screen and (min-device-width: 720px) and (max-device-width: 1200px) {
  .left-side {
    width: 100%;
    margin-bottom: 5%;
  }
}

.bold {
  font-weight: bold;
}

</style>