<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/trainer">Start</router-link>
      <router-link to="/double">Double</router-link>
      <router-link to="/about">Statistics</router-link>
      <router-link to="/donate">Donations</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
