<template>

    <div class="container">
      <NavBar></NavBar>
      <ChatWindow></ChatWindow>
      <TextBox></TextBox>
    </div>

</template>


<script>
import ChatWindow from '../components/ChatWindow.vue'
import TextBox from '../components/TextBox.vue'
import { useRouter } from 'vue-router';
import NavBar from '../components/NavBar.vue'
import getUser from '@/composables/getUser';
import { watch } from 'vue';

export default {
  components: {
    ChatWindow,
    TextBox, NavBar },
  
  setup(){
    let {user} = getUser();
    let router = useRouter();

    watch(user,()=>{
      router.push("/");
    })

    return { user };
  }
}
</script>

<style>

</style>