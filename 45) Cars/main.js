"use strict";
function carInfo(manufacturer, modelName, ...extras) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extras));
    return carInfo;
}
const favoriteCar = carInfo('bugati', 'bugati chiron', { color: 'purple' }, { topSpeed: "1000mph" });
const favoriteCar2 = carInfo('Honda', 'Land cruser', { color: 'white' }, { topSpeed: "300mph" });
const favoriteCar3 = carInfo('Toyota', 'Rivo', { color: 'black' }, { topSpeed: "400mph" });
console.log(favoriteCar);
console.log(favoriteCar2);
console.log(favoriteCar3);
