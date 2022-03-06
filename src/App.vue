<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <mi-componente :nombre="nombre" :apellido="apellido" :edad="edad" :class="newClass" />
  </div>
</template>

<script>
import MiComponente from './components/MiComponente.vue'

export default {
  name: 'App',
  components: {
    MiComponente
  },
  data: function() {
  return {
    nombre: ['Juan', 'Andrés', 'Francisco', 'Camila'],
    apellido: ['Vidal', 'Calamaro', 'Gutierrez', 'Pajón'],
    edad: [34, 25, 47, 32],
    newClass: 'table table-hover'
  };
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
