<template>
    <div class="headliners-page">
        
        <div class="headliners">
            <h1>ХЭДЛАЙНЕРЫ</h1>
            <div class="headliners-list">
                <div class="headliner-name" v-for="(headliner, index) in headliners" :key="index">
                    <img :src="headliner.url" class="art">
                    <h3>{{ headliner.name }}</h3>
                    <div class="date-time">
                        <p class="date">{{ headliner.date }}</p>
                        <p class="time">{{ headliner.time }}</p>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="artists">
            <h2>АРТИСТЫ</h2>
            <div class="artists-list">
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
                        <img src="../assets/images/headliners/VK.png" class="social-icon">
                        <img src="../assets/images/headliners/IG.png" class="social-icon">
                        <img src="../assets/images/headliners/TG.png" class="social-icon">
                    </div>
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

<style scoped>
    .headliners-page {
        width: 100vw;
        min-height: calc(100vh - 50px);
        background: #FFC64F;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    h1 {
        font-size: 60px;
        padding: 39px 0 45px 50px;
    }

    h2 {
        font-size: 30px;
        padding: 35px 0 34px 50px;
    }

    .headliner-name, .artist-name {
        position: relative;
    }

    
    .headliners, .artists {
        position: relative;
    }

    .artists {
        left: -50px;
        padding-left: 50px;
    }

    .headliners-list, .artists-list {
        margin-left: 45px;
        display: flex;
        flex-wrap: wrap;
        gap: 43px;
    }

    .artists-list {
        padding-bottom: 50px;
    }

    .art {
        rotate: -1deg;
    }

    @media (max-width: 750px) {
        h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 510px) {
        h1 {
            font-size: 30px;
        }

        .artists-list {
            gap: 30px
        }

        .headliners-list, .artists-list {
            margin-left: 30px;
        }

        h1, h2 {
            padding-left: 30px;
        }
    }

    /*date and time*/

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

    .headliner-name:hover h3, .artist-name:hover h4 {
        rotate: -2deg;
    }

    .headliner-name:hover .art, .artist-name:hover .art {
        rotate: 0deg;
        filter: grayscale(72%) brightness(80%);
    }

    .time {
        color: #FFC64F;
    }


    /*artists info and socials*/ 
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

    .social-icon {
        cursor: pointer;
    }
</style>