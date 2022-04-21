'use strict';

const lomake = document.querySelector('form');

lomake.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const search = document.querySelector('input[name=searchBox]').value;

  fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s="' + search).then(function (result) {
    return result.json();
  }).then(function (series) {
    showSeries(series);
  }).catch(function (error) {
    console.log(error);
  });
});
