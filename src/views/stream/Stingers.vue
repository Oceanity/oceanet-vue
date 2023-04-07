<template>
    <ul class="video-gallery">
        <li v-for="stinger in stingers">
            <h3>{{ stinger.title }}</h3>
            <video :src="stinger.video" onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>
            <a :href="stinger.download" download>Download</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class extends Vue {
    stingers = [
        {
            title: "Osprey Stinger (Concept by TheRaffe)",
            video: require("@a/videos/osprey-preview.webm"),
            download: require("@a/downloads/osprey-stinger.zip")
        }
    ]
}
</script>

<style lang="scss">
    ul.video-gallery {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        margin:0;
        padding:0;
        list-style-type:none;
        gap: 20px;

        li {
            display:flex;
            flex-direction:column;
            flex-basis:calc(50% - 10px);
            gap: 10px;

            h3 {
                margin:0;
            }

            video {
                flex-basis:100%;
                max-width:100%;
            }
        }
    }

    @media screen and (max-width:768px) {
        ul.video-gallery {
            li {
                flex-basis: calc(100% - 10px);
            }
        }
    }
</style>
