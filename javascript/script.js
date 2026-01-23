
//console.log("Hell0 World!");
//var a=5;
//var a=10;
//console.log(a);


//let b=20;
//console.log(b)

//const c=30;
//const d=40
//console.log(c);

//var e=10; //number
//var str="navya"; // "" // '' // string
//var bool=true; //boolean
//var und=undefined; //var un; //(undefined)
//var nu=null; //null
//var big=123456678901234567890n; //bigint
//var sym=Symbol("li");
//console.log(sym);


// Arithmetic Operators

// var a=10;
// var b="20";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //Relational Operators

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b); 
// //a=10;
// //b="10"; //for this case the output will be below comments
// console.log(a==b); //true
// console.log(a!=b); //false
// console.log(a===b); //false
// console.log(a!==b); //true 

// //Logical Operators
// a=true;
// b=false;
// console.log(a && b); //false
// console.log(a || b); //true
// console.log(!a); //false
// console.log(!b); //true

// //Arrays and Objects

// var arr=[10,20,30,40,50];
// console.log(arr);
// console.log(typeof arr);

// var obj={name:"navya", age:20, city:"New York"};
// console.log(typeof obj);

// Looping Statements

// for loop syntax (example only)
// for (initialization; condition; increment/decrement) {
//     statement
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // while loop
// let j = 0;
// while (j <= 10) {
//     console.log(j);
//     j++;
// }

// // do while loop
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k <= 10);

// Conditional Statements
//TO FIND EVEN NUMBERS (1ST Program)
// for (let i=1;i<=10;i++){
//     if(i%2==0) console.log(i);
// }
// i=9;
// if (i%2==0) console.log("even");
// else console.log("odd");

// //to find marks
//  let mark=90;
//  if (mark>=90) console.log("O Grade");
//  else if (mark>=80) console.log("A Grade");
//  else if (mark>=70) console.log("B Grade");
//  else if (mark>=60) console.log("C Grade");
//  else console.log("Fail");

// //switch case
// let day=7;
// switch(day){
//     case 1: {console.log("Monday");
//         break;
//     }
//     case 2: {console.log("Tuesday");
//         break;
//     }
//     case 3: {console.log("Wednesday");
//         break;
//     }
//     case 4: {console.log("Thursday");
//         break;
//     }
//     case 5: {console.log("Friday");
//         break;
//     }
//     case 6: {console.log("Saturday");
//         break;
//     }
//     case 7: {console.log("Sunday");
//         break;
//     }
//     default: {console.log("Invalid Day");
//         break;
//     }
// }

// //ternary operator
// i=8;
// let result=(i%2==0)?"Even":"Odd";
// console.log(result);
// let mark=90;

// // declare mark1 first
// let mark1 = 80;

// // for grade using if-else
// if (mark1 >= 90) console.log("O Grade");
// else if (mark1 >= 80) console.log("A Grade");
// else if (mark1 >= 70) console.log("B Grade");
// else if (mark1 >= 60) console.log("C Grade");
// else console.log("Fail");
// // using ternary operator (Even / Odd)
// let result1 = (mark1 % 2 === 0) ? "Even" : "Odd";
// console.log(result1);

//functions
function add(){
    console.log(10+20);
}
add();
add = ()=>{
    console.log(10+20);
}
add();

//Arrow Function
var add = ()=>{
        console.log(10+20); 
    }

//spread operator
var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[...arr1,...arr2];
console.log(arr2);

//Destructuring operator
var [m1,m2,m3,m4,m5]=[89,90,99,96,87]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
var {name,age,Dep,marks}={ 
    name:"navya",
    age:20,
    Dep:"CSD"
}
console.log(name);
console.log(age);
console.log(Dep);