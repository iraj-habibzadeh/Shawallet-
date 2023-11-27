<template>
  <div class="sha-header ml-2 mr-2  p-3">
    <div class="logo">
      <NuxtLink to="/">
        <img alt="logo" class="pointer-event img-logo" src="logo.png" width="50">
      </NuxtLink>
    </div>
    <div class="connect">
      <button v-if="!account" class="btn-gray tr-gray-nine" @click.prevent="getAccount()">Connect Wallet</button>
      <button v-if="account" class="btn-gray tr-gray-nine" @click.prevent="logOut()">LogOut</button>

      <p class="param-sm tr-gray">Wallet: {{ account }}</p>
    </div>
    <div class="lang">
      <Lang/>
    </div>

  </div>
</template>
<script>


import Lang from '../components/Lang.vue';


export default {
  components: {
    Lang
  },


  data() {
    return {
      meta: {
        title: `Buy And Sell Crypto OnChain ||  + ${this.$route.name}`,
        description: 'Buy and sell cryptocurrency securely using SHA_WALLET on the WEB3 platform. Discover the benefits of this digital wallet, exchange, and learn how to navigate the world of cryptocurrencies.',
        image: '',
        pageName: this.$route.name
      },
      account: null,
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
      title: 'Buy And Sell Crypto OnChain || ' + this.$route.name || 'Home',
      meta: [
        {hid: 'description', name: 'description', content: this.meta.description},
        {hid: 'keywords', name: 'keywords', content: 'SHA_WALLET,wallet,cryptocurrency,exchange,sha_walet,web3,'},
        {hid: 'og:title', property: 'og:title', content: this.meta.title},
        {hid: 'og:description', property: 'og:description', content: this.meta.description},
        {hid: 'og:url', property: 'og:url', content: 'process.env.BASE_URL'},
        {hid: 'og:image', property: 'og:image', content: './logo.png'},
        {hid: 'twitter:title', property: 'twitter:title', content: this.meta.title},
      ],
    }
  },

  methods: {
    web3Handler() {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else {
        window.ethereum.enable()
      }

    },
    async getAccount() {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        .catch((err) => {
          if (err.code === 4001) {
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
      const account = accounts[0];
      this.account = account;
      document.cookie = `walletAddress=${this.account};expire=2024/12/01;path=/ `;
      console.log(this.$t('sidebar.home'),this,document.cookie,document,"document.cookie is here")

    }


  },
  created() {
    this.getAccount()
  }
}


</script>
<style lang="scss">
.sha-header {
  display: flex;
  justify-content: space-between;
  height: 12.5vh;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  img.img-logo {
    margin-left: 15px;
  }
}


</style>
// const myProvider = '';
// const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
// const web3 = new Web3(httpProvider);
// web3.setProvider(myProvider);
// web3.eth.setProvider(myProvider);
// web3.Contract.setProvider(myProvider);
// contractInstance.setProvider(myProvider);
// web3.provider.on('message', () => {
//     // ...
// })

// web3.provider.on('connect', () => {
//     // ...
// })

// web3.provider.on('disconnect', () => {
//     // ...
// })

// web3.provider.on('accountsChanged', () => {
//     // ...
// })

// web3.provider.on('chainChanged', () => {
//     // ...
// })

// // it is possible to catch errors that could happen in the underlying connection Socket with the `error` event
// // and it is also used to catch the error when max reconnection attempts exceeded
// //  as in section: /docs/guides/web3_providers_guide/#error-message
// web3.provider.on('error', () => {
//     // ...
// }

// // ...

// // for every event above `once` could be used to register to the event only once
// web3.provider.once('SUPPORTED_EVENT_NAME', () => {
//     // ...
// })

// // And to unregister a listener `removeListener` could be called
// web3.provider.removeListener('SUPPORTED_EVENT_NAME', () => {
//     // ...
// })

