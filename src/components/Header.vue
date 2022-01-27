<template>
    <header>
        <img class="logo" src="../assets/logo.svg" />
    </header>
</template>

<style>
header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: rgba(0, 0, 50, 0.6);
    box-shadow: 0 2px 4px rgba(0, 0, 50, 0.6);
    z-index: 20;
}
header img.logo {
    width: 320px;
    max-width: 75vw;
}
</style>
