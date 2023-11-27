<template>
  <div class="lang">
    <div class="img-box" @click.prevent="setDirection()">
      <p class="pointer-event">{{ $i18n.localeProperties.name }}</p>

      <!-- <img :src="" alt=""> -->
    </div>
    <div class="drop-down-box box-shadow p-2 " :class="$i18n.locale === 'fa' ? 'dir-rtl' : 'dir-ltr'" v-if="langBox"
         @mouseleave="langBox =false">
      <NuxtLink class="param tr-gray-four" :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink class="param tr-gray-four" :to="switchLocalePath('fa')">Farsi</NuxtLink>
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

    a {
      display: block;
      text-align: center;
      padding: 10px 15px;
    }

  }

  .drop-down-box.dir-rtl {
    left: 0;
  }
}
</style>
