<template>
  <div class="container">
    <!-- <Header
      v-if="['Dashboard', 'Quests', 'Leaderboard'].indexOf($route.name) > -1"
    /> -->
    <router-view />
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
export default {
  components: {
    // Header,
  },
};
</script>

<style>
@font-face {
  font-family: Monster;
  src: url("./assets/font/Munsteria.ttf");
}
* {
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
  height: 100vh;
  background: #f4f4f4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  background: #f4f4f4;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
}

@media (min-width: 420px) {
  .container {
    max-width: 100%;
  }
}
</style>
