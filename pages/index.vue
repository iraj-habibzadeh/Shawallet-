<template>
  <div :id="$route.name" class="position-relative wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 sha-currency-table ">
          <script src="../plugins/coinMarketTicker.js"></script>
          <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
          <coingecko-coin-market-ticker-list-widget coin-id="bitcoin" currency="usd" 
            background-color="rgba(255, 255, 255, 0.2)" locale="en"></coingecko-coin-market-ticker-list-widget>
        </div>
      </div>
    </div>
  </div>
</div></div></template>

<script>


export default {
  name: 'IndexPage',
  data() {
    return {
      meta: {
        title: `Buy And Sell Crypto OnChain ||  + ${this.$route.name}`,
        description: 'Buy and sell cryptocurrency securely using SHA_WALLET on the WEB3 platform. Discover the benefits of this digital wallet, exchange, and learn how to navigate the world of cryptocurrencies.',
        image: '',
        pageName: this.$route.name
      },
      loading: false,
      srcCoin: require('assets/coin/0X0.png'),

      coins: {
        symbols: null,
        currencess: null,
        activeCoin: null,

      }
    }
  },

  head() {

    return {
      title: 'Buy And Sell Crypto OnChain || ' + this.$route.name,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'keywords', name: 'keywords', content: 'SHA_WALLET,wallet,cryptocurrency,exchange,sha_walet,web3, ' },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: ' ' },
        { hid: 'og:image', property: 'og:image', content: 'mstile-150x150.png ' },
        { hid: 'twitter:title', property: 'twitter:title', content: ' ' },
      ]


    };
  },

  async created() {
    // await this.getCurrency();
    // await this.getSymbols();
  },
  methods: {

    // async getCurrency() {
    //   this.loading = true
    //   let url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${!this.coins.activeCoin ? 'LTCBTC' : this.coins.activeCoin}`;
    //   await this.$axios.$get(url).then((res) => {
    //     this.coins.currencess = res.data
    //     this.loading = false

    //   }).catch((err) => {
    //     this.$loading.failed();
    //     console.log(err, "err")
    //   })
    // },
    // async getSymbols() {
    //   this.loading = true

    //   let url = 'https://api.api-ninjas.com/v1/cryptosymbols';
    //   await this.$axios.$get(url).then((res) => {
    //     this.coins.symbols = res.data.symbols;
    //     this.loading = false

    //   }).catch(err => {
    //     this.$loading.failed();

    //     console.log(err)
    //   })
    // },

    // async setActiveToken(item) {
    //   this.coins.activeCoin = await item
    //   await this.getCurrency()

    // }
  }
}
</script>
<style lang="scss">
.wrapper {


  .sha-active-box {
    border-radius: 7px;
    padding: 15px 15px;
    min-height: 20vh;
    margin-bottom: 15px;

    h2 {
      display: flex;
      justify-content: space-around;
      padding: 0 15px;
    }

  }

  .active-coin {
    opacity: .8;
    border-bottom: solid 2px #5a9d79;
  }

  .sha-currency-table {
    overflow: scroll;
    min-height: 50vh;


  }
}
</style>


</style>

