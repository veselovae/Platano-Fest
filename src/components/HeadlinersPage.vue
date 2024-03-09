<template>
    <div class="headliners-page">
        <h1>ХЭДЛАЙНЕРЫ</h1>

        <div class="headliners">
            <div class="headliner-name" v-for="(headliner, index) in headliners" :key="index">
                <img :src="headliner.url" class="art">
                <h3>{{ headliner.name }}</h3>
                <div class="date-time">
                    <p class="date">{{ headliner.date }}</p>
                    <p class="time">{{ headliner.time }}</p>
                </div>
            </div>
        </div>

        <h2>АРТИСТЫ</h2>
        <div class="artists">
            <div class="artist-name" v-for="(artist, index) in artists" :key="index">
                <img :src="artist.url" class="art">
                <h4>{{ artist.name }}</h4>
                <div class="date-time">
                    <p class="date">{{ artist.date }}</p>
                    <p class="time">{{ artist.time }}</p>
                </div>
            </div>
            <div class="artists-info">
                <h5>Список приглашенных артистов постоянно пополняется</h5>
                <p>Подписывайся на нас в соц. сетях чтобы не пропустить обновления</p>
                <div class="social">
                    <img src="../assets/images/headliners/VK.png">
                    <img src="../assets/images/headliners/IG.png">
                    <img src="../assets/images/headliners/TG.png">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headliners: [
                {name: 'МЕДЖИКУЛ', url: require('@/assets/images/headliners/medzhikul.png'), date: '2 ИЮНЯ', time: '18:00'},
                {name: 'КОЛЯ МАНЮ', url: require('@/assets/images/headliners/kolyamanu.png'), date: '2 ИЮНЯ', time: '19:30'},
                {name: 'БЕЛКИ НА АКАЦИИ', url: require('@/assets/images/headliners/belkinaakacii.png'), date: '3 ИЮНЯ', time: '20:00'},
                {name: 'PLUSH MOON', url: require('@/assets/images/headliners/plushmoon.png'), date: '3 ИЮНЯ', time: '21:00'}
            ],
            
            artists: [
                {name: 'ONE LOVE', url: require('@/assets/images/headliners/onelove.png'), date: '2 ИЮНЯ', time: '18:00'},
                {name: 'ШИSHКА', url: require('../assets/images/headliners/shishka.png'), date: '3 ИЮНЯ', time: '17:00'},
                {name: 'УКАЧАЛО', url: require('../assets/images/headliners/ukachalo.png'), date: '3 ИЮНЯ', time: '18:00'},
                {name: 'АСОМНИЯ', url: require('../assets/images/headliners/asomnia.png'), date: '3 ИЮНЯ', time: '18:00'},
                {name: 'МИША МИЩЕНКО', url: require('../assets/images/headliners/mishamishenko.png'), date: '3 ИЮНЯ', time: '17:00'},
            ]
        }
    }
}
</script>

<style>
    .headliners-page {
        width: 100%;
        height: calc(100vh - 50px);
        background: #FFC64F;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        width: 1300px;
        font-size: 60px;
        padding-top: 39px;
        padding-bottom: 45px;
    }

    h2 {
        width: 1300px;
        font-size: 30px;
        padding-bottom: 34px;
        padding-top: 35px;
    }

    .headliner-name, .artist-name {
        position: relative;
    }

    h3, h4, .date, .time {
        font-family: 'Druk Cyr';
        color: #ffffff;
    }

    h3, .headliner-name .date, .headliner-name .time {
        font-size: 54px;
    }

    .artist-name .date, .artist-name .time {
        font-size: 30px;
    }

    .date-time {
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .headliner-name .date-time {
        left: 80px;
        top: 80px;
        opacity: 0;
        transition: opacity .1s ease;
    }

    .artist-name .date-time {
        left: 37px;
        top: 30px;
        opacity: 0;
        transition: opacity .1s ease;
    }

    .artist-name:hover .date-time, .headliner-name:hover .date-time  {
        opacity: 1;
    }

    h3 {
        width: 270px;
        text-align: center;
        position: absolute;
        bottom: -30px;
        left: 12px;
        rotate: -1deg;
        z-index: 9000;
    }

    h4 {
        width: 150px;
        text-align: center;
        font-size: 32px;
        position: absolute;
        bottom: -15px;
        rotate: -1deg;
        z-index: 9000;
    }

    .art:hover ~ h3,  .art:hover ~ h4{
        rotate: -2deg;
    }

    .time {
        color: #FFC64F;
    }

    .headliners, .artists {
        display: flex;
        gap: 43px;
    }

    .art {
        rotate: -1deg;
    }

    .art:hover {
        rotate: 0deg;
        filter: grayscale(72%) brightness(80%);
    }

    .artists-info {
        width: 236px;
        
    }

    .artists-info h5 {
        font-size: 14px;
        padding-bottom: 16px;
    }

    .artists-info p {
        font-size: 10px;
        padding-bottom: 16px;
    }

    .social {
        display: flex;
        gap: 10PX
    }
</style>