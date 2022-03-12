<template>
  <div class="carritoContainer">
    <h1>Carrito de Compras</h1>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoPage",
};
</script>

<style scoped>
.tableProducts {
  display: flex;
  justify-content: center;
}

.carritoContainer{
  background: lightgrey;
  padding: 40px 0px 60px 0px;
}

h1{
  padding: 0px 0px 30px 0px;
  font-size: 30px;
  font-weight: bold;
}

.table{
  margin-bottom: 0px;
}
</style>