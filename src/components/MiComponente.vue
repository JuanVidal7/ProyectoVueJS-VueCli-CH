<template>
  <table>
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                    <td>{{nombre[0]}}</td>
                    <td>{{apellido[0]}}</td>
                    <td>{{edad[0]}}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                    <td>{{nombre[1]}}</td>
                    <td>{{apellido[1]}}</td>
                    <td>{{edad[1]}}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                    <td>{{nombre[2]}}</td>
                    <td>{{apellido[2]}}</td>
                    <td>{{edad[2]}}</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                    <td>{{nombre[3]}}</td>
                    <td>{{apellido[3]}}</td>
                    <td>{{edad[3]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: "MiComponente",
  props: {
      nombre: Array,
      apellido: Array,
      edad: Array
  }
};
</script>

<style scoped>
    p {
    font-size: 30px;
    color: lightcoral;
    }
</style>