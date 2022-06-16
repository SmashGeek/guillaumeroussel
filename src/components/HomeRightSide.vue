<template>
<div class="progress-container">
	<h2>Mes compétences</h2>
	<div class="progress-content">
		<div class="progress-title"><font-awesome-icon :icon="['fab', 'html5']" size="2x"/><p>HTML5</p></div>
		<div class="progress">
			<div class="progress-value-html"></div>
		</div>
	</div>
	<div class="progress-content">
		<div class="progress-title"><font-awesome-icon :icon="['fab', 'css3']" size="2x"/><p>CSS3</p></div>
		<div class="progress">
			<div class="progress-value-css"></div>
		</div>
	</div>
	<div class="progress-content">
		<div class="progress-title"><font-awesome-icon :icon="['fab', 'js-square']" size="2x"/><p>JavaScript</p></div>
		<div class="progress">
			<div class="progress-value-js"></div>
		</div>
	</div>
	<div class="progress-content">
		<div class="progress-title"><font-awesome-icon :icon="['fab', 'vuejs']" size="2x"/><p>Vue.js</p></div>
		<div class="progress">
			<div class="progress-value-vue"></div>
		</div>
	</div>
	<div class="progress-content">
		<div class="progress-title"><font-awesome-icon :icon="['fab', 'node-js']" size="2x"/><p>Node.js</p></div>
		<div class="progress">
			<div class="progress-value-node"></div>
		</div>
	</div>
	<router-link to="/portfolio" class="icon-align"><font-awesome-icon :icon="['far', 'square-plus']" size="2x"/></router-link>
</div>
</template>

<script>
export default {
  name: 'HomeRightSide',
  components: {
  }
}
</script>

<style scoped>

.progress-container {
	background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 10px;
	padding: 1% 2% 1% 2%;
}

h2 {
 text-align: center;
 margin-bottom: 7%;
}
.progress-title {
	display: flex;
	text-align: justify;
}
.progress {
	background: rgba(2, 2, 2, 0.1);
	justify-content: flex-start;
	border-radius: 10px;
	align-items: center;
	position: relative;
	padding: 0 5px;
	display: flex;
	height: 40px;
	width: 500px;
}

.progress-content {
	margin-bottom: 2%;
}

.progress-value-html {
	animation: load-html 3s normal forwards;
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 10px;
	background: #0fa50f;
	height: 30px;
	width: 0;
	}
.progress-value-css {
	animation: load-css 3s normal forwards;
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 10px;
	background: #0fa50f;
	height: 30px;
	width: 0;
	}
	.progress-value-js {
	animation: load-js 3s normal forwards;
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 10px;
	background: #e40202;
	height: 30px;
	width: 0;
	}
	.progress-value-vue {
	animation: load-vue 3s normal forwards;
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 10px;
	background: #e46b02;
	height: 30px;
	width: 0;
	}
	.progress-value-node {
	animation: load-node 3s normal forwards;
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 10px;
	background: #e40202;
	height: 30px;
	width: 0;
	}
@keyframes load-html {
	0% { width: 0; }
	100% { width: 75%; }
}
@keyframes load-css {
	0% { width: 0; }
	100% { width: 75%; }
}
@keyframes load-js {
	0% { width: 0; }
	100% { width: 45%; }
}
@keyframes load-vue {
	0% { width: 0; }
	100% { width: 50%; }
}
@keyframes load-node {
	0% { width: 0; }
	100% { width: 40%; }
}

.icon-align {
	display: flex;
	justify-content: center;
}
a {
	text-decoration: none;
    color: #2c3e50;
}
a:hover {
    color: #ffffff;
}

</style>