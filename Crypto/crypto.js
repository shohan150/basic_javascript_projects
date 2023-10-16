var bitcoin = document.getElementById('bit');
var ethereum = document.getElementById('eth');
var dogecoin = document.getElementById('doge');

var settings = {
   'async': true,
   'scrossDomain': true,
   'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd',
   'method': 'GET',
   'headers': {}
}

$.ajax(settings).done(function (responce) {
   // console.log(responce);
   bitcoin.innerHTML = responce.bitcoin.usd;
   ethereum.innerHTML = responce.ethereum.usd;
   dogecoin.innerHTML = responce.dogecoin.usd;
})