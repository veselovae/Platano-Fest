<template>
    <div class="main-page">
        <img src="../assets/images/main/bg1.png" class="bg bg1">
        <img src="../assets/images/main/bg2.png" class="bg bg2">
        <img src="../assets/images/main/bg3.png" class="bg bg3">
        <img src="../assets/images/main/bg4.png" class="bg bg4">

        <div>
            <img src="../assets/images/main/date.png" class="circle date">
            <img src="../assets/images/main/music.png" class="circle music">

            <img src="../assets/images/main/logo.png" alt="logo" class="logo">
        </div>
        <a href="#/tickets">КУПИТЬ БИЛЕТ</a>
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

    .main-page div{
        position: relative;
        z-index: 9999;
    }

    .logo {
        z-index: 9999;
    }

    a {
        z-index: 9999;
        font-size: 16px;
        padding: 16px 51px;
        border-radius: 150px;
        border: 1px solid #ffffff;
        background-color: transparent;
        transition: all .2s ease;
        color: #ffffff;
        text-decoration: none;
    }

    a:hover {
        background-color: #ffffff;
        color: #FFC64F;
    }

    .circle {
        position: absolute;
    }

    .date {
        z-index: 9999;
        right: -195px;
        bottom: -100px;
        rotate: 23deg;
    }

    .music {
        z-index: 9999;
        top: -171px;
        left: -187px;
    }

    @media (max-width: 900px) {
        .logo {
            height: 150px;
        }

        .date, .music {
            height: 100px;
        }

        .date {
            right: -100px;
            bottom: -100px;
        }
    
        .music {
            top: -100px;
            left: -100px;
        }
    }

    @media (max-width: 450px) {
        .date {
            right: -50px;
            bottom: -100px;
        }
    
        .music {
            top: -100px;
            left: -60px;
        }
    }

    .bg {
        position: absolute;
    }

    .bg4 {
        bottom: 0;
        z-index: 8500;
        width: 100%;
    }

    .bg3 {
        bottom: 0;
        left: 0;
        z-index: 8000;
        height: 100%;
    }

    .bg2 {
        bottom: -100px;
        right: -150px;
        z-index: 7500;
        width: 100%;
    }

    .bg1 {
        right: 0;
        z-index: 6000;
        width: 40%;
        height: 100%;
    }
</style>