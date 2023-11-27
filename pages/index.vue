<template>
  <div :id="$route.name" class="position-relative wrapper">
    <div class="container">
      <div class="row">
        <div v-if="coins.currencess" class="col-12 text-capitalize sha-active-box">

          <h2 class="tr-gray-four"><span>active Coin:</span> <span>{{ coins.activeCoin || 'LTCBTC' }}</span></h2>

          <h2 class="tr-gray-four"><span>priceUSD:</span> <span>{{
              !coins.currencess.price ? '...Loading' : '$' + coins.currencess.price
            }}</span></h2>
          <h2 class="tr-gray-four"><span>priceIRR:</span> <span>{{
              !coins.currencess.price ? '...Loading' : Number(coins.currencess.price) * 420000
            }}</span></h2>

          <!--          <h1 class="tr-gray-four">-->
          <!--            <span>time:</span><span-->
          <!--            v-if="coins.currencess.timestamp">{{-->
          <!--              new Date(coins.currencess.timestamp * 1000).toLocaleDateString('en-US', {-->
          <!--                day: '2-digit',-->
          <!--                month: '2-digit',-->
          <!--                year: 'numeric',-->
          <!--              })-->
          <!--            }}</span>-->
          <!--          </h1>-->
        </div>
        <div class="col-12 sha-currency-table ">
          <b-form-input
            v-model="coins.activeCoin" list="my-list-id"
            @change="setActiveToken(coins.activeCoin)" @keyup.enter="setActiveToken(coins.activeCoin)"></b-form-input>
          <datalist id="my-list-id" class="mb-2 btn-gray border-0">
            <option>LTCBTC</option>


            <option v-for="(item,index) in coins.symbols" :key="index"><span>{{ item }}</span>
            </option>
          </datalist>
          <div v-for="(item,index) in coins.symbols" class="card-group">
            <!--            <img class="poiner-event" @click.prevent="setActiveToken(item)"-->

            <!--                 :src="srcCoin+item.replace(/usd|[1-9]|USD|USDT/g,'')+'.png'" :alt="item"/>-->


            <p :class=" coins.activeCoin === item ? 'active-coin font-weight-bolder' : ''"
               class="card-body card-text param tr-gray-four poiner-event param-18"
               @click.prevent="setActiveToken(item)">
              {{ index + '-' }} <span class="tr-gray-three font-weight-bolder">{{ item }}</span></p>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

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
        {hid: 'description', name: 'description', content: this.meta.description},
        {hid: 'keywords', name: 'keywords', content: 'SHA_WALLET,wallet,cryptocurrency,exchange,sha_walet,web3,'},
        {hid: 'og:title', property: 'og:title', content: this.meta.title},
        {hid: 'og:description', property: 'og:description', content: this.meta.description},
        {hid: 'og:url', property: 'og:url', content: ''},
        {hid: 'og:image', property: 'og:image', content: 'mstile-150x150.png'},
        {hid: 'twitter:title', property: 'twitter:title', content: ''},
      ]


    };
  },

  async created() {
    // await this.getCurrency();
    // await this.getSymbols();
  },
  methods: {

    async getCurrency() {
      this.loading = true
      let url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${!this.coins.activeCoin ? 'LTCBTC' : this.coins.activeCoin}`;
      await this.$axios.$get(url).then((res) => {
        this.coins.currencess = res.data
        this.loading = false

      }).catch((err) => {
        this.$loading.failed();
        console.log(err, "err")
      })
    },
    async getSymbols() {
      this.loading = true

      let url = 'https://api.api-ninjas.com/v1/cryptosymbols';
      await this.$axios.$get(url).then((res) => {
        this.coins.symbols = res.data.symbols;
        this.loading = false

      }).catch(err => {
        this.$loading.failed();

        console.log(err)
      })
    },

    async setActiveToken(item) {
      this.coins.activeCoin = await item
      await this.getCurrency()

    }
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
    height: 50vh;
  }
}


</style>

