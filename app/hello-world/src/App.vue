<template>
  <nav class="nav">
    <router-link to="/">Kurs i Risikofylt lek</router-link> |
    <router-link to="/info">Informasjon</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  top: 0px;
  height: 2em;
  width: 100%;
  background-color: #2c3e50;
}

.nav a {
  font-weight: bold;
  color: #ececee;
  padding-top: 2%;
  padding-bottom: 2%;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
