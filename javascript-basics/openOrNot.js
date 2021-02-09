const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday'
const openingTime = 18
const closingTime = 23

const openToday = currentDay !== dayOff && !christmasToday;
const openNow = currentTime >= openingTime && currentTime < closingTime;

console.log(`Restaurant open? ${ openToday && openNow}`);
console.log(`Restaurant closed? ${!openNow ||!openToday }`)