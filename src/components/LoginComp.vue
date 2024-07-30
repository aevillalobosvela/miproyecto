<template>
  <div>
    <div class="row" style="margin-top: 5%">
      <div class="col col-4"></div>
      <div class="col col-4">
        <div class="card">
          <div class="card-header">Bienvenido usuario</div>
          <div class="card-body text-center">
            <h5 class="card-title">Ingresa tus credenciales</h5>
            <form @submit.prevent="enviar">
              <div class="form-group mt-3">
                <label for="username">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Ingrese usuario"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="examplePassword">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="examplePassword"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" class="mt-4 btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col col-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async enviar() {
      try {
        const response = await this.$services.auth.login({
          username: this.username,
          password: this.password,
        });
        console.log(response);
        this.$router.push("/about");
      } catch (error) {
        console.error("Login failed:");
        console.log(error.response.data.mensaje);
        alert(error.response.data.mensaje);
      }
    },
  },
};
</script>
<style></style>
