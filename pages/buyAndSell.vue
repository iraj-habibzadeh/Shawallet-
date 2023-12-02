<template>
  <div :id="$route.name">
    <script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js"></script>
    <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="transparent"  locale="en"></coingecko-coin-converter-widget>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss"></style>
