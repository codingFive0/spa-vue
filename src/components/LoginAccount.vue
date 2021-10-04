<template>
  <div class="login form-signin pt-5">
    <h1>Acesse sua conta bancária</h1>
    <p>
      Informe sua conta e agência para acessar os dados de sua conta e realizar sua ações
    </p>
    <form method="post" v-on:submit.prevent="submitAccountForm">
      <div class="form-floating mb-2">
        <input type="number" class="form-control" id="floatingInput" placeholder="0099988" v-model="login.account">
        <label for="floatingInput">Numero da conta</label>
      </div>

      <div class="form-floating  mb-3">
        <input type="number" class="form-control" id="floatingPassword" placeholder="1444" v-model="login.agency">
        <label for="floatingPassword">Numero da agência</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </div>
</template>


<script>
import accounts from "@/services/accounts";
import router from "@/router";

export default {
  name: 'LoginAccount',
  data() {
    return {
      loginNav: false,
      login: {
        account: '',
        agency: '',
      }
    }
  },
  methods: {
    submitAccountForm() {
      accounts.login(this.login).then(resposta => {

        if(resposta.data.message){
          alert(resposta.data.message)
          return;
        }

        router.replace('/gerenciamento/' + resposta.data.account)

      }).catch(e => {
        console.log(e)
      })
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
