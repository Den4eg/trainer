<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/trainer">Trainer</router-link>
      <router-link to="/dubble">Dubble</router-link>
      <router-link to="/about">Statistics</router-link>
      <router-link to="/donate">Donations</router-link>
    </div>
    <router-view />
    <!-- <div class="trainer-footer">
      <h2>FOOTER</h2>
    </div>-->
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
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 80%;
  height: 4vh;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  background-color: rgb(148, 148, 148);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.trainer-footer {
  width: 100vw;
  height: 8vh;
  background-color: rgb(34, 196, 245);
}
</style>
