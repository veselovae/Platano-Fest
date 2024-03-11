<template>
    <div class="info-page">
        <img src="../assets/images/info/gb4.png" class="bg bg-figue">
        <img src="../assets/images/info/bg3_plant.png" class="bg bg-plant">
        <img src="../assets/images/info/bg2_plant.png" class="bg bg-plant2">
        <img src="../assets/images/info/bg1_dots.png" class="bg bg-dots">
        <img src="../assets/images/info/woman.png" class="bg bg-woman">

        <div class="page-content">
            <h1>ИНФОРМАЦИЯ</h1>
            
            <h3>Мексика, Колумбия, Эквадор, Доминикана</h3>
            <p>Всё, что вы хотели узнать об этих странах, теперь сможете попробовать и увидеть!</p>
            <h4>Мастер-классы, квесты, барабанные шоу от ведущих аниматоров из латинской Америки! </h4>
            <p>И конечно же, множество кулинарных открытий и сюрпризов вас ждёт на нашем фуд-корте!</p> 
        </div>
        
          
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .info-page {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 50px);
        height: 100%;
        background: #FFC64F;
        display: flex;
        justify-content: center;
    }

    /*background*/
    .bg {
        position: absolute;
    }

    .bg-figue {
        right: 0;
        bottom: 0;
        height: 67%;
    }

    .bg-plant {
        right: 0;
        top: 0;
        min-width: 360px;
        width: 40%;
        
    }
    
    .bg-plant2 {
        right: 0;
        top: 0;
        width: 36%;
        min-width: 360px;
        width: 40%;
    }

    .bg-dots {
        bottom: 0;
        right: 0;
        width: 65%;
    }

    .bg-woman {
        right: 0;
        bottom: 0;
        width: 36%;
        min-width: 455px;
    }

    /*content*/

    .page-content {
        width: 1300px;
        z-index: 1000;
        padding: 0 30px;
    }

    h1 {
        font-size: 60px;
        padding-top: 39px;
        padding-bottom: 45px;
    }

    h3, h4, p {
        width: 477px;
    }

    h3 {
        font-size: 42px;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 21px;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        margin-bottom: 40px;
    }

    @media (max-width: 1300px) {
        .page-content {
            width: 100%;
        }
    }

    @media (max-width: 880px) {
        .page-content {
            background: rgb(255, 255, 255, .3);
        }
    }

    @media (max-width: 750px) {
        h1 {
            font-size: 40px;
        }

        h3, h4, p {
           
            width: 300px;
        }
        h3 {
            font-size: 25px;
        }
        
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 30px;
        } 
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 25px;
        } 
    }
</style>