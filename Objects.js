let user = {
    name:   "lowell",
    age:    29
};                              console.log(user);
delete user.age;                console.log(user);
user.age = 29;                  console.log(user);
user["Like Foods"] = true;      console.log(user);

let t = "Play Games";
user = {
    ...user,                    // copy all key-value pairs previous obj
    [t]: true                   // computed properties
};                              console.log(user);

console.log("age" in user);
console.log("Like Drinks" in user);
for (let key in user) {
    console.log(key, "=", user[key]);
}

// Two objects are equal iff they are same obj
// mark-and-sweep garbage collectors
// being referenced not always being reachable
// garbage collectors will remove unreachable

user.sayHi = function() {
    console.log(`Hi from ${this.name} !`);
};
user.sayHi();

// FUNCTION CONSTRUCTOR, using 'new' keyword
function User(name, age) {
    this.name = name;
    this.age = age;
}
let user1 = new User("user1", 20);
let user2 = new User("user2", 21);
console.log(user1, user2);


let id = Symbol("id");
let obj1 = {
    [id]: 1
};
console.log(obj1);
for (let key in obj1) {
    console.log(key, "=", obj1[key]);
}
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log(sym, sym2, Symbol.keyFor(sym), Symbol.keyFor(sym2));

user = {
    ...user,
    [Symbol.toPrimitive](hint) {
        return hint === "string" ? this.name : (hint == "number" ? this.age : "~");
    }
    // toString() --> for string conversion
    // valueOf -----> for number conversion
}
console.log(String(user), Number(user), "1"+user);