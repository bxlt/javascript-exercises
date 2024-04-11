function round(num){
  return Math.round(num*10)/10
}

const convertToCelsius = function(tempK) {
  return round((tempK-32)/1.8)
};

const convertToFahrenheit = function(tempC) {

  return round(tempC*1.8+32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
