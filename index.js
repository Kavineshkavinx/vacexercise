//console
/*console.log("heloo...");
let name ="kavinesssa";
let age = 20;
let completedCollege = false;
let arr =["name","age","college"];
let person ={
    name: "kavinesaaaa",
    age: 20,
};
let salary = null;
const height =156.3;
console.log (typeof completedCollege);
console.log(arr);

alert('Nandriiii vanakooo');
//console.log(prompt("Edachiii sollu vro"));

let value = parseInt(prompt("Enter.. a value"));
let value2 = parseInt(prompt("Enter...a value"));
var add = value + value2;
alert(`the output is ${add}`);
alert ('Output.....processed');
//console.log(add); 
let name ="kavinesaaa";
const myname = prompt("Enter your..Name");
alert(`Hiiii${name}Welcome to My Page...add.!`);

const person ={
    name:'kavinesh',
    age:20,
    clg:'Dr.N.G.P',
    experience:'N/A',
}
console.log(person)

const person2 = person;
person2.age = 23 ;
console.log(person2)

//array
const sampleArr =["abc","def","ghi","jkl"];
console.log(sampleArr)
console.log(sampleArr[2]);
sampleArr[2] = "mno";
console.log(sampleArr)
sampleArr.push("pqr");
console.log(sampleArr)
//unshift is used to update a value in first of the array
sampleArr.unshift("stu");
console.log(sampleArr)
sampleArr.pop();
console.log(sampleArr)
sampleArr.shift(1)
const newElement = "vwx";
const indexToAdd = Math.floor(sampleArr.length / 2); // Calculate the middle index
sampleArr.splice(indexToAdd, 0, newElement);
console.log(sampleArr); // Output: ["abc", "def", "mno", "ghi", "jkl"]

const movies = [
    { title: 'dfrfvfv', director: 'nolan', year: 2002 },
    { title: 'dhbfuudb', director: 'prithiviyan', year: 2027 },
    { title: 'djfygfe', director: 'kavinesaaa', year: 2025 }
];

movies.forEach((value ,index)=> {
    if(value.year = 2025) {
        console.log(value);
    }
});

const users =[
    { id: 1 , name:'john',age:20},
    { id: 2, name:'jane',age:30},
    { id: 3 , name:'alice',age:28},
    { id: 4 , name:'bob',age:22},
]

users.forEach((value ,index)=> {
    if(value.age >=22  && value.age <=28 ) {
        console.log(value);
    }
});

users.forEach((value ,index)=> {
    if(value.name.length <=4){
        console.log(value);
    }
});


const programmingLanguages = [
    { name: 'javascript', type: 'scripting', year: 1995 },
    { name: 'python', type: 'scripting', year: 1991 },
    { name: 'java', type: 'compiled', year: 1995 },
    { name: 'c++', type: 'compiled', year: 1985 },
];

const filteredLanguages = [];

programmingLanguages.forEach(language => {
    if (language.type === 'compiled' && language.year > 1996) {
        filteredLanguages.push(language);
    }
});

console.log(filteredLanguages);


const users = [
    {id: 1, name: "john", age: 25},
    {id: 2, name: "jane", age: 38},
    {id: 3, name: "alice", age: 28},
    {id: 4, name: "bib", age: 3},
    {id: 5, name: "tom", age: 16},
];

users.forEach((user) => {
    if (user.age < 14) {
        console.log(`${user.name} is a child.`);
    } else if (user.age >= 14 && user.age <= 18) {
        console.log(`${user.name} is a teenage.`);
    } else {
        console.log(`${user.name} is an adult.`);
    }
});*/

const Arr = [94, 67, 15, 22, 83, 38, 67, 49, 30, 15, 82, 52, 13, 73, 76, 92, 65, 95, 29, 38, 83, 9, 1, 48, 32];

const sumOfEvenNumbers = Arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log("Sum of even numbers:", sumOfEvenNumbers); 
const max = Math.max(...Arr);
const min = Math.min(...Arr);

console.log("Maximum number:", max); 
console.log("Minimum number:", min); 
const searchElement = 94;
const index = Arr.indexOf(searchElement);

console.log("Index of", searchElement + ":", index); 
function isAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log("Is the array sorted in ascending order?", isAscending(Arr)); 
  const uniqueArr = Arr.filter((value, index, self) => self.indexOf(value) === index);

console.log("Array without duplicates:", uniqueArr); 


