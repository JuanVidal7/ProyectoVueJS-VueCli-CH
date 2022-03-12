<template>
  <div class="formSignupPageContainer">
    <h1>Regístrate</h1>
    <div class="formSignupPage">
      <form class="col-md-6">
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Seleccione...</option>
              <option>Antioquia</option>
            </select>
          </div>
          <div class="form-group col-md-8">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
};
</script>

<style scoped>
.formSignupPage {
  display: flex;
  justify-content: center;
}

.formSignupPageContainer{
  background: lightcoral;
  color: aliceblue;
  padding: 40px 0px 40px 0px;
}

h1{
  padding: 0px 0px 30px 0px;
  font-size: 30px;
  font-weight: bold;
}

</style>