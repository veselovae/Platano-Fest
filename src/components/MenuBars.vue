<template>
    <div class="menu-bars">
        <ul>
            <li><a href="#/headliners">АРТИСТЫ</a></li>
            <li><a href="#/info">ИНФОРМАЦИЯ</a></li>
            <li><a href="#/map">КАРТА</a></li>
            <li><a href="#/contacts">КОНТАКТЫ</a></li>
            <li><a href="#/tickets">КУПИТЬ БИЛЕТ</a></li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .menu-bars {
        display: none;
        position: absolute;
        z-index: 10000;
        width: 100%;
        height: 100vh;
        background: rgb(17, 17, 17, .9);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        transition: color .1s ease;
    }

    li {
        list-style: none;
        margin-bottom: 30px;
        text-align: center;
    }

    li a:hover {
        color: #FFC64F;
    }
</style>