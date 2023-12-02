<template>
  <div :class="$i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'" class="sha-sidebar bg-green ">
    <div :class="$store.state.sidebar ? 'open' : 'close'"
         class="burger-menu param-lg font-weight-bloder bg-green poiner-event d-none d-md-flex d-lg-flex"
         @click.prevent="HandleSidebar()">
      {{ show ? 'X' : ' ☰' }}
    </div>
    <div class="sha-sidebar-box">
      <ul class="list-style-none">
        <li v-for="(item, index) in menus" :id="index" :key="index" class="pointer-event ">
          <NuxtLink :class="$store.state.sidebar ? 'param-lg' : 'param-md'" :to="localePath(item.to)"
                    class="tr-light-gray text-captlize ">
            {{ $t(`sidebar.${item.text}`) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      show: false,
      active: 0,
      menus: [
        {
          text: 'home',
          // icon: '&#x2302;',
          to: '/'
        },
        {
          text: 'buyAndSell',
          // icon: `&#128722;`,
          to: '/buyAndSell'
        },
        {
          text: 'bridge',
          // icon: '&#x1F309;',
          to: '/bridge'
        },
        {
          text: 'profile',
          // icon: '&#x2699;',
          to: '/profile'
        },
      ]
    }
  },
  methods: {
    async HandleSidebar() {
      let self = this;
      self.show = !self.show;
      await self.$store.commit('SET_SIDEBAR', self.show)
    }
  },
  created() {
  }
}
</script>
<style lang="scss">
.sha-sidebar {
  border-radius: 0 20px 20px 0;
  height: 93vh;
  z-index: +99;
  left: 0;
  top: 0;
  @media (max-width: 480px) {
    height: 14vh;


  }

  .burger-menu {
    transform: rotate(48deg);
    width: 35px;
    height: 35px;
    top: 20px;
    right: -15px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 900;
    position: absolute;
    z-index: +9;

    transition: .2s ease all;
  }

  .sha-sidebar-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;

    input {
      background: transparent;
    }

    ul {
      padding-left: 5px;
      width: 100%;
      @media (max-width: 480px) {
        display: flex;
        justify-content: center;
      }

      li {
        padding: 15px 0;
        position: relative;
        color: whitesmoke;
        width: 100%;

        a {
          width: 100%;
          display: flex;
          @media (max-width: 480px) {
            display: flex;
            justify-content: center;
          }
        }

        a:hover {
          color: whitesmoke;
        }
      }

      li a.nuxt-link-exact-active.active-link {
        opacity: 0.7;
        border-bottom: solid 2px whitesmoke;
        color: #FAFAFA;
        width: 100%;
        border-block-start-style: none;
      }

      li:hover {
        cursor: pointer;
      }
    }

  }

}

.sha-sidebar.dir-rtl {
  border-radius: 20px 0 0 20px;
  text-align: right;

  .burger-menu {
    right: 95%;
  }


}
</style>
