import exactMath from "exact-math";
import _ from "lodash";

// Function containing logic for filtering out odd numbers
function isOdd(x) {
    return x % 2 != 0;
}

// Function containing logic for filtering out even numbers
function isEven(x) {
    return x % 2 === 0;
}

// Duplicate String Cout
async function duplicateCount(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            obj[string[i]] += obj[string[i]];
        }
        else {
            obj[string[i]] = 1;
        }
    }
    return obj;
}


//longest palindrome
function longestPalindrome(s) {
    let ll = 0, rr = 0;
    let l = "";
    let r = "";
    for (let i = 0; i < s.length; i++)
        for (let j of [i, i + 1])
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
                [ll, rr] = (r - l + 1) > (rr - ll + 1) ? [l, r] : [ll, rr];

    return s.substring(ll, rr + 1);
}


async function romanToInt(s) {

    let m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }


    // let split_data = [...s]
    let sum = 0;

    for (let value of s) {
        sum += m[value]
    }

    return sum;
}
async function isPalindrome(req, res) {
    let num = req.query.num;

    let rev_num = parseFloat(num.toString().split('').reverse().join(''));


    if (rev_num == num) {
        return res.json(true);
    }

    return res.json(false)


}
async function isVowel(req, res) {
    let string = req.query.text;
    let result = (string.length / 2)
    let part1 = string.slice(-result)
    let part2 = string.slice(0, result)
    let count = 0;
    let count2 = 0;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let key of part1) {
        count += vowels.includes(key);
    }
    for (let key2 of part2) {
        count2 += vowels.includes(key2);
    }
    let output = count == count2 ? true : false;
    return res.json(output)

}
async function addTwoNumber(req, res) {
    let l1 = req.body.list1;
    let l2 = req.body.list2;


    l1 = l1.reverse().toString();
    l2 = l2.reverse().toString();

    let sum = 0;

    sum = exactMath.add(l1, l2);

    return res.send({ e: req.body });


}
// higher order function concept
async function isOddEven(req, res) {

    let arr = [1, 5, 4, 7, 8, 3, 6, 5, 4, 9];
    let odd = await filterFunction(arr, isOdd);
    let even = await filterFunction(arr, isEven);
    return res.send({ odd, even });

}
//find the count of duplicate character in string  
async function duplicate(req, res) {

    let result = await duplicateCount("abccbdfadg");

    // to get non-repeated element
    let arr = [];
    for (const key in result) {
        if (result[key] <= 1) {
            arr.push(key)
        }
    }

    //to get length of non-repeated element
    var keys = Object.keys(result);
    var len = keys.length;

    // by using set 
    const letters = new Set(["a", "a", "b", "c"]);
    console.log(letters.size);

    return res.json(len)
}
//median of an array
async function median(req, res) {
    let arr = [1, 2, 3, 4, 5]

    let n = arr.length;

    let median = "";

    if (isOdd(n)) {
        median = (n + 1) / 2;
    }
    if (isEven(n)) {
        median = ((n / 2) + ((n / 2) + 1)) / 2
    }

    return res.json(median)

}
//find longest palindrome in string
async function longPalindrome(req, res) {

    let palindrome = await longestPalindrome("cbaabab");
    return res.send({ palindrome })
}
// constructor concept
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}
let result = new Model("Ford", "Mustang");


function test(){
    paramspas()
}
function paramspas(parmas){

    if (!parmas) {
        throw 'Parameter is not a number!';
      }

}

function getAge(req, res){
    const arr = [
        {firstName: "rakesh", lastname: "pathania", age: 25},
        {firstName: "akash", lastname: "pathania", age: 20},
        {firstName: "suraj", lastname: "pathania", age: 15},
        {firstName: "vishal", lastname: "pathania", age: 25}

    ]

    // let output = {};
    // for(let i = 0; i<arr.length; i++){
    //     if(output[arr[i]?.age]){
    //         output[arr[i]?.age]+= output[arr[i]?.age]
    //     }
    //     else{
    //         output[arr[i]?.age] = 1
    //     }
    // }

    // console.log(output, ">>>>>>>>>>>>>>");

    // res.send(output) ;

    // expected output {25: 2, 20: 1, 15: 1}

    // const output  = arr.reduce((acc, curr)=>{
    //     if(acc[curr.age] ){
    //         acc[curr.age] += acc[curr.age]
    //     }
    //     else{
    //         acc[curr.age] = 1;
    //     }
       
    //     return acc;
    // }, {})

    //get the firstname of all the people whoes age is less than 30
    
    const output = arr.reduce((acc, curr)=>{

        if(curr.age < 30){
            acc.firstname = curr.firstName
        }
        return acc
    
    }, {})
    res.send(output) ;


}

const nestedArray = [1, [2, 3, [4, 6, [5, 7]]]];

const flattenAndSort = (nestedArray) => {
  return nestedArray.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flattenAndSort(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []).sort((a, b) => a - b); 
}

console.log(flattenAndSort(nestedArray)); 


// const array = [1,2,3,4,2,1,2,5,8,7,5,4,3,6,9]

// const newArray = array.reduce((acc, curr)=>{
//     if(acc[curr]){
//         acc[curr] +=1
//     }else{
//         acc[curr] = 1
//     }
//     return acc;
// },{})

// console.log(newArray);


// const word = "education"

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// const newArray = new Set();

// for (val of word){
//     if(vowels.includes(val.toLowerCase())){
//         newArray.add(val);
//     }
// }

// const isContainsWholeVowels = vowels.every((vowel)=> newArray.has(vowel));

// console.log(isContainsWholeVowels)

// const unsortedArray = [1,2,[3,4,[5,6,7,[8,[9,10]]]]];

// const flattenSortedArray = (array)=>{
//     return array.reduce((acc, curr)=>{
//         if(Array.isArray(curr)){
//             acc.push(...flattenSortedArray(curr))
//         }else{
//             acc.push(curr)
//         }
// return acc;
//     },[]).sort((a,b)=> a-b)
// }

// console.log(flattenSortedArray(unsortedArray))

// const fabonacciRecursion = (n) =>{
//     if(n<=0) return 0;
//     if(n === 1) return 1;
    
//     return fabonacciRecursion(n-1) + fabonacciRecursion(n-2);

// }
// e
// const generateFabonacciSeries = (n) =>{
//     let fabonacciSeries = [];
//     for(i=0; i<n; i++){
//         fabonacciSeries.push(fabonacciRecursion(i));
//     }
//     return fabonacciSeries;
    
// }

// console.log(generateFabonacciSeries(10));


// const fabonacciSeries = (n)=>{
//     if(n<=0) return [];
//     if(n===1) return [0];
    
//     const fab = [0,1];
    
//     for(i=2; i<n; i++){
//         fab.push(fab[i-1]+fab[i-2])
//     }
    
//     return fab;
    
// }

// console.log(fabonacciSeries(10))


// let arr = [
//     {name: "abc", score: 10},
//     {name: "def", scorxe: 11},
//     {name: "asdf", score: 10},
//     {name: "asd", score: 14},
//     {name: "bcd", score: 11}
//   ];
//   const newArray = [];
//   arr.forEach((item)=>{
//      const isExisting = newArray.find((newItem)=> newItem.score === item.score)
//      if(isExisting){
//          isExisting.name.push(item.name)
//      }
//      else{
//          newArray.push({score: item.score, name:[item.name]})
//      }
//   })
//   console.log(newArray)


const employees = [
    { name: "John", age: 30, department: "Sales" },
    { name: "Emily", age: 28, department: "Marketing" },
    { name: "Michael", age: 35, department: "Finance" },
    { name: "Steve", age: 25, department: "Marketing" },
    { name: "Rahul", age: 35, department: "Sales" },
  ];
  
  const departmentGroups = [];
  
  employees.forEach((employee) => {
    const departmentEntry = departmentGroups?.find((item)=> item[employee?.department]);
    if(departmentEntry){
      
      departmentEntry[employee?.department].push({name: employee?.name, age: employee?.age});
    }
    else{
      departmentGroups.push({[employee.department] : [{name: employee.name, age: employee?.age}]})
    }
  });
  
  console.log(departmentGroups);
  
  

export { result,test, getAge };
