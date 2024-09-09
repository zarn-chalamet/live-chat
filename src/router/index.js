import ChatRoom from "@/views/ChatRoom.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
      beforeEnter(to, from, next) {
        const auth = getAuth();
        let user = auth.currentUser;
        if (!user) {
          next();
        } else {
          next({ name: "chat-room" });
        }
      },
    },
    {
      path: "/chatroom",
      name: "chat-room",
      component: ChatRoom,
      beforeEnter(to, from, next) {
        const auth = getAuth();
        let user = auth.currentUser;
        if (user) {
          next();
        } else {
          next({ name: "welcome" });
        }
      },
    },
  ],
});

export default router;
