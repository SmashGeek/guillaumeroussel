<template>
<h2>Contact</h2>
<div class="container">
    <div class="contact-container">
        <div class="contact"><font-awesome-icon :icon="['fas', 'phone']" size="1x" />06.12.46.04.89</div>
        <div class="contact"><font-awesome-icon :icon="['fas', 'envelope']" size="1x" /><a href="mailto:rousselguillaume@tutanota.com"><span id="coupe">Contactez Moi</span></a></div>
        <div class="contact"><font-awesome-icon :icon="['fab', 'linkedin']" size="1x" /></div>
    </div>
    </div>
</template>

<script>
</script>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 5%;
}
.container {
    display: flex;
    justify-content: center;
}
.contact-container {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
    padding: 5% 5% 5% 5%;
    font-size: 2em;
}
</style>