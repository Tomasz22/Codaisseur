const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands = cleanedFish || cutChicken || startingShift
const noNeedToWashHands = !cutChicken || !cutChicken || !startingShift

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)