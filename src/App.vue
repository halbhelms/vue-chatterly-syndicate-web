<template>
  <section class="app">
    <img src="../src/assets/chatterly-logo.png" alt="" class="logo">
    <div id="nav">
      <router-link to="/">Statistics</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <div class="agent-info">
      {{ agentName }}<br />
      {{ lastLogin }}
    </div>
  </section>
  <main>
    <router-view/>
  </main>
  <footer>
    Chatterly Agent App
  </footer>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      agentName() {
        return this.$store.getters.getCurrentAgent(100).name
      },
      lastLogin() {
        return this.$store.getters.getCurrentAgent(100).lastLogin
      }
    },
  }
</script>

<style>
* {
  box-sizing:border-box;
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

.app {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  background-color: rgb(64,101,149);
  padding: 6px;
}

.agent-info {
  color: white;
  /* line-height: 70px; */
}

.nav {
  color: white;
}

.logo {
  width: 120px;
}

.agent-info {
  text-align: right;
}

footer {
  height: 40px;
  background-color: rgb(64,101,149);
  color: white;
  line-height: 40px;
}

main {
  height: calc(100vh - 170px)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
