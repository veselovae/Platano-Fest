<template>
    <div class="map-page">
        <img src="../assets/images/map/map.png" class="bg">

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
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
}

.bg {
    position: absolute;
    right: 0;
    height: 100%;
}

.page-content {
    width: 1300px;
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

</style>