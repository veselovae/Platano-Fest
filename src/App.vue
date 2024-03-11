<template>
  <header  @click="activePage($event.target)">
    <a id="logo" href="#/mainpage" @click="closeMenu"><img src="./assets/images/logo.png" alt="logo"></a>
    <img src="../src/assets/bars-solid.svg" class="bars" @click="toggleClass">

    <ul>
      <li><a href="#/headliners">АРТИСТЫ</a></li>
      <li><a href="#/info">ИНФОРМАЦИЯ</a></li>
      <li><a href="#/map">КАРТА</a></li>
      <li><a href="#/contacts">КОНТАКТЫ</a></li>
      <a href="#/tickets"><li class="buy-ticket">КУПИТЬ БИЛЕТ</li></a>
    </ul>
  </header>
  <MenuBars v-if="showMenu" @click="toggleClass"></MenuBars>
  <router-view></router-view>
  
</template>

<script>
  import MenuBars from "@/components/MenuBars.vue";

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  components: { MenuBars },
  name: 'App',
  methods: {
    activePage(target) {
      if (target.tagName == 'A') {
        this.deleteActiveClass()
        target.className = 'active';
      } else if (target.tagName == 'IMG' || target.tagName == 'LI') {
        this.deleteActiveClass()
      }
    },
    deleteActiveClass() {
      for (let el of document.querySelectorAll('a')) {
          el.className = ''
        }
    },
    toggleClass() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      if (this.showMenu) {
        this.toggleClass() 
      }
    }
  }
 
}
</script>

<style scoped>
header {
  background-color: #111111;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bars {
  display: none;
  width: 30px;
  height: 30px;
  filter: invert();
  cursor: pointer;
}

.showMenu {
  display: block;
}

#logo{
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

ul li a:hover, ul li a.active {
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

@media (max-width: 900px) {
  ul {
    display: none;
  }

  .bars {
    display: inline;
  }
  
}
</style>
