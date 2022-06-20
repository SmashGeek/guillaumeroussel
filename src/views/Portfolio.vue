<template>
<div class="card-container">
  <div class="card-project">
    <div class="project-description">
      <h2>SmashGeek.github.io</h2>
      <p>CV realise sous forme d'application Web.</p>
      <h3>Technologies utilisees</h3>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
    </div>
    </div>
  <div class="card-project">
    <div class="project-description">
      <h2>OhMyFood</h2>
      <p>Creation d'un site vitrine, regroupant les menus de plusieurs restaurants</p>
      <h3>Technologies utilisees</h3>
    <ul>
      <li>HTML5</li>
      <li>SCSS</li>
    </ul>
    </div>
    </div>
  <div class="card-project">
    <div class="project-description">
      <h2>La Chouette Agence</h2>
      <p>Optimisation pour les moteurs de recherche (SEO), pour le site La Chouette Agence</p>
      <h3>Technologies utilisees</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Google Lighthouse</li>
        <li>GTMetrix</li>
      </ul>
    </div>
    </div>
  <div class="card-project">
    <div class="project-description">
      <h2>Orinoco</h2>
      <p>Realisation du front end de l'application e-commerce Orinoco</p>
      <h3>Technologies utilisees</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>SCSS</li>
      </ul>
    </div>
    </div>
  <div class="card-project">
    <div class="project-description">
      <h2>Piquante</h2>
      <p>Realisation du back end de l'application Piquante</p>
      <h3>Technologies utilisees</h3>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    </div>
  </div>
  <div class="card-project">
    <div class="project-description"></div>
    <h2>Groupomania</h2>
    <p>Realisation du reseau social interne de l'entreprise Groupomania</p>
    <h3>Technologies utilisees</h3>
    <ul>
      <li>Vue.js</li>
      <li>JavaScript</li>
      <li>HTML5</li>
      <li>SCSS</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MySQL</li>
    </ul>
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