const chef = {
    name: '',
    chefName: '..?',
    age: '..?',
    contactDetails: {
      address: '..?',
    },
    favoriteFood: '..?'
  }
  
  chef.name = 'Yourname'
  // Now (re)assign the rest of the properties!
  chef.chefName = "Hubert Nakamura"
  chef.age = 99
  chef.contactDetails.address = 'Ferdinand Bolstraat 333'
  chef.favoriteFood = `pizza`
  console.log(chef) 

  //not sure tho why it does not work with [] notation and with . notation does..
  //CAUTION in [] must use '' or ""


  ///test


console.log(chef.age) 
console.log(chef['age']) 

  