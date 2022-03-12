<template>
  <div>
    <h1>Listado de Productos</h1>
    <div class="tableProducts">
      <table class="col-md-6">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{{ nombre[0] }}</td>
            <td>{{ precio[0] | formatPrecio }}</td>
            <td>{{ descripcion[0] }}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{{ nombre[1] }}</td>
            <td>{{ precio[1] | formatPrecio }}</td>
            <td>{{ descripcion[1] }}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{{ nombre[2] }}</td>
            <td>{{ precio[2] | formatPrecio }}</td>
            <td>{{ descripcion[2] }}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>{{ nombre[3] }}</td>
            <td>{{ precio[3] | formatPrecio }}</td>
            <td>{{ descripcion[3] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  props: {
    nombre: Array,
    precio: Array,
    descripcion: Array,
  },
};
</script>

<style scoped>

.tableProducts {
  display: flex;
  justify-content: center;
}

h1{
  font-size: 30px;
  padding: 0px 0px 30px 0px;
  font-weight: bold;
}
</style>