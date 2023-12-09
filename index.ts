//task 3
//scenario:1

let asianCountries=["Turkey","Japan","Korea","China","India"];
asianCountries.push("Nepal");
console.log("list after push");
asianCountries.pop();
console.log("list after pop");
asianCountries.shift();
asianCountries.unshift("Qatar");
console.log(asianCountries);

//scenario:2
let newarray = asianCountries.slice(1,4);
console.log(newarray);
asianCountries.splice(2,0,"Philippines","Vietnam");
console.log(asianCountries);


//task2
//scenario:1
let addition =(number1:number,number2:number)=>number1+number2;
console.log("Addition function");
console.log(addition(4,6));

//scenario:2
let evenOdd =(number:number)=>number % 2 === 0?'even':'odd';
console.log('result');
console.log(evenOdd(5));

//scenario:3
let area =(number1:number,number2:number)=>number1*number2
console.log('area of rectangle');
console.log(area(16,8));

//scenario:4
let reverseString=(string:string)=>string.split('').reverse().join('');
console.log('reverseString');
console.log(reverseString('Acceptance is peace'));

//scenario:5
let CelsiusToFahrenheit=(celsius:number)=>(celsius * 9/5) + 32;
console.log(`${CelsiusToFahrenheit(54)}F`);