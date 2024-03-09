<template>
    <div class="contacts-page">
        <div class="page-content">
            <h1>КОНТАКТЫ</h1>

            <div class="contacts-info">
                <div class="for-questions">
                    <h5>Общие вопросы</h5>
                    <p class="num">+7 918 057-30-01</p>
                    <p class="email">info@platano-fest.ru</p>
                </div>
                <div class="for-partners">
                    <h5>Партнёрам</h5>
                    <p class="num">+7 918 210-36-62</p>
                    <p class="email">artist@platano-fest.ru</p>
                </div>
                <div class="route">
                    <h5>Проложить маршрут</h5>
                    <div class="buttons">
                        <button><a href="https://yandex.ru/maps/?um=constructor%3A29190a598ffd78ce956f6f98e4a197ad5a14486d19afcd133008681fef5f6a39&source=constructorLink">ЯНДЕКС КАРТЫ</a></button>
                        <button><a href="https://maps.app.goo.gl/BTYTCq3fXhUdtdXV9">GOOGLE КАРТЫ</a></button>
                    </div>
                    
                </div>

                <div class="logo-social">
                    <a href="#/mainpage"><img src="../assets/images/contact/LOGO.png"></a>
                    <div class="social">
                        <div class="icons">
                            <img src="../assets/images/contact/VK.png" class="social-icon">
                            <img src="../assets/images/contact/IG.png" class="social-icon">
                            <img src="../assets/images/contact/TG.png" class="social-icon">
                        </div>
                        <p>© PLATANO FEST 2021</p>
                    </div>
                </div>
            </div>

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A29190a598ffd78ce956f6f98e4a197ad5a14486d19afcd133008681fef5f6a39&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contacts-page {
        position: relative;
        background: #1F1F1F;
        width: 100%;
        height: calc(100vh - 50px);
        display: flex;
        justify-content: center;
        color: #ffffff;
    }

    .page-content {
        width: 1300px;
    }

    h1 {
        font-size: 60px;
        padding-top: 39px;
        padding-bottom: 53px;
        color: #ffffff;
    }

    .for-partners {
        margin-top: 39px;
        margin-bottom: 39px;
    }

    h5 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .num {
        font-size: 21px;
        color: #B5B5B5;
        padding-bottom: 10px;
        font-weight: 400;
    }

    .email {
        font-size: 16px;
        color: #B5B5B5;
        padding-bottom: 10px;
        font-weight: 400;
    }

    .route h5 {
        margin-bottom: 30px;
    }

    a {
        font-size: 10px;
        font-weight: 900;
        color: #ffffff;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        padding: 10px 29px 10px 33px;
        background: transparent;
        border: 1px solid #ffffff;
        border-radius: 17px;
        transition: all .1s ease;
    }

    button:first-child {
        margin-right: 10px;
    }

    button:hover {
        background: #FFC64F;
        border-color: #FFC64F;
    }

    .buttons {
        margin-bottom: 91px;
    }

    .logo-social {
        display: flex;
        align-items: flex-end;
        gap: 119px;
    }

    .icons {
        margin-bottom: 19px;
        display: flex;
        gap: 4px;
    }

    .social p {
        font-weight: 400;
        font-size: 9px;
        color: #525252;
    }
 
    iframe {
        position: absolute;
        right: 100px;
        top: 170px;
    }
</style>