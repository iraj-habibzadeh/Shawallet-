import {BToast} from 'bootstrap-vue'

export const state = () => ({
  price: null
})


export const actions = {
  async getPrice({commit}) {
    let self = this
    return self.$RegularSale.methods.price().call()
      .then((treeWeiPrice) => {
        let price = self.$web3.utils.fromWei(treeWeiPrice);
        commit('SET_PRICE', price)
        return price;
      });
  },
  async fundTree(context, params) {
    let self = this;

    let account = this.$cookies.get('account');

    this.$web3.currentProvider.enable();

    //ToDo: add recipeint and referrer
    const tx = this.$RegularSale.methods.fundTree(params.count, process.env.zeroAddress, process.env.zeroAddress);
    const data = tx.encodeABI();
    // const price = await this.$RegularSale.methods.price().call();


    try {
      const receipt = await this.$web3.eth.sendTransaction({
          from: account,
          to: this.$RegularSale._address,
          value: 0,
          data: data
        }).on('transactionHash', (transactionHash) => {
          let bootStrapToaster = new BToast();
          bootStrapToaster.$bvToast.toast(['Check progress on Etherscan'], {
            toaster: 'b-toaster-bottom-left',
            title: 'Processing transaction...',
            variant: 'warning',
            href: `${process.env.etherScanUrl}/tx/${transactionHash}`,
            bodyClass: 'fund-error',
            noAutoHide: true

          })
        })
        .on('error', (error) => {
          console.log(error, "errorr");
          const bootStrapToaster = new BToast();
          if (error.code === 32602) {
            bootStrapToaster.$bvToast.toast(['You don\'t have enough Ether (ETH)'], {
              toaster: 'b-toaster-bottom-left',
              title: 'Transaction failed',
              variant: 'danger',
              to: '/forest/addTree',
              noAutoHide: true,
              bodyClass: 'fund-error'
            })
          } else {
            bootStrapToaster.$bvToast.toast([error.message], {
              toaster: 'b-toaster-bottom-left',
              title: 'Transaction failed',
              variant: 'danger',
              to: '/forest/addTree',
              noAutoHide: true,
              bodyClass: 'fund-error'
            })
          }


          return null

        })

      return receipt

    } catch (error) {
      console.log(error, "errorr");

      return null;
    }

  }

}

export const mutations = {
  SET_PRICE(state, price) {
    state.price = price
  }
}