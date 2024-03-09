<template>
  <header>
    <a class="logo" href="#/mainpage"><img src="./assets/images/logo.png" alt="logo"></a>
    <nav>
      <ul>
        <li><a href="#/headliners">АРТИСТЫ</a></li>
        <li><a href="#/info">ИНФОРМАЦИЯ</a></li>
        <li><a href="#/map">КАРТА</a></li>
        <li><a href="#/contacts">КОНТАКТЫ</a></li>
        <a href="#/tickets"><li class="buy-ticket">КУПИТЬ БИЛЕТ</li></a>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
 
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

.logo{
  margin-right: 54px;
}

ul {
  display: flex;
  gap: 54px;
  align-items: center;
}

ul li {
  font-family: 'Druk Wide Cyr';
  font-size: 10px;
  list-style: none;
  font-weight: 900;
}

ul a {
  color: #ffffff;
  text-decoration: none;
  transform: color .2s ease;
}

ul li a:hover {
  color: #FFC64F;
}

ul li.buy-ticket {
  background: #FFC64F;
  padding: 10px 32px;
  border-radius: 150px;
  transition: background .2s ease;
}

ul li.buy-ticket:hover {
  background: #FF9900;
}

ul li.buy-ticket:hover a{
  color: #ffffff;
}
</style>
