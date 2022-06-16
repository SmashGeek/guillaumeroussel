<template>
    <nav class="main-menu">
        <div class="item-container">
        <div class="item-navbar">
            <router-link to="/" class="icon-navbar"><font-awesome-icon :icon="['fas', 'torii-gate']" size="2x"/>Accueil</router-link>
            <div class="item-separation"></div>
            <a href="#" class="icon-navbar"><font-awesome-icon :icon="['far', 'folder-open']" size="2x" />Mes realisations</a>
            <div class="item-separation"></div>
            <router-link to="/about" class="icon-navbar"><font-awesome-icon :icon="['far', 'circle-question']" size="2x"/>A propos</router-link>
            <div class="item-separation"></div>
            <a href="#" class="icon-navbar"><font-awesome-icon :icon="['far', 'envelope']" size="2x" />Contact</a>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbarMenu'
}
</script>

<style scoped>
@font-face {
    font-family: 'balooregular';
    src: local("balooregular"),
    url('../assets/font/Baloo-Regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.main-menu {
    position: fixed;
    bottom: 0px;
    width: 100%;
}
.item-container {
    display: flex;
    justify-content: center;
}
.item-navbar {
    display: flex;
    justify-content: center;
    border-radius: 15px 15px 3px 3px;
    box-shadow: 0px -5px 8px 0px rgba(0, 0, 0, 0.25);
    width: 50%;
    background-color: #ffffff;
}
.icon-navbar {
    display: flex;
    flex-direction: column;
    margin: 1% 5% 1% 5%;
    list-style-type: none;
    font-family: "balooregular", helvetica, Arial, sans-serif;
    font-size: 1.1em;
}
.item-separation {
    border: 1px rgba(194, 195, 197, 1);
    border-style: none none none solid;
    height: 75%;
    margin: 1% 2% 1% 2%;
}

a {
    text-decoration: none;
    color: #2c3e50;
}
a:hover {
    color: #ffffff;
}

.router-link-exact-active {
    color: #42b983;
}
</style>
