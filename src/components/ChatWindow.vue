<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{ message.createdAt}}</span>
                <span class="name">{{ message.displayName }}</span>
                <span class="message">{{ message.text }}</span>
            </div>
        </div>
    </div>
  </template>

<script>

import { getFirestore, collection,orderBy,query,onSnapshot } from 'firebase/firestore';
import { computed, onMounted, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from "date-fns";
export default {
    setup(){
        let messages = ref([]);
        let msgBox = ref(null);
        const db = getFirestore();

        onUpdated(() => {
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        });


        let formattedMessages = computed(()=>{
            return messages.value.map((msg)=> {
                let formatTime = formatDistanceToNow(msg.createdAt.toDate());
                return { ...msg, createdAt: formatTime };
            })
        });
      onMounted(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(q, (snap) => {
            let results = [];
            snap.docs.forEach((doc) => {
            let document = { ...doc.data(), id: doc.id };
            if (doc.data().createdAt) {
                results.push(document);
            }
            });
            messages.value = results;
            console.log(results)
        });
       });

       return {messages,formattedMessages,msgBox}
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>