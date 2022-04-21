'use strict';

const lomake = document.querySelector('form');

lomake.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const search = document.querySelector('input[name=searchBox]').value;

  fetch('https://api.tvmaze.com/search/shows?q=' + search).then(function (result) {
    return result.json();
  }).then(function (series) {
    showSeries(series);
  }).catch(function (error) {
    console.log(error);
  });
});
