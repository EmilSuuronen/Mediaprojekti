'use strict'


fetch('https://thecocktaildb.com/api/json/v1/1/random.php').then(function (result) {
  return result.json();
  console.log(result);
}).then(function (drinks) {
  displayCocktail(drinks);
}).catch(function (error) {
  console.log(error);
});

function displayCocktail(drinks){

  console.log(drinks);
  const drinkName = drinks.drinks[0].strDrink;
  console.log(drinkName);

  const main = document.querySelector('main');

  const drinkOTD = document.getElementById('drinkOTD')
  main.appendChild(drinkOTD);

  const cocktailName = document.createElement('H2');
  cocktailName.textContent = drinks.drinks[0].strDrink;
  drinkOTD.appendChild(cocktailName);

  const drinkImg = document.createElement('img');
  drinkImg.src = drinks.drinks[0].strDrinkThumb;
  drinkImg.className = "drinkOTDImg";
  console.log(drinks.drinks[0].strDrinkThumb);
  drinkImg.alt = drinks.drinks[0].strDrink;
  drinkOTD.appendChild(drinkImg);

}
