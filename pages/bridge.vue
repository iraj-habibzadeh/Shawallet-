<template>
  <div :id=" $route.name">
    <iframe
      src="https://www.coingecko.com/fr?utm_source=cdpn.io&utm_medium=coin_list_widget&utm_content=bitcoin,binancecoin,cyberconnect,hifi-finance,tether,worldcoin-wld"></iframe>
    <iframe> <!-- TradingView Widget BEGIN -->

      <div class="tradingview-widget-container" style="height: 100vh;">
        <div class="tradingview-widget-container__widget" style="height: 100%;"></div>
        <script type="text/javascript"
                src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
                async>
          {
            "colorTheme"
          :
            "dark",
              "dateRange"
          :
            "1D",
              "showChart"
          :
            true,
              "locale"
          :
            "en",
              "width"
          :
            "100%",
              "height"
          :
            "100%",
              "largeChartUrl"
          :
            "",
              "isTransparent"
          :
            false,
              "showSymbolLogo"
          :
            true,
              "showFloatingTooltip"
          :
            true,
              "plotLineColorGrowing"
          :
            "rgba(255, 255, 255, 1)",
              "plotLineColorFalling"
          :
            "rgba(255, 255, 0, 1)",
              "gridLineColor"
          :
            "rgba(42, 46, 57, 0)",
              "scaleFontColor"
          :
            "rgba(134, 137, 147, 1)",
              "belowLineFillColorGrowing"
          :
            "rgba(0, 255, 0, 0.22)",
              "belowLineFillColorFalling"
          :
            "rgba(255, 0, 0, 0.27)",
              "belowLineFillColorGrowingBottom"
          :
            "rgba(0, 255, 0, 0.11)",
              "belowLineFillColorFallingBottom"
          :
            "rgba(255, 0, 0, 0.2)",
              "symbolActiveColor"
          :
            "rgba(152, 0, 255, 0.19)",
              "tabs"
          :
            [
              {
                "title": "Crypto",
                "symbols": [
                  {
                    "s": "BINANCE:BTCUSD"
                  },
                  {
                    "s": "CRYPTO:CKBUSD"
                  }
                ],
                "originalTitle": "Indices"
              },
              {
                "title": "Dollars",
                "symbols": [
                  {
                    "s": "FX_IDC:CADUSD"
                  },
                  {
                    "s": "INDEX:DXY"
                  }
                ],
                "originalTitle": "Forex"
              }
            ]
          }
        </script>
      </div>
      <!-- TradingView Widget END -->
    </iframe>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss"></style>
