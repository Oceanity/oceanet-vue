<template>
    <Header />
    <main>
        <SoundFiles />
    </main>
    <Backdrop />
</template>

<script>
import Header from "./components/Header.vue";
import SoundFiles from "./components/SoundFiles.vue";
import Backdrop from "./components/Backdrop.vue";
import "./assets/global.css";

export default {
    name: "App",
    components: {
        Header,
        SoundFiles,
        Backdrop,
    },
};
</script>
