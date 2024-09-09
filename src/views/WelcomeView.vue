<template>
    <div class="welcome container">
        <div v-if="showLogin">
          <LogIn @enterChatroom = "enterChatroom"></LogIn>
          <p>Don't have an account? <span @click="showLogin = !showLogin">Register Here</span></p>
        </div>
        <div v-else>
          <SignUp @enterChatroom = "enterChatroom"></SignUp>
          <p>Already have an account? <span @click="showLogin = !showLogin">Login here</span></p>
        </div>
        
    </div>
  
</template>

<script>
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    SignUp,
    LogIn,
   
  },
  setup(){
    let router = useRouter();
    let showLogin = ref(true);

    let enterChatroom = ()=> {
      router.push("/chatroom")
    }

    return {showLogin,enterChatroom};
  }
}
</script>

<style>
     .welcome {
        text-align: center;
        padding: 20px 0;
        background-color: white;
        width: 90%;
        max-width: 700px;
        border-radius: 10px;
        margin: 80px auto;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
    padding: 8px;
    background-color: green;
    border: none;
    color: white;
    border-radius: 4px;
  }
  p{
    font-size: small;
  }
</style>