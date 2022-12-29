// We will set up a costructor function for my weatherData
"use strict";
function Weather(cityName, description){
    this.cityName = cityName;
    this.description = description;
    // For Fahrenheit. lets say we get data C. and there is no way to change it
    this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function(){
        return this._temperature;
    },
    set: function(value){
        this._temperature = value.toFixed(2)+ 'C.';
        //to change C to Fah; after value add (value * 1.8 +32).toFixed(2)+'F.'
    }
});