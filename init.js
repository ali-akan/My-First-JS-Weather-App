"use strict";

let searchButton = document.querySelector('button'); //for, get Show weather button since only one button select only 
let searchCity = document.querySelector('#city'); //for, city the user entered

let loadingText = document.querySelector('#load');
let weatherBox = document.querySelector('#weather');

let weathercity = weatherBox.firstElementChild; // it should get me my weatherCity id
let weatherDescription = document.querySelector('#weatherrDescription');
let weatherTemperature = weatherBox.lastElementChild;


// try weatherTemperature query style
//let weatherTemperature = document.querySelector('#weatherTemperature');