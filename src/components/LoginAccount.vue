<template>
  <div class="login form-signin pt-5">
    <h1>Acesse sua conta bancária</h1>
    <p>
      Informe sua conta e agência para acessar os dados de sua conta e realizar sua ações
    </p>
    <form method="post" v-on:submit.prevent="submitForm">
      <div class="form-floating mb-2">
        <input type="number" class="form-control" id="floatingInput" placeholder="0099988">
        <label for="floatingInput">Numero da conta</label>
      </div>

      <div class="form-floating  mb-3">
        <input type="number" class="form-control" id="floatingPassword" placeholder="1444">
        <label for="floatingPassword">Numero da agência</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>

    <div class="pt-5">
      <h4>Ainda não possui conta?</h4>
      <a href="#">Criar Minha Conta</a>

    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'LoginAccount',
  methods:{
    submitForm(){
      axios.post('/contact', this.form)
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          }).finally(() => {
        //Perform action in always
      });
    }
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin: auto;
}
</style>
