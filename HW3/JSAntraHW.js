const message = 'Hello world. This is my Antra JavaScript Assignment' // Try edit me

// Log to console
console.log(message)

//1. Write a JavaScript function that reverse a number.
let n = 32242
function reverse(number){

  return number.toString().split('').reverse().join('')

}
console.log("\nProblem #1\n" + reverse(n))

//2. Write a JavaScript function that checks whether a passed string is a plaindrome or not
let string1 = "madam"
let string2 = "nurse run"
let string3 = "nurserun"
let string4 = "nursesrun"
let string5 = 12321 //This value is a interger values and returns false.
function palindrom(string){

  if(string === string.toString().split('').reverse().join(''))
  return true
  else
  return false

}
console.log("\nProblem #2:\n" + palindrom(string1))
console.log(palindrom(string2))
console.log(palindrom(string3))
console.log(palindrom(string4))
console.log(palindrom(string5))

//3. Write a JavaScript function that generates all combinations of a string
string1 = "dog"

function generateCombinations(str) {
  const results = [];

  function generateSubstr(substr, start) {
    for (let i = start; i < str.length; i++) {
      const newSubstr = substr + str[i];
      results.push(newSubstr);
      generateSubstr(newSubstr, i + 1);
    }
  }

  generateSubstr('', 0);
  return results;
}

console.log("\nProblem #3:\n" + generateCombinations(string1))

//4. Write a JavaScript Function that returns a passed string with letters in alphabetical order
string1 = "webmaster"

function alaphabeticalorder(str) {
  return str.split('').sort().join('');
}
console.log("\nProblem #4\n" + alaphabeticalorder(string1))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
string1 =  "the quick brown fox"
function capitalizeFirstLetter(str){
let results = ""
 let word = str.split(' ')

for(let i = 0; i < word.length; i++){

word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1)

}
results = word.join(' ')
return results
}
console.log("\nProblem #5\n" + capitalizeFirstLetter(string1))
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
string1 =  "Web Development Tutorial"
function longestWord(str){
let results = ""
let currlongest = 0
let words = str.split(' ')

for(let i = 0; i < words.length; i++){
  if(words[i].length > currlongest){
  results = words[i]
  currlongest = words[i].length
  }
}

return results
}
console.log("\nProblem #6\n" + longestWord(string1))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
string1 =  "Web Development Tutorial"
function longestWord(str){
let results = ""
let currlongest = 0
let words = str.split(' ')

for(let i = 0; i < words.length; i++){
  if(words[i].length > currlongest){
  results = words[i]
  currlongest = words[i].length
  }
}

return results
}
console.log("\nProblem #7\n" + longestWord(string1))


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
let number = 2
function primenumber(n){
let results = false

if(n <= 1)
return false

for(let i = 2; i < n; i++){
  if(n % i == 0)
  return false
}

results = true

return results
}
console.log("\nProblem #8\n" + primenumber(5))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
let type = (string) => {}
function returntype(type){
return typeof(type)
}
console.log("\nProblem #9\n" + returntype(type))
console.log(returntype(true))
console.log(returntype(5))
console.log(returntype("string"))
console.log(returntype({}))
console.log(returntype())

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identitymatrix(m){
  let matrix = []

  for(let i = 0; i < m; i++){
    let row = [];
    for(let j = 0; j < m; j++){
      row.push(i == j ? 1 : 0)
    }
    matrix.push(row)
  }
return matrix
}
console.log("\nProblem #10\n" + identitymatrix(4))


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function secondlargestlowest(array){
  let results = []

  array.sort();

  results.push(array[1],array[array.length - 2])

return results
}
console.log("\nProblem #11\n" + secondlargestlowest([1,2,3,4,5,9,5,7,4]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
number = 28;
function isPerfect(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

console.log("\nProblem #12\n")
console.log(isPerfect(number)); 


// 13. Write a JavaScript function to compute the factors of a positive integer. 
let num = 20;

function getFactors(num) {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

console.log("\nProblem #13\n")
console.log(getFactors(num)); // Output: [1, 2, 3, 4, 6, 12]


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
let change = [25, 10, 5, 2, 1]
function converttocoins(amount, change){
  let coins = []
if(0)
return "No coins"

for(let i = 0; i < change.length; i++){
while(amount >= change[i]){
  amount = amount - change[i]
  coins.push(change[i])
}
}
return coins
}
console.log("\nProblem #14\n" + converttocoins(147,change))


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exponent(b,n){
return Math.pow(b,n)}
console.log("\nProblem #15\n" + exponent(2,3))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
let string = "thequickbrownfoxjumpsoverthelazydog"
function uniquecharacters(string){
 let set = new Set();

 for(let char of string){
   set.add(char)
 }
  return Array.from(set).join('')
}
console.log("\nProblem #16\n" + uniquecharacters(string))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function charoccurences(string){
  let occurences = {}
  let map = new Map()

  for(let char of string){
map.set(char, map.has(char) + 1 || 0)
  }
  

  for(let char of string){
    if(char in occurences)
    occurences[char]++
    else
    occurences[char] = 1
  }

  
return map

}
console.log("\nProblem #17\n")
console.log(charoccurences(string))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
let arr = [1, 3, 5, 7, 9];
let target = 5;
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage


console.log("\nProblem #18\n" + binarySearch(arr, target))

// 19. Write a JavaScript function that returns array elements larger than a number. 
function returnlargernumbers(array,target){
  let results = []
  for(let i = 0; i < array.length; i++){
    if(array[i] > target)
    results.push(array[i])
  }
  return results
}

console.log("\nProblem #19\n" + returnlargernumbers([1,2,3,4,5,6,7,8,9,10],3))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateId(n){
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let id = ""

  for(let i = 0; i < n; i++){
    let random = Math.floor(Math.random()*chars.length)
    id = id + chars[random]
  }

  return id
}

console.log("\nProblem #20\n" + generateId(12))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
arr = [1, 2, 3, 4, 5];

function getSubsets(arr, len) {
  let subsets = [];

  for (let i = 0; i < arr.length - len + 1; i++) {
    let subset = arr.slice(i, i + len);
    subsets.push(subset);
  }

  return subsets;
}

// Example usage
console.log("\nProblem #21\n")
console.log(getSubsets(arr,2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
string = "microsoft.com"
function letteroccurences(string,target){
let result = ""
let count = 0
for(let char of string){
if(char == target)
count++
}
return count
}
console.log("\nProblem #22\n")
console.log(letteroccurences(string,"o"))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
string = "abacddbec"
function Nonrepeating(string){
  let charactercount = {}
  let char;

    for(let i = 0; i < string.length; i++){
      char = string[i]
      if(!charactercount[char])
      charactercount[char] = 1
      else
      charactercount[char]++
    }

    for(let i = 0; i < string.length; i++){
        char = string[i]
        if(charactercount[char] == 1)
        return char
      }
      return null
  }

console.log("\nProblem #23\n")
console.log(Nonrepeating(string))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example usage
console.log("\nProblem #24\n")
console.log(bubbleSort(arr))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
let countriesarray = ["Australia", "Germany", "United States of America", "India"]
function largestCountry(countriesarray){
  let results;
  let largestCountry = 0
  let largestIndex;
  let k = 0;
  let map = new Map()

    for(let countries of countriesarray){
      map.set(countries, countries.length)
      for(let i = 0; i < countriesarray.length; i++){
        if(countries.length > largestCountry)
        {largestCountry = countriesarray[i].length
        largestIndex = i
        }
        results = countriesarray[largestIndex]
        k++
      }
      k = 0
    }
    return results
}
console.log("\nProblem #25\n" + largestCountry(countriesarray))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstringWithoutRepeatingChars(str) {
  let longestSubstr = "";
  let currentSubstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let index = currentSubstr.indexOf(char);
    
    if (index !== -1) {
      currentSubstr = currentSubstr.substring(index + 1);
    }
    
    currentSubstr += char;

    if (currentSubstr.length > longestSubstr.length) {
      longestSubstr = currentSubstr;
    }
  }

  return longestSubstr;
}

// Example usage
let str = "abcabcbb";
console.log("\nProblem #26\n")
console.log(longestSubstringWithoutRepeatingChars(str)); // Output: "abc"


// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
str = 'babad';
function longestPalindrome(str) {
    let longest = '';
  
    for (let i = 0; i < str.length; i++) {
      let left = i;
      let right = i;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        let palindrome = str.substring(left, right + 1);
        if (palindrome.length > longest.length) {
          longest = palindrome;
        }
        left--;
        right++;
      }
  
      left = i;
      right = i + 1;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        let palindrome = str.substring(left, right + 1);
        if (palindrome.length > longest.length) {
          longest = palindrome;
        }
        left--;
        right++;
      }
    }
  
    return longest;
  }

  
console.log("\nProblem #27\n")
console.log(longestPalindrome(str))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function functionparamenter(func){
    return func
  }
  
  function addition(a,b){
    return a+b
  }

console.log("\nProblem #28\n")
console.log(functionparamenter(addition))


// 29. Write a JavaScript function to get the function name. 
console.log("\nProblem #29\n" + getFunctionName(myFunction))
function getFunctionName(){
  return getFunctionName.caller
}

function myFunction() {
  console.log(getFunctionName());
}

myFunction();

// function greeting(){
//   console.log(`Hello World!`)
// }

// test1(greeting)

// function test1(callback){
//   callback()
// }
// setInterval(greeting,500)
// console.log(2)

//Model View Controller
//View => user interface
//Model => retrieve data, store data, modify data & update the view
//Controller => 