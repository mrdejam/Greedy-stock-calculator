
//                     _      _                 
//                    | |    (_)                
//   _ __ ___  _ __ __| | ___ _  __ _ _ __ ___  
//  | '_ ` _ \| '__/ _` |/ _ \ |/ _` | '_ ` _ \ 
//  | | | | | | | | (_| |  __/ | (_| | | | | | |
//  |_| |_| |_|_|  \__,_|\___| |\__,_|_| |_| |_|
//                          _/ |                
//                         |__/                 



function calculateProfit() {
  const pricesInput = document.getElementById('prices');
  const feeInput = document.getElementById('fee');
  const resultParagraph = document.getElementById('result');

  const pricesString = pricesInput.value;
  const fee = parseFloat(feeInput.value);

  const prices = pricesString.split(',').map((price) => parseInt(price.trim()));

  let hold = -prices[0];
  let cash = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, cash - prices[i]);
    cash = Math.max(cash, hold + prices[i] - fee);
  }

  resultParagraph.textContent = 'بالاترین سود: ' + cash;
}
