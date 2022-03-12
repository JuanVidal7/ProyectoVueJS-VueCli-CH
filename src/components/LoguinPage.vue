<template>
  <div class="formLoginContainer">
    <h1>Iniciar Sesión</h1>
    <div class="formLogin">
      <form class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.formLogin {
  display: flex;
  justify-content: center;
}

.formLoginContainer{
  background: lightblue;
  padding: 40px 0px 40px 0px;
}

h1{
  padding: 0px 0px 30px 0px;
  font-size: 30px;
  font-weight: bold;
}
</style>