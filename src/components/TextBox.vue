<template>
  <form>
    <textarea placeholder="Enter your message" v-model="text"
        @keypress.enter="sendMessage"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { serverTimestamp } from 'firebase/firestore';
export default {
    setup(){
        let text = ref("");
        let {user} = getUser();
        let {error,addDocument} = useCollection("messages");

        let sendMessage = async ()=>{
            let message = {
                displayName: user.value.displayName,
                text: text.value,
                createdAt: serverTimestamp()
            }

            await addDocument(message);
            text.value = "";
            
        }
        return {text,sendMessage,error}
    }
}
</script>

<style>
    form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>