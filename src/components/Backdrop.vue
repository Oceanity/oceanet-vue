<template>
    <div class="bubble-wrapper">
        <div class="bubbles" id="bubbles0"></div>
        <div class="bubbles" id="bubbles1"></div>
        <div class="bubbles" id="bubbles2"></div>
        <div class="bubbles" id="bubbles3"></div>
    </div>
</template>

<style>
.bubble-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background: rgb(166, 214, 255);
    background: linear-gradient(
        180deg,
        rgba(166, 214, 255, 1) 0%,
        rgba(10, 113, 201, 1) 100%
    );
}
#overlay,
.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.bubbles {
    height: 200%;
}

#overlay {
    height: 100%;
    z-index: 10;
    opacity: 0.5;
    background: transparent;
    background: linear-gradient(
        180deg,
        rgba(166, 214, 255, 1) 0%,
        rgba(10, 113, 201, 0) 100%
    );
}

#bubbles0 {
    z-index: 2;
    opacity: 0.2;
    filter: blur(1px);
    background: url("../assets/bubbles-0.png");
    animation: bubbles0 45s linear 0s infinite;
}

#bubbles1 {
    z-index: 2;
    opacity: 0.2;
    filter: blur(1px);
    background: url("../assets/bubbles-1.png");
    animation: bubbles1 40s linear 0s infinite;
}
#bubbles2 {
    z-index: 2;
    opacity: 0.15;
    filter: blur(2px);
    background: url("../assets/bubbles-2.png");
    animation: bubbles2 10s linear 0s infinite;
}
#bubbles3 {
    z-index: 2;
    opacity: 0.16;
    filter: blur(2px);
    background: url("../assets/bubbles-2.png");
    animation: bubbles3 12s linear 0s infinite;
}
@keyframes bubbles0 {
    0% {
        background-position-x: 20px;
        background-position-y: 720px;
    }
    33% {
        background-position-x: 30px;
    }
    50% {
        background-position-x: 20px;
    }
    66% {
        background-position-x: 0px;
    }
    100% {
        background-position-x: 20px;
        background-position-y: 0;
    }
}
@keyframes bubbles1 {
    0% {
        background-position-x: 0;
        background-position-y: 720px;
    }
    33% {
        background-position-x: 10px;
    }
    50% {
        background-position-x: 20px;
    }
    66% {
        background-position-x: 10px;
    }
    100% {
        background-position-x: 0;
        background-position-y: 0;
    }
}
@keyframes bubbles2 {
    0% {
        background-position-x: 360px;
        background-position-y: 720px;
    }
    33% {
        background-position-x: 370px;
    }
    50% {
        background-position-x: 380px;
    }
    66% {
        background-position-x: 370px;
    }
    100% {
        background-position-x: 360px;
        background-position-y: 0;
    }
}
@keyframes bubbles3 {
    0% {
        background-position-x: 520px;
        background-position-y: 920px;
    }
    33% {
        background-position-x: 500px;
    }
    50% {
        background-position-x: 480px;
    }
    66% {
        background-position-x: 500px;
    }
    100% {
        background-position-x: 520px;
        background-position-y: 200px;
    }
}
</style>
