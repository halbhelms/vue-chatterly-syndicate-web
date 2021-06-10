<template>
  <section class="app">
    <img src="../src/assets/chatterly-logo.png" alt="" class="logo">
    <div id="nav">
      <router-link to="/">Customers</router-link> | <router-link to="/prospects">Prospects</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <div class="agent-info">
      {{ userName }}<br />
    </div>
  </section>
  <main>
    <router-view/>
  </main>
  <footer>
    Chatterly Syndicate App
  </footer>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      userName() {
        return this.$store.state.currentUser.name
      },
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
