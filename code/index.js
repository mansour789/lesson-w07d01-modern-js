// my. js. code
// console.log('test');

// const sayhello = () => {
//     console.log('erro functions');
// }

// const sayhelloo = () => console.log('hello world');

// sayhello();
// sayhelloo();

// const greetWorld = (greeting) => console.log(`${greeting} World`);

// greetWorld("hello");

// const greetWorld = greeting => console.log(`${greeting} World`);

// const greetWorld = greeting => `${greeting} World`;

// const result = greetWorld("hi");

// console.log(result);

// const add = (x,y) =>  x + y;
// console.log(add(5,10));


// function addFive(num) {
//     return 5 + num;
//   }

//   const addFive = num => 5 + num;
  
// //   function divide(num1, num2) {
// //     return num1 / num2;
// //   }
//   const divide = (num1, num2) => num1 / num2;
  
// //   function whoIsTheBestIA() {
// //     let iaName = 'Alanoud';
// //     console.log(iaName);
// //   }
//   const whoIsTheBestIA = () => {
//       let isName = 'Alanoud';
//       console.log(isName);
//   }

//   const fullName = (first, last) => first + last;


//   function sayHello(name = "World") {
//     console.log("Hello " + name);
//   }
  
// const sayHellow = (name = "world") => console.log("hello " + name);

//   sayHellow("mansour");


// console.log(fullName("ali ", "mohammed"));
//   console.log(addFive(5));
//   console.log(divide(12,3));
//   whoIsTheBestIA();


// const instructors = ['Marc', 'Alanoud', 'Usman'];

// for (let i = 0 ; i < instructors.length; i++){
//     console.log(instructors[i]);
// }

// instructors.forEach((element, i) => {
//       console.log(element, i);
    
// })
// instructors.forEach((element, i) => console.log(element, i));

// const instructors = ['Marc', 'Alanoud', 'Usman'];
// const instructorsCopy = [];

// // instructors.forEach(element => {
// //     instructorsCopy.push(element);
// // });
// instructors.forEach(element => instructorsCopy.push(element));
// console.log(instructorsCopy);

// const friends = ["Mansour", "Munira", "Ahmed"];

// friends.forEach(element => console.log(`Hi ${element}`));


// Thats an array with crazy numbers we cant read 😯
// const nums = [1, 2, 3, 5, 5];
// let total = 0;

// nums.forEach(num =>  total += num);
// console.log(total);

// Sum all the numbers in nums and save the result in total

// These crazy numbers now are strings 😯 😯  !!  
// const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
// let totalNumbersUnder4000 = 0;

// stringNumbers.forEach(element =>  parseInt(element) < 4000 ? totalNumbersUnder4000 += parseInt(element) : 0);
// console.log(totalNumbersUnder4000);

// Convert numbers from strings to numbers and 
// sum all numbers under 4000 and store them 
// in totalNumbersUnder4000
//
// Write your solution here

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let times100 = [];

// times100 = nums.map((val) => {
//    return val * 100
// });
// console.log(times100);

// const iAS = ['alanoud', 'khalid', 'shaima', 'hakami'];
// let capitalizedIAs = iAS.map(val => val.toUpperCase());
// console.log(capitalizedIAs);

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



// let dayAbbreviations = days.map((val) =>  val.substring(0,3));
// console.log(dayAbbreviations);


// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// let century20 =  years.filter(val =>  val <= 2000 ? val: 0 );
// console.log(century20);


// const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// resultt = numss.filter(val => val %3 == 0 ? val : 0)
// console.log(resultt);

// const frind = ["mohammed", "lulu", "hossam"];
// result = frind.filter( val => val.includes("h"));
// console.log(result);


// const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let sum;
// console.log(nums);
// sum = nums.reduce((acc ,  val ) =>{
//     console.log(`acc  ${acc}`);
    
//     console.log(`val  ${val}`);
//      return acc + val;
// }); 
    
// console.log(sum);


// // Thats an array with crazy numbers we cant read 😯
// const numsss = [103440, 3799.2663, 3.14159265359, 859494, 59439];
// let totaaal = numsss.reduce((acc, val) => acc+val );
// console.log(totaaal);


// const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
// let totalNumbersUnder4000 = 0;

// totalNumbersUnder4000 = stringNumbers.reduce((acc, val) =>  Number(val) < 4000 ? acc + Number(val) : acc,0);
    

// console.log(totalNumbersUnder4000);


// discountProducts
// const products = [
//     {name: 'flower vase', price: 75},
//     {name: 'lamp', price: 85},
//     {name: 'jar of honey', price: 95},
//     {name: 'coil', price: 65},
//     {name: 'lumber', price: 55}
//   ];
  
//   discountProducts = products.map(val => `The new price for ${val.name} is  ${val.price * 0.5}`);
//   cheapProducts = products.filter(val => val.price <= 70 ? val.price : 0); 
//   totalPrice = products.reduce((acc, val) => acc + val.price, 0);
//   console.log(totalPrice);
//   console.log(discountProducts);
//   console.log(products);
//   console.log(cheapProducts);

const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826, 209, 419, 309, 48, 738, 709,728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330, 736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5, 13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6, 10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]


console.log(smallNums.every(val => val >= 0 ? true : false));
console.log(nums.every(val => val >= 0 ? true : false));
console.log(panagram.every(val => val.length < 8 ? true : false));
console.log(panagrams.every(val => val.length < 8 ? true : false));

console.log(smallNums.filter(val => val < 100 ? true : false));
console.log(nums.filter(val => val < 100 ? true : false));
console.log(panagram.filter(val => val.length % 2 == 0 ? true : false));
console.log(panagrams.filter(val => val.length % 2 == 0 ? true : false));

console.log(smallNums.find(val => val%5 == 0 ? true : false));
console.log(nums.find(val => val%5 == 0 ? true : false));
console.log(panagram.find(val => val.length > 6 ? true : false));
console.log(panagrams.find(val => val.length > 6 ? true : false));

console.log( smallNums.findIndex(val => {
    if (val % 3 == 0){
        return true;
    }
}));
console.log(nums.findIndex(val => val % 3 == 0 ? true : false));

 nums.forEach(elemnt => console.log(elemnt * 3));

panagrams.forEach(element => element.includes('!') ? console.log( element) : false);
newMap = smallNums.map(val => val * 100);
console.log(newMap);

newUpCase = panagram.map(val => val.toUpperCase());
console.log(newUpCase);

console.log(smallNums.reduce((acc, curr) => acc + curr));
console.log(panagram.reduce((acc,curr) => `${acc + curr} `,  ``));

console.log(smallNums.some(val => val % 7 === 0 ));

console.log(panagram.some(val => val.includes("a")));

console.log(smallNums.sort((a,b) => b - a));

console.log(panagram.sort().reverse());


console.log(panagram.filter(val => val.match(/[aeuio]/gi).length >= 2 ? true : false));


