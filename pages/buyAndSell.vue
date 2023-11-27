<template>
  <div :id="$route.name">
    {{ $route.name }}
    <script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js"></script>
    <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"></script>
    <coingecko-coin-heatmap-widget height="400" locale="en"></coingecko-coin-heatmap-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-list-widget.js"></script>
    <coingecko-coin-list-widget
      coin-ids="bitcoin,eos,ethereum,litecoin,ripple,tether,tron,arbitrum,matic-launchpad,matic-network" currency="usd"

      locale="en"></coingecko-coin-list-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-list-widget.js"></script>
    <coingecko-coin-list-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-list-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-price-static-headline-widget.js"></script>
    <coingecko-coin-price-static-headline-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-price-static-headline-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"></script>
    <coingecko-coin-ticker-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-ticker-widget>
    <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"></script>
    <coingecko-coin-ticker-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-ticker-widget>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss"></style>
