<template>
  <div class="home">
    <LoginUser/>
  </div>
</template>

<script>
import LoginUser from '@/components/LoginUser.vue'

export default {
  name: 'Home',
  components: {
    LoginUser
  }
}
</script>
