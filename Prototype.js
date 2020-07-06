// Objects have special hidden property [[Prototype]]

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

console.log(rabbit.jumps, rabbit.eats);
rabbit.__proto__ = animal;
console.log(rabbit.jumps, rabbit.eats);

// Animal "is a" prototype of Rabbit
// Rabbit prototypically "inherits" from Animal

// ------------------------------------------------------------------------

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);      // John Smith
admin.fullName = "Alice Cooper";  // setter triggers!
console.log(admin.fullName);      // Alice Cooper

// ------------------------------------------------------------------------

animal = {
    eats: true
};

rabbit = {
    jumps: true,
    __proto__: animal
};
  
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}

// ------------------------------------------------------------------------

// Best way to set prototype
animal = {
    eats: true
};
  
rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
});
  
console.log(rabbit.jumps);
console.log(Object.getPrototypeOf(rabbit));
Object.setPrototypeOf(rabbit, {});
console.log(Object.getPrototypeOf(rabbit));
