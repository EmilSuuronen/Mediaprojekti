'use strict'

getData();

const randomDrinkBtn = document.getElementById("newDrink");

randomDrinkBtn.addEventListener("click", getData);

function getData() {

  fetch('https://thecocktaildb.com/api/json/v1/1/random.php').then(function (result) {
    return result.json();
    console.log(result);
  }).then(function (drinks) {
    displayCocktail(drinks);
  }).catch(function (error) {
    console.log(error);
  });

  function displayCocktail(drinks) {

    console.log(drinks);
    const drinkName = drinks.drinks[0].strDrink;
    console.log(drinkName);

    const cocktailName = document.getElementById('cocktailname')
    cocktailName.textContent = drinks.drinks[0].strDrink;

    const drinkImg = document.getElementById('cocktailimage')
    drinkImg.src = drinks.drinks[0].strDrinkThumb;

    console.log(drinks.drinks[0].strDrinkThumb);
    drinkImg.alt = drinks.drinks[0].strDrink;


  }
}
