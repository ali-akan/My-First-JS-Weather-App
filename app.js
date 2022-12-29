"use strict";

searchButton.addEventListener('click', searchWeather);// we can acces searchButton becouse its avaliable since it's coming after init.js in html
//searchWeather is not defined but we know that it will be avaliable since we set this up in init.js.

function searchWeather(){
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    let cityName = searchCity.value; //entered city value. we also want to reach out the web
    if (cityName.trim().length === 0){
        return alert('Please Enter a City Name!');
    }
    let http = new XMLHttpRequest();
    let apiKey = '11b5771188717e8e4a6ff44ac83af34c';// this apiKey is from openweather
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +cityName + '&units=metric&appid=' + apiKey;

    //let url ='http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units-metric%appid='+apiKey; //url that we want to acces. cityname we extracted from our input
    let method = 'GET'; //It will be a GET request because  we want to get data
    
    
    http.open(method, url)//we can open the connection, and pass the method and url to http request
    http.onreadystatechange = function()  { // onreadystatechange  do if http request in here
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200){
        let data = JSON.parse(http.responseText);  // JSON.parse  provides  string to js object because receving data from a webserver, data is always string 
        let weatherData = new Weather (cityName, data.weather[0].description.toUpperCase()); // this uses this constructor of weather-data.js thats why in html importing order is important we need to import weather-data.js before app.js
        //with that we are creating the weatherData but we also need to set the tempretature
        weatherData.temperature = data.main.temp; //temperatur field is from prototype
        updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE){
        alert('Something went wrong :/ ') //bad case
    }
    };  
    http.send();

}

function updateWeather(weatherData){
    weathercity.textContent = weatherData.cityName;   
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';



}

