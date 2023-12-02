<template>
  <div class="lang">
    <div class="img-box" @click.prevent="setDirection()">
      <p class="pointer-event">{{ $i18n.localeProperties.name }}</p>

      <!-- <img :src="" alt=""> -->
    </div>
    <div v-if="langBox" :class="$i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'" class="drop-down-box box-shadow p-2 "
         @mouseleave="langBox =false">
      <NuxtLink :to="switchLocalePath('en')" class="param tr-gray-four">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('fa')" class="param tr-gray-four">Farsi</NuxtLink>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      langBox: false
    }
  },
  created() {
  },
  methods: {
    setDirection() {
      this.langBox = !this.langBox

    }
  }

}


</script>
<style lang="scss">
.lang {
  position: relative;

  .drop-down-box {
    position: absolute;
    left: -50px;
    top: 20px;
    z-index: +99;

    a {
      display: block;
      text-align: center;
      padding: 10px 15px;
    }

  }

  .drop-down-box.dir-rtl {
    left: 0;
    z-index: +99;
  }
}
</style>
