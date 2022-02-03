import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Stream from "../views/stream/Stream.vue";
import SoundCommands from "../views/stream/SoundCommands.vue";
import Discord from "../views/Discord.vue";
import Art from "../views/art/Art.vue";
import Emotes from "../views/art/Emotes.vue";
import MMRs from "../views/MMRs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Oceanity",
      metaTags: [
        {
          name: "description",
          content: "Oceanity's site containing her streaming, art and music work.",
        },
      ],
    },
  },
  {
    path: "/stream",
    name: "Stream",
    component: Stream,
    meta: {
      title: "Stream - Oceanity",
    },
  },
  {
    path: "/stream/discord",
    name: "Discord",
    component: Discord,
    meta: {
      title: "Discord - Oceanity",
    },
  },
  {
    path: "/stream/sounds",
    name: "SoundCommands",
    component: SoundCommands,
    meta: {
      title: "Stream Sound Commands - Oceanity",
    },
  },
  {
    path: "/art",
    name: "Art",
    component: Art,
    meta: {
      title: "Art - Oceanity",
    },
  },
  {
    path: "/art/emotes",
    name: "Emotes",
    component: Emotes,
    meta: {
      title: "Emote Commissions - Oceanity",
    },
  },
  {
    path: "/mmrs",
    name: "MMRs",
    component: MMRs,
    meta: {
      title: "MMR Music - Oceanity",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
