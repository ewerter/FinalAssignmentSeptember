var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
img1.src='applications.png';
img2.src='benefits.png';
img3.src='cryptocurrency.png';

var result = document.getElementById("currency");
var element = document.getElementById("search");
var radcurrency = document.getElementsByName("crypto");

element.onclick = activatesearch = (event) => {
  event.preventDefault();
  var currencyid = '';
  var currencyrank = '';
  var currencyusd='';
  if(radcurrency[0].checked==false && radcurrency[1].checked==false && radcurrency[2].checked == false){
    alert("Please check one cryptocurrency.")
  } else{
  if(radcurrency[0].checked){
        var url = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/'
    
        axios.get(url)
          .then(function(response){
          console.log(response.data); // ex.: 200
          currencyid = response.data[0].symbol;
          currencyrank = response.data[0].rank;
          currencyusd = response.data[0].price_usd;
          result.innerHTML = `Currency symbol: ${currencyid}<br>
          Currency rank: ${currencyrank}<br>
          Currency in USD: ${currencyusd}`
          });
      
  } else if(radcurrency[1].checked){
          var url = 'https://api.coinmarketcap.com/v1/ticker/ethereum/'
    
          axios.get(url)
            .then(function(response){
            console.log(response.data); // ex.: 200
            currencyid = response.data[0].symbol;
            currencyrank = response.data[0].rank;
            currencyusd = response.data[0].price_usd;
            result.innerHTML = `Currency symbol: ${currencyid}<br>
            Currency rank: ${currencyrank}<br>
            Currency in USD: ${currencyusd}`
            });
  }else{
          var url = 'https://api.coinmarketcap.com/v1/ticker/ripple/'
    
          axios.get(url)
          .then(function(response){
          console.log(response.data); // ex.: 200
          currencyid = response.data[0].symbol;
          currencyrank = response.data[0].rank;
          currencyusd = response.data[0].price_usd;
          result.innerHTML = `Currency symbol: ${currencyid}<br>
          Currency rank: ${currencyrank}<br>
          Currency in USD: ${currencyusd}`


        });
      }
    }
  }        
    
   
        

    

        

    


