<template>
  <div :id="$route.name">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          WalletAddress:
          <p v-coin>{{$cookies.get('account')}}</p>
        

        </div>
        <div class="col-12">
          <select v-model="selectedCoin" name="selectedCoin" id="selectedCoin" place-holder="Select Your Choice Coin.">
            <option v-for="(item,index) in coins" :key="index" x-arrow="<<" icon="" id="item">{{ item }}</option>
            </select>
            <p class="param tr-gray-three">{{ selectedCoin }}</p>
            <button class="btn-green" @click.prevent="alert('hi')">Generate USSD Code</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      coins: [
        {
          name: 'eth'
        },
        {
          name: 'btc'
        }
      ],
      selectedCoin: null

    }
  },
  
}
</script>
<style lang="scss"></style>
