let coin = document.querySelector('.accumulated-coins')
let parsedCoin = parseFloat(coin.innerHTML)

let gamblingCost = document.querySelector('.gamble-cost')
let parsedGamblingCost = parseFloat(gamblingCost.innerHTML)

//Currency System

function incrementCoin() {
  parsedCoin += 1
  coin.innerHTML = parsedCoin
}

//Gacha System

function drawGacha() {
  if (parsedCoin >= parsedGamblingCost) {
    parsedCoin -= parsedGamblingCost
    coin.innerHTML = parsedCoin
    drawPull()
  }
}

function drawPull() {
  const pool = [...gachapool]; // Copy to avoid mutation
  const totalchance = pool.reduce((acc, item) => acc + item.chance, 0);
  const rand = Math.random() * totalchance;
  let accumulated = 0;

  for (const item of pool) {
    accumulated += item.chance;
    if (rand <= accumulated) {
      showResult(item);
      return;
    }
  }
}

function showResult(item) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <p>You got: <strong>${item.name}</strong> (${item.rarity})</p>
      <img src="Assets/${item.image}" alt="${item.name}"">
    `;
}
