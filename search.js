const queryinput = document.getElementById('cocktailinput');
const main = document.getElementById('rmain');
const button = document.getElementById('search');

queryinput.addEventListener('keypress', function(key){
  if(key.key === "Enter"){
    haku();
  }
})
button.addEventListener('click', haku);

function haku(){
  main.innerHTML = '';
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+queryinput.value)
  .then(function(vastaus){
    return vastaus.json();
  }).then(function(json) {
    showinfo(json);
    console.log(json);
  }).catch(function(error){
    console.log(error);
  })
}
function showinfo(info){
  const drink = info.drinks[0];
  console.log(info.drinks[0]);
  const container = document.createElement('div');
  container.id = 'rcontainer';
  const title = document.createElement('h2');
  title.id = 'rtitle';
  const img = document.createElement('img');
  img.id = 'rimg';
  title.textContent = drink.strDrink;
  img.src = drink.strDrinkThumb;
  const ul = document.createElement('ul');
  ul.id = 'rul';
  for(let i = 1; i <= 15; i++){
    const tmpingredient = 'drink.strIngredient' + i.toString();
    const tmpmeasure = 'drink.strMeasure' + i.toString();
    const ingredient = eval(tmpingredient);
    const measure = eval(tmpmeasure);
    if(ingredient != null){
      const li = document.createElement('li');
      li.className = 'rli';
      if(measure != null){
        li.textContent = ingredient + ' ' + measure;
      }else {
        li.textContent = ingredient;
      }
      ul.appendChild(li);
    }
  }
  const instructions = document.createElement('p');
  instructions.id = 'rinstructions';
  instructions.textContent = drink.strInstructions;

  container.append(title,img,ul,instructions);
  main.appendChild(container);

}