<template>
    <div class="tickets-page">
        <div class="page-content">
            <h1>КУПИТЬ  БИЛЕТЫ</h1>
            <p class="desc">Цены увеличиваются по датам и квотам. На каждую ценовую категорию выделено ограниченное колличество билетов. Как только билеты в категории заканчваются — цена увеличивается.</p>
        

            <div class="tickets">
                <div class="ticket" v-for="(ticket, index) in tickets" :key="index">
                    <p class="date">{{ ticket.date }}</p>
                    <div class="line"></div>
                    <div class="ticket-content">
                        <div class="left-side">
                            <h5>{{ ticket.name }}</h5>
                            <h5>{{ ticket.days }}</h5>
                            <p class="info">{{ ticket.info }}</p>
                            <p class="add">{{ ticket.add }}</p>
                        </div>
                        <div class="right-side">
                            <button>КУПИТЬ БИЛЕТ</button>
                            <p class="price first">{{ ticket.price[0] }}</p>
                            <p class="price">{{ ticket.price[1] }}</p>
                            <p class="price">{{ ticket.price[2] }}</p>
                        </div>
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
            tickets: [
                {date: '2 ИЮНЯ / ДЮРСО', name: 'БАЗОВЫЙ', days: 'ОДИН ДЕНЬ', 
                info: 'КЕМПИНГ / 1 МАСТЕР-КЛАСС / 1 КВЕСТ', add: '* ВОЗМОЖНА АРЕНДА ПАЛАТКИ', 
                price: ['ДО 30.05 - 1000 ₽', 'ДО 15.06 - 1500 ₽', 'ДО 2.07 - 2000 ₽']},

                {date: '2 ИЮНЯ / ДЮРСО', name: 'ПОЛНЫЙ', days: 'ОДИН ДЕНЬ', 
                info: 'ХОСТЕЛ / 2 МАСТЕР-КЛАССА / 1 КВЕСТ', add: '* ВКЛЮЧЕН КЕМПИНГ', 
                price: ['ДО 30.05 - 2000 ₽', 'ДО 15.06 - 2500 ₽', 'ДО 2.07 - 3500 ₽']},

                {date: '2-3 ИЮНЯ / ДЮРСО', name: 'БАЗОВЫЙ', days: 'ДВА ДНЯ', 
                info: 'КЕМПИНГ / 3 МАСТЕР-КЛАССА / 1 КВЕСТ', add: '* ВОЗМОЖНА АРЕНДА ПАЛАТКИ', 
                price: ['ДО 30.05 - 2000 ₽', 'ДО 15.06 - 2500 ₽', 'ДО 2.07 - 3500 ₽']},

                {date: '2-3 ИЮНЯ / ДЮРСО', name: 'ПОЛНЫЙ', days: 'ДВА ДНЯ', 
                info: 'ХОСТЕЛ / 1 МАСТЕР-КЛАСС / 2 КВЕСТА', add: '* ВКЛЮЧЕН КЕМПИНГ', 
                price: ['ДО 30.05 - 3000 ₽', 'ДО 15.06 - 3500 ₽', 'ДО 2.07 - 4000 ₽']},
            ]
        }
    }
}
</script>

<style scoped>
    .tickets-page {
        background: #FFC64F;
        width: 100%;
        min-height: calc(100vh - 50px);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .page-content {
        padding-left: 40px;
        width: 1300px;
    }

    h1 {
        font-size: 60px;
        padding-top: 39px;
        padding-bottom: 45px;
    }

    .desc {
        width: 633px;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 39px;
    }

    .tickets {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 21px;
        margin-bottom: 50px;
    }

    .ticket {
        width: 618px;
        height: 182px;
        background: #ffffff;
        border-radius: 16px;
        border: none;
        position: relative;
    }

    .ticket:hover {
        rotate: -2deg;
    }

    .line {
        height: 182px;
        width: 2px;
        border-right: 2px dashed #C4C4C4;
        position: absolute;
        top: 0;
        left: 370px
    }

    .ticket .date {
        padding-left: 18px;
        padding-top: 10px;
        font-size: 12px;
    }

    .ticket-content {
        display: flex;
        justify-content: space-between;
        height: 150px;
        padding: 0 32px;
        gap: 79px;
    }

    h5 {
        font-size: 24px;
    }

    .info {
        font-size: 9px;
        margin-top: 15px;
    }

    .add {
        margin-top: 29px;
        color: #C4C4C4;
        font-size: 9px;
    }

    .left-side {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }

    .right-side {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    button {
        cursor: pointer;
        font-weight: 900;
        font-size: 10px;
        padding: 10px 32px;
        border-radius: 150px;
        border: none;
        background: #FFC64F;
        color: #ffffff;
        margin-bottom: 23px;
        transition: background .1s ease;
    }

    button:hover {
        background: #FF9900;
    }

    .price {
        color: #C4C4C4;
        font-size: 9px;
        margin-bottom: 10px;
    }

    .price:last-child {
        margin-bottom: 0;
    }

    .first {
        color: #111111;
    }

    @media (max-width: 1300px) {
        .page-content {
            width: 900px;
        }
    }

    @media (max-width: 900px) {
        .page-content {
            width: 100%;
        }

        h1 {
            font-size: 40px;
            padding-bottom: 30px;
        }

        .desc {
            width: 100%;
            font-size: 13px;
            margin-bottom: 20px;
            padding-right: 30px;
        }
    }

    @media (max-width: 670px) {

        h1 {
            font-size: 30px;
        }

        .desc {
            font-size: 10px;
        }

        .ticket {
            width: 100%;
            height: 150px;
            margin-right: 30px;
        }

        .line {
            height: 100%;
            left: 55%;
        }
    
        .ticket .date {
            font-size: 10px;
        }
    
        .ticket-content {
            height: 120px;
            gap: 50px;
        }
    
        h5 {
            font-size: 16px;
        }
    
        .info {
            font-size: 7px;
        }
    
        .add {
            margin-top: 20px;
            font-size: 7px;
        }
    
        button {
            font-size: 7px;
            padding: 10px 22px;
            margin-bottom: 13px;
        }
    
        .price {
            font-size: 7px;
        }
    }

    @media (max-width: 430px) {
        .ticket .date {
            font-size: 7px;
        }
    
        h5 {
            font-size: 12px;
        }
    
        .info {
            font-size: 6px;
        }
    
        .add {
            font-size: 6px;
        }
    
        button {
            font-size: 6px;
            padding: 10px 15px;
        }
    
        .price {
            font-size: 6px;
        }
    }

</style>