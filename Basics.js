"use strict"; // e.g. cannot use undeclared var

// ----------- VARIABLES ----------- 
let message = "Hello";
const BIRTHDAY = "13.03.1937";

// ----------- DATA TYPES ----------- 
// NUMBER
let n1 = 12;
let n2 = 12E+10;
let n3 = 3.14;
let n4 = 1/0;    // safe operation
let n5 = "A"/12; // Nan is sticky, safe
let n6 = 21n;    // BigInt
console.log(n1, n2, n3, n4, n5, n6);
console.log(typeof n1, typeof n2, typeof n3, typeof n4, typeof n5, typeof n6);
// STRING
let s1 = "Hello";
let s2 = 'Hello too';
let s3 = `Also same as ${s1} and ${s2}`; // backticks
console.log(s1, s2, s3)
// BOOLEAN
let b1 = true;
let b2 = false;
// OTHER
let o1 = null;      // refer to non exist objects
let o2 = undefined; // value is not assigned

// ----------- TYPE CONVERSION ----------- 
let tc1 = "12" / "4";
let tc2 = String(12);
let tc3 = Number("12");
let tc4 = Number(null);
let tc5 = Number(undefined);
let tc6 = "12" + "4";
let tc7 = "12" - "4";
console.log(typeof tc1, typeof tc2, typeof tc3);
console.log(tc1, tc2, tc3, tc4, tc5, tc6, tc7);
// null, undefined, NaN -> false
// otherwise -> true

// ----------- OPERATORS ----------- 
let op1 = -((-1+8*3/4)**(3)) % 6;
let op2, op3, op4;
op2 = op3 = op4 = op1;
let bt1 = (((1 & 2 | 3 ^ 4 & ~8) << 1) >> 2) >>> 3;
console.log(op1, op2, op3, op4);
console.log(bt1);

// ----------- COMPARISONS ----------- 
let cmp1 = (1 > 2) || (2 >= 3) && (3 < 4) && (4 <= 4) || (5 == 5) && (5 === 5)
let cmp2 = "Bee" > "Be";
console.log(cmp1, cmp2);

// ----------- LOGICAL & CONDITIONS ----------- 
if ("1" == "2") {
    console.log("Strange 1");
} else if ("1" == "3") {
    console.log("Strange 2");
} else {
    console.log("Normal");
}
let cd1 = ("1" == "2") ? "Strange 1" : (("1" == "3") ? "Strange 2" : "Normal");
console.log(cd1);
let cd2 = 1;
switch (cd2) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("NaN");
} // if there is no break, continue until default without any check
  // can also group cases
  // type matters

// ----------- LOOPS ----------- 
let out = "", i = 0;
// FOR
for (let i=0; i<10; i++) {
    out += (`${i} `);
}
for (let elem of [1, 2, 3]) {
    console.log(elem);
}
for (let idx in [1, 2, 3]) {
    console.log(idx);
}
console.log(out);
// WHILE
out = "";
i = 0;
while (i < 10) {
    out += (`${i} `);
    i++;
}
console.log(out);
// DO WHILE
out = "";
i = 0;
do {
    out += (`${i} `);
    i++;
} while (i < 10);
console.log(out);
// break and continue keywords


// ----------- FUNCTION ----------- 
// Function Declaration
function func1(x, y, z=0, ...args) {
    let t = x+y+z;
    for (let i in args) {
        t += args[i];
    }
    return t;
}
// Function Expression
let func2 = function(x, y, z=0, ...args) {
    let t = x+y+z;
    for (let i in args) {
        t += args[i];
    }
    return t;
}
// Arrow function
let func3 = (x, y, z=0, ...args) => {
    let t = x+y+z;
    for (let i in args) {
        t += args[i];
    }
    return t;
}
// javascript first see all declared function then run the code
console.log(func1(1, 3, -1, 10, 20), func2(1, 3, -1, 10, 20), func3(1, 3, -1, 10, 20));
