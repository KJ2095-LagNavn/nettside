<template>
  <nav class="nav">
    <router-link to="/">Kurs i Risikofylt lek</router-link> |
    <router-link to="/about">Informasjon</router-link>
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
  position: static;
  height: 10%;
  width: 100%;
  background-color: #2c3e50;
  padding: inherit;
}

nav a {
  font-weight: bold;
  color: #ececee;
  padding-top: 120px;
  bottom: 0px;
}
router-link {
  padding-top: 120px;
  bottom: 0px;
}
nav a.router-link-exact-active {
  color: #42b983;
  padding-top: 120px;
  bottom: 0px;
}
</style>
