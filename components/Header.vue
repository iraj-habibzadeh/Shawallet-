<template>
    <div class="sha-header  p-3">

        <div class="logo">
            <NuxtLink to="/">
                <img src="../static/rainbow.svg" class="pointer-event img-logo" width="50" alt="logo">
            </NuxtLink>
        </div>
        <div class="connect">
            <button v-if="!account" class="btn-gray tr-gray-nine" @click.prevent="getAccount()">Connect Wallet</button>
            <button v-if="account" class="btn-gray tr-gray-nine" @click.prevent="logOut()">LogOut</button>

            <p class="param-sm tr-gray">Wallet: {{ account }}</p>
        </div>
        <div class="lang">
            <Lang />
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
            account: null,

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
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log('Please connect to MetaMask.');
                    } else {
                        console.error(err);
                    }
                });
            const account = accounts[0];
            this.account = account;
        },






       async logOut() {

            await web3.currentProvider.disconnect()
        },




    },
    created() {
        this.getAccount()
    },
}
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


</script>
<style lang="scss">
.sha-header {

    display: flex;
    justify-content: space-between;

    img.img-logo {
        margin-left: 15px;
    }
}
</style>