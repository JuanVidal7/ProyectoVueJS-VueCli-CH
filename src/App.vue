<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <listado-page :nombre="nombre" :precio="precio" :descripcion="descripcion" :class="newClass" />
    <loguin-page />
    <signup-page />
    <carrito-page :class="newClass"  />
  </div>
</template>

<script>
import LoguinPage from './components/LoguinPage.vue';
import ListadoPage from './components/ListadoPage.vue'
import SignupPage from './components/SignupPage.vue'
import CarritoPage from './components/CarritoPage.vue';


export default {
  name: 'App',
  components: {
    ListadoPage,
    LoguinPage,
    SignupPage,
    CarritoPage,
  },
  data() {
    return {
      nombre: ['Hershey Blanca', 'Hershey Negra', 'M & M', 'Ferrero Rocher'],
      precio: [2500, 3000, 1500, 12000],
      descripcion: [`Cookies 'n' creme es una barrita de chocolate blanco con bits de galleta similares en sabor y textura a las Oreo.`, 
      `La barrita de chocolate con leche Hershey's, tiene un sabor único característico, amargo y picante. Esta es su variedad chocolate negro.`, 
      `Pequeños pedazos de chocolate con leche revestidos de azucar.`,
      `Los bombones están formados por una capa de barquillo rellena con pasta de cacao y avellanas, recubierta por una capa de chocolate con avellanas trituradas y una avellana entera en el interior, envueltos en papel metalizado y colocados individualmente sobre un molde de papel engrasado.`],
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
