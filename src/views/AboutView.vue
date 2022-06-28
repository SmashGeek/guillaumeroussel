<template>
<h2>En savoir plus</h2>
<div class="about-container">
  <div class="about">
    <p>Après diverses expériences professionnelles, principalement dans le domaine de la vente, j'ai décidé de donner un nouveau souffle à ma carrière.</p>
    <p class="bold center">Et pour cela, quoi de mieux que de se tourner vers ses passions ?</p>
    <p>J'ai toujours été passionné par les nouvelles technologies, cela a commencé avec ma première console, puis ça s'est poursuivi avec mon premier ordinateur en grandissant, j'ai commencé à vouloir comprendre comment tout cela fonctionne, j'ai débuté en démontant mon ordinateur, puis j'ai continuer plus tard en m'intéressant au firmware des téléphones, pour débloquer de nouvelles fonctionnalités en flashant un firmware modifié.</p>
    <p>Mon premier contact avec le <span class="bold">développement Web</span> s'est effectué avec le site de mon club de basket, que j'ai réalisé en HTML et CSS a l'aide du Site du Zéro, finalement quelques années plus tard, j'ai décidé d'en faire mon métier en auto-finançant ma <span class="bold">formation OpenClassrooms</span>. </p>
    <p>Fraichement diplomé, je suis capable de réalisé des applications Web en utilisant <span class="bold">VS Code</span> et les langages <span class="bold">HTML, CSS, SCSS, JavaScript</span>, d'utilisé les <span class="bold">Frameworks Express, Vue.js, Bootstrap</span> et de gérer une <span class="bold">base de données</span> avec <span class="bold">MySQL</span> ou <span class="bold">MongoDB</span>.</p>
    <p>Je suis habitué aux systèmes d'exploitations <span class="bold">Windows</span> et <span class="bold">Ubuntu</span>.</p>
  </div>
  </div>
</template>

<script></script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1%;
}
.about-container {
  display: flex;
  justify-content: center;
}
.about {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
    padding: 1% 2% 1% 2%;
    width: 75%;
    text-align: justify;
    font-size: 1.5em;
}

.bold {
  font-weight: bold;
}
.center {
  text-align: center;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 719px) {
  .about {
    width: 95%;
    margin-bottom: 15%;
  }
}
@media only screen and (min-device-width: 720px) and (max-device-width: 1200px) {
  .about {
    width: 95%;
    margin-bottom: 15%;
  }
}
</style>
