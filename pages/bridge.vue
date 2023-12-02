<template>
  <div :id="$route.name">
    <div id="debridgeWidget"></div>
    <script src="https://app.debridge.finance/assets/scripts/widget.js"></script>
    <script>
      deBridge.widget({"v":"1","element":"debridgeWidget","title":"","description":"","width":"100vw","height":"100vh","r":null,"supportedChains":"{\"inputChains\":{\"1\":\"all\",\"10\":\"all\",\"56\":\"all\",\"137\":\"all\",\"8453\":\"all\",\"42161\":\"all\",\"43114\":\"all\",\"59144\":\"all\",\"7565164\":\"all\"},\"outputChains\":{\"1\":\"all\",\"10\":\"all\",\"56\":\"all\",\"137\":\"all\",\"8453\":\"all\",\"42161\":\"all\",\"43114\":\"all\",\"59144\":\"all\",\"7565164\":\"all\"}}","inputChain":1,"outputChain":1,"inputCurrency":"","outputCurrency":"","address":"","showSwapTransfer":true,"amount":"","outputAmount":"","isAmountFromNotModifiable":false,"isAmountToNotModifiable":false,"lang":"en","mode":"deswap","isEnableCalldata":false,"styles":"eyJib3JkZXJSYWRpdXMiOjgsImZvbnRGYW1pbHkiOiIifQ==","theme":"light","isHideLogo":false,"logo":""}) 
    </script>
  </div>
</template>

<script>

export default {}
</script>
<style lang="scss"></style>
