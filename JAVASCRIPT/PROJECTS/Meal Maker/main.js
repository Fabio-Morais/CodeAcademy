const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[]
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
    	appetizers:this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name:dishName,
      price:dishPrice,
    };
    return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes= this._courses[courseName];
   const random= Math.floor(Math.random()*dishes.length);
    return dishes[random];
  },
  generateRandomMeal(){
   let appetizer = this.getRandomDishFromCourse('appetizers');
   let mains = this.getRandomDishFromCourse('mains');
	 let desserts = this.getRandomDishFromCourse('desserts');
   const totalPrice= appetizer.price + mains.price + desserts.price;
    return `your meals is ${appetizer.name}, ${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`

  }  
}

  menu.addDishToCourse('appetizers', 'salad', 4)
  menu.addDishToCourse('appetizers', 'wing', 4.5)
  menu.addDishToCourse('appetizers', 'fries', 5)


  menu.addDishToCourse('mains', 'steak', 10)
  menu.addDishToCourse('mains', 'salmon', 7.75)
  menu.addDishToCourse('mains', 'tofu', 11)


  menu.addDishToCourse('desserts', 'ice cream', 10)
  menu.addDishToCourse('desserts', 'coffe', 2)
  menu.addDishToCourse('desserts', 'cake', 21)

const meal= menu.generateRandomMeal();
console.log(meal)