<template>
    <div class="map-page">
        <div class="page-content">
            <h1>КАРТА</h1>
            <div class="points">
                <div class="point" v-for="(point, index) in points" :key="index">
                    <div>
                        <img src="../assets/images/map/point.png" class="point-bg">
                        <p class="point-num">{{ index + 1 }}</p>
                    </div>
                    <p class="point-text">{{ point }}</p>
                </div>
            </div>
        </div>

        <img src="../assets/images/map/map.png" class="bg">
    </div>
</template>

<script>
export default {
    data() {
        return {
            points: [
            'Главная сцена Platano Fest', 
            'Фудкорт с кухней Латинской Америки', 
            'Площадка лейбла "Музыка у моря"', 
            'Лаунж/чилаут зона для отдыха', 
            'Кемпинг', 
            'Парковка для гостей фестиваля',
            ]
        }
    }
}
</script>

<style scoped>
.map-page {
    position: relative;
    background: #FEF2D9;
    width: 100%;
    min-height: calc(100vh - 50px);
    height: 100%;
    display: flex;
    justify-content: center;
}

.bg {
    position: absolute;
    right: 0;
    height: 100%;
}

.page-content {
    position: relative;
    left: -470px;
}

h1 {
    font-size: 60px;
    padding-top: 39px;
    padding-bottom: 45px;
}

.points {
    padding-top: 50px;
    width: 300px;
}

.point {
    display: flex;
    gap: 21px;
    align-items: center;
    margin-bottom: 22px;
    
}

.point div {
    position: relative;
}

.point div p{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
}

.point-text {
    font-size: 16px;
}



@media (max-width: 1280px) {
    .map-page {
        flex-direction: column;
        justify-content: flex-start;
    }

    .points {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-top: 0;
    }

    .point-text {
        width: 150px;
    }

    .bg {
        position: relative;
        align-self: flex-end;
        width: 150%;
        right: 0;
    }
    
    .page-content {
        position: static;
        padding-left: 30px;
    }
}

@media (max-width: 750px) {
    h1 {
        font-size: 40px;
    }
    
}

    @media (max-width: 500px) {
        h1 {
            font-size: 30px;
        }

        .points {
            gap: 10px;
        }
    
        .point-text {
            width: 100px;
            font-size: 10px;
        }
    }
</style>