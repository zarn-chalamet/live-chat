<template>

    <div class="container">
      <NavBar></NavBar>
    </div>

</template>


<script>
import { useRouter } from 'vue-router';
import NavBar from '../components/NavBar.vue'
import getUser from '@/composables/getUser';
import { watch } from 'vue';

export default {
  components: { NavBar },
  
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