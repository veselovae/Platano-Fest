<template>
    <div class="main-page">
        <img src="../assets/images/main/bg1.png" class="bg bg1">
        <img src="../assets/images/main/bg2.png" class="bg bg2">
        <img src="../assets/images/main/bg3.png" class="bg bg3">
        <img src="../assets/images/main/bg4.png" class="bg bg4">

        <img src="../assets/images/main/date.png" class="circle date">
        <img src="../assets/images/main/music.png" class="circle music">

        <img src="../assets/images/main/logo.png" alt="logo" class="logo">
        <button><a href="#/tickets">КУПИТЬ БИЛЕТ</a></button>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    .main-page {
        background: #009E5C;
        position: relative;
        width: 100%;
        height: calc(100vh - 50px);
        display: flex;
        flex-direction: column;
        gap: 174px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .logo {
        z-index: 9999;
    }

    button {
        z-index: 9999;
        font-size: 16px;
        padding: 16px 51px;
        border-radius: 150px;
        border: 1px solid #ffffff;
        background-color: transparent;
        transition: all .2s ease;
    }

    button a {
        color: #ffffff;
        text-decoration: none;
        transition: all .2s ease;
    }

    button:hover {
        background-color: #ffffff;
    }

    button:hover a {
        color: #FFC64F;
    }

    .circle {
        position: absolute;
    }

    .date {
        z-index: 9999;
        right: 507px;
        bottom: 290px;
        rotate: 23deg;
    }

    .music {
        z-index: 9999;
        top: -3px;
        left: 514px;
    }

    .bg {
        position: absolute;
    }

    .bg4 {
        bottom: 0;
        z-index: 9500;
        width: 100%;
    }

    .bg3 {
        bottom: 0;
        left: 0;
        z-index: 9000;
        height: 100%;
    }

    .bg2 {
        bottom: -100px;
        right: -150px;
        z-index: 8500;
        width: 100%;
    }

    .bg1 {
        top: -70px;
        right: 0;
        z-index: 8000;
        width: 40%;
    }
</style>