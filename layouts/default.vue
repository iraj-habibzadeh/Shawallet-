<template>
    <div :class="$i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'" class="shawallet container-fluid " :id="$route.name">
        <div class="row">
            <div class="sha-sidebar p-0" :class="$store.state.sidebar ? 'col-3' : 'col-1'">
                <SideBar :class="$i18n.locale === 'fa' ? 'sidebar-rtl' : 'sidebar-ltr'" />
            </div>
            <div class="p-0" :class="$store.state.sidebar ? 'col-9' : 'col-11'">
                <Header />
                <Nuxt />
            </div>

        </div>

        <div class="row">
            <div class="col-12 p-0">
                <Footer />
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
        Footer
    },
    async created() {
    },
    methods: {
    
    }
}
</script>
   
