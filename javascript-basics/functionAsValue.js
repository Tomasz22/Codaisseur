 
 //example#1
 function add(a, b) {
    return a + b;
  }

  const addTwoNumbers = add;
  
  console.log(addTwoNumbers(1, 2)) // will return 3
//example#2
  const multiply = function(a, b) {
    return a * b
  }
  
  console.log(multiply(2, 3))

  //own example
function percetageCal (param1, param2){
    return (param1/param2) * 100;
}


console.log(`${parseFloat(percetageCal(15, 70)).toFixed(0)}%`)

// FUNCTIONS IN OBJECTS

function whatAreYouDoing() {
    console.log('I am cooking')
  }
  
  const chef = {
    name: 'Rein',
    chefName: 'Jeremiah Bocuse',
    age: 30,
    cook: whatAreYouDoing
  }
  
  chef.cook() // I am cooking


  //IF A FUMCTION IS PART OF AN OBJECT, WE CALL IT A METHOD


  //DIY 

  const chef2 = {
    name: 'Tomasz',
    chefName: 'Jeremiah Bocuse',
    age: 30,
    cook: function() {
      console.log('I am cooking')
    },
    speak:()=>console.log(`Hello, how are you?`)
  }
  chef2.speak();

  
  
  // same as before, but written differently