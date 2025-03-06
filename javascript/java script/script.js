function outerfunction(){
    let counter=0
    function innerfunction(){
        counter++;
        return counter;
    }
    return innerfunction;
}
const incrementcounter=outerfunction();
console.log(incrementcounter());
console.log(incrementcounter());
/ prototype/ 
let car={
    year: 2024,
    color(){
        console.log("the color is blue");
    }
}
let brand={
    model:"bmw"
}
brand.__proto__=car;
console.log(brand.year);
console.log(brand.color());
/*has ownproperty*/ 
let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // for..in includes inherited properties
  for (let prop in rabbit) {
    console.log(prop);  // "jumps", "eats"
  }
  
  // Check for own property
  for (let prop in rabbit) {
    if (rabbit.hasOwnProperty(prop)) {
      console.log(`Own: ${prop}`);  // "Own: jumps"
    } else {
      console.log(`Inherited: ${prop}`);  // "Inherited: eats"
    }
  }
  

/*methodoverridng*/ 
let cat = {
    walk() {
      console.log("Animal walk");
    }
  };
  let rat = {
    __proto__: cat
  };
  rat.walk = function() {
    console.log("rat hops");
  };
  
  rat.walk(); 
  cat.walk(); 
  
/* call method*/ 
var employee1 = { firstName: "shirisha", lastName: "nune" };
var employee2 = { firstName: "nune", lastName: "shirisha" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?");  
invite.call(employee2, "Hello", "How are you?");  
/*apply method*/ 
var employee1 = { firstName: "shirisha", lastName: "nune" };
var employee2 = { firstName: "nune", lastName: "shirisha" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]);  
invite.apply(employee2, ["Hello", "How are you?"]);  
/*bind method*/ 
var employee1 = { firstName: "shirisha", lastName: "nune" };
var employee2 = { firstName: "nune", lastName: "shirisha" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); 
inviteEmployee2("Hello", "How are you?"); 

