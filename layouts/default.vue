<template>
  <div :id="$route.name + $i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'">

    <div :class="$i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'" class="shawallet container-fluid  ">

      <div class="row">
        <header class="p-0"
                :class="$store.state.sidebar ? 'position-relative col-md-3' : ' position-relative col-12 col-md-1'">
          <SideBar :class="$i18n.locale === 'fa' ? 'sidebar-rtl' : 'sidebar-ltr'"/>
        </header>
        <div class="p-0 " :class="$store.state.sidebar ? ' col-12 col-md-9' : 'col-12 col-md-11'">
          <Header/>
          <main class="sha-wrapper">

            <Nuxt/>

          </main>
        </div>

      </div>

      <div class="row">
        <footer class="col-12 p-0">
          <Footer/>
        </footer>
      </div>

    </div>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'defaultLayout',
  comments: {
    Header,
    SideBar,
    Footer,

  },
  created(){
    this.$i18n.messages.default
  },

  methods: {}
}
</script>
<!--_handleDisconnect-->
