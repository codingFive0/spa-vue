<template>
  <div class="login form-signin pt-5">
    <h1>Conta Bancária: {{ account.data[0].number }}</h1>
    <h2>Agencia: {{ account.data[0].agency }}</h2>

    <div class="row">
      <div class="col-md-12 mt-5">
        <h3>Seu saldo</h3>
        <p>R$ {{ account.data[0].value }}</p>
      </div>

      <div class="col-md-6">
        <h3>Realizar deposisto</h3>
        <form method="post" v-on:submit.prevent="submitFormAddCredit">
          <div class="form-floating mb-2">
            <input type="number" class="form-control" id="floatingInput1" placeholder="123,00"
                   v-model="deposito.value">
            <label for="floatingInput1">Valor</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">Depositar</button>
        </form>
      </div>

      <div class="col-md-6">
        <h3>Realizar saque</h3>
        <form method="post" v-on:submit.prevent="submitFormRemoveCredit">
          <div class="form-floating mb-2">
            <input type="number" class="form-control" id="floatingInput" placeholder="123,00" v-model="saque.value">
            <label for="floatingInput">Valor</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">Sacar</button>
        </form>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Sair</router-link>
    </div>
  </div>
</template>


<script>
// import router from "@/router";
import accounts from "@/services/accounts";

export default {
  name: 'AccountDash',
  data() {
    return {
      account: [],
      deposito: {
        value: '',
        account: this.$route.params.id
      },
      saque: {
        value: '',
        account: this.$route.params.id
      }
    }
  },
  mounted() {
    accounts.getAccount(this.$route.params.id).then((res) => {
      this.account = res
    })
  },
  methods: {
    submitFormAddCredit() {
      accounts.addCredit(this.deposito).then(resposta => {
        this.account = resposta
      })
    },
    submitFormRemoveCredit() {
      accounts.removeCredit(this.saque).then(resposta => {
        this.account = resposta
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
