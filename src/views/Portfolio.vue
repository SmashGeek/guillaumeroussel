<template>
<h1>Mon travail</h1>
<div class="card-container">
  <div class="card-project">
    <h2>SmashGeek.github.io</h2>
    <picture>
      <source srcset="../assets/img/projet1.webp" type="image/webp">
      <source srcset="../assets/img/projet1.png" type="image/png">
      <img class="project-img" src="../assets/img/projet1.webp" alt="Illustration site internet smashgeek.github.io"/>
      </picture>
    <div class="project-description">
      <p>[Formation - OpenClassrooms] CV réalisé sous forme d'application Web.</p>
      <h3>Technologies utilisées</h3>
      <div class="list-tech">
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
    </div>
    </div>
    <a href="https://github.com/SmashGeek/SmashGeek.github.io" target="_blank" rel="noopener" ><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
    </div>
  <div class="card-project">
    <h2>OhMyFood</h2>
    <picture>
      <source srcset="../assets/img/projet2.webp" type="image/webp">
      <source srcset="../assets/img/projet2.png" type="image/png">
      <img class="project-img" src="../assets/img/projet2.webp" alt="Illustration site internet ohmyfood"/>
      </picture>
    <div class="project-description">
      <p>[Formation - OpenClassrooms] Création d'un site vitrine, regroupant les menus de plusieurs restaurants.</p>
      <h3>Technologies utilisées</h3>
      <div class="list-tech">
    <ul>
      <li>HTML5</li>
      <li>SCSS</li>
    </ul>
    </div>
    </div>
    <a href="https://github.com/SmashGeek/p3-ohmyfood" target="_blank" rel="noopener"><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
    </div>
  <div class="card-project">
    <h2>La Chouette Agence</h2>
    <picture>
      <source srcset="../assets/img/projet3.webp" type="image/webp">
      <source srcset="../assets/img/projet3.png" type="image/png">
      <img class="project-img" src="../assets/img/projet3.webp" alt="Illustration site internet La Chouette Agence"/>
      </picture>
    <div class="project-description">
      <p>[Formation - OpenClassrooms] Optimisation pour les moteurs de recherche, pour le site La Chouette Agence.</p>
      <h3>Technologies utilisées</h3>
      <div class="list-tech">
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <ul>
        <li>Google Lighthouse</li>
        <li>GTMetrix</li>
        </ul>
      </div>
    </div>
    <a href="https://github.com/SmashGeek/P4-LaChouetteAgenceV2" target="_blank" rel="noopener"><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
    </div>
  <div class="card-project">
    <h2>Orinoco</h2>
    <picture>
      <source srcset="../assets/img/projet4.webp" type="image/webp">
      <source srcset="../assets/img/projet4.png" type="image/png">
      <img class="project-img" src="../assets/img/projet4.webp" alt="Illustration site internet Orinoco"/>
      </picture>
    <div class="project-description">
      <p>[Formation - OpenClassrooms] Réalisation du front end de l'application e-commerce Orinoco.</p>
      <h3>Technologies utilisées</h3>
      <div class="list-tech">
      <ul>
        <li>JavaScript</li>
        <li>HTML5</li>
      </ul>
      <ul>
        <li>SCSS</li>
      </ul>
      </div>
    </div>
    <a href="https://github.com/SmashGeek/P5-orinoco" target="_blank" rel="noopener"><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
    </div>
  <div class="card-project">
    <h2>Piquante</h2>
    <picture>
      <source srcset="../assets/img/projet5.webp" type="image/webp">
      <source srcset="../assets/img/projet5.png" type="image/png">
      <img class="project-img" src="../assets/img/projet5.webp" alt="Illustration application Piquante"/>
      </picture>
    <div class="project-description">
      <p>[Formation - OpenClassrooms] Réalisation du back end de l'application Piquante.</p>
      <h3>Technologies utilisées</h3>
      <div class="list-tech">
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        
      </ul>
      <ul>
        <li>Express</li>
      </ul>
      </div>
    </div>
    <a href="https://github.com/SmashGeek/backend" target="_blank" rel="noopener"><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
  </div>
  <div class="card-project">
    <h2>Groupomania</h2>
    <picture>
      <source srcset="../assets/img/projet6.webp" type="image/webp">
      <source srcset="../assets/img/projet6.png" type="image/png">
      <img class="project-img" src="../assets/img/projet6.webp" alt="Illustration site internet Groupomania"/>
      </picture>
    <div class="project-description"></div>
    <p>[Formation - OpenClassrooms] Réalisation du réseau social interne de l'entreprise Groupomania.</p>
    <h3>Technologies utilisées</h3>
    <div class="list-tech">
    <ul>
      <li>Vue.js</li>
      <li>JavaScript</li>
    </ul>
    <ul>
      <li>HTML5</li>
      <li>SCSS</li>
      </ul>
    <ul>
      <li>Bootstrap</li>
      <li>Node.js</li>
      
    </ul>
    <ul>
      <li>Express</li>
      <li>MySQL</li>
      </ul>
    </div>
    <a href="https://github.com/SmashGeek/P7Groupomania" target="_blank" rel="noopener"><div class="btn"><font-awesome-icon :icon="['fab', 'github']" size="2x" color="white"/></div></a>
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
h1 {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
h2 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
}

h3 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10%;
}
.project-img {
  width: 100%;
  margin-bottom: 10%;
}
.card-project {
  display: flex;
  flex-direction: column;
  align-items: center;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
	padding: 1% 2% 1% 2%;
    margin: 2% 2% 5% 2%;
    width: 25%;
    height: 80vh;
}

.list-tech {
  display: flex;
  justify-content: center;
  text-align: justify;
  padding-bottom: 10%;
}

ul {
  list-style-type: none;
}

.btn {
  background-color: #272727;
  padding: 0.2vw 3vw 0.2vw 3vw;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 719px){
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
  }

  .card-project {
    width: 90%;
    height: 100vh;
  
  }

  .list-tech {
    flex-wrap: wrap;
  }
  .btn {
  padding: 1vw 20vw 1vw 20vw;
}
}
@media only screen and (min-device-width: 720px) and (max-device-width: 1200px) {
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
  }

  .card-project {
    width: 90%;
    margin-bottom: 5%;
  }

  .list-tech {
    flex-wrap: wrap;
    padding-bottom: 5%;
  }
  .btn {
  padding: 1vw 10vw 1vw 10vw;
}
}
</style>