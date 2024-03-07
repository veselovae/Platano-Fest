<template>
  <header>
    <a href="#/mainpage"><img src="./assets/images/logo.png" alt="logo"></a>
    <nav>
      <ul>
        <li><a href="#/headliners">АРТИСТЫ</a></li>
        <li><a href="#/info">ИНФОРМАЦИЯ</a></li>
        <li><a href="#/map">КАРТА</a></li>
        <li><a href="#/contacts">КОНТАКТЫ</a></li>
        <li class="buy-ticket"><a href="#/tickets">КУПИТЬ БИЛЕТ</a></li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
  <MainPage></MainPage>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: 'App',
  components: { MainPage }
 
}
</script>

<style scoped>
header {
  background-color: #111111;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header img {
  margin-right: 54px;
}

ul {
  display: flex;
  color: #ffffff;
  gap: 54px;
  align-items: center;
}

ul li {
  font-family: 'Druk Wide Cyr';
  font-size: 10px;
  list-style: none;
  font-weight: 900;
}

ul li.buy-ticket {
  background: #FFC64F;
  padding: 10px 32px;
  border-radius: 150px;
}

</style>
