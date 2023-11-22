<template>
  <div :id="$route.name">
    {{ $route.name }}
  </div>
</template>

<script >

export default {
  name: 'IndexPage',

  created() {
    this.getCurrncy()
  },
  methods: {
    getCurrncy() {
      this.$axios.$get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
         
          'X-CMC_PRO_API_KEY': '97b04997-62c8-4f3a-a922-c08b03a06832',
        },
      }).then((res) => {
        console.log(res.data, "res")
      }).catch((err) => console.log(err, "err"))

    }

  }
}
</script>
<style lang="scss"></style> 