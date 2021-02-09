const name1 = 'Philippe'
const age = 19

const drinkingAgeAmerica = 21
const drinkingAgeBarbados = 16
const drinkingAgeNetherlands = 18

console.log(`${name1} can drink in America: ${ age >= drinkingAgeAmerica }`)
console.log(`${name1} can NOT drink in America: ${ age < drinkingAgeAmerica }`)
console.log(`${name1} can drink in Barbados: ${ age >= drinkingAgeBarbados }`)
console.log(`${name1} could drink last year in the Netherlands: ${ age -1  >= drinkingAgeNetherlands }`)