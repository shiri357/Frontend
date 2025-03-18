// 1 question
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Expected output: "olleh"
// 2 question
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false

// 3 question 
function findMax(arr) {
    return Math.max(arr);
}

console.log(findMax([3, 1, 4, 1, 5, 9]));  // Output: 9
//4 Write a function to merge two sorted arrays.
function removeDuplicates(arr) {
    let newarr = [];
    for (let i of arr) {
        if (!newarr.includes(i)) newarr.push(i);
    }
    return newarr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5]

// 8 question
function secondLargest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a)[1];
}

console.log(secondLargest([10, 20, 4, 45, 99]));  // Output: 45
// 7 question
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
}
console.log(areAnagrams("listen", "silent")); // Expected output: true
// 9 question
function findMissingNumber(arr) {
    const sum = (arr.length + 1) * (arr.length + 2) / 2;
    return sum - arr.reduce((a, b) => a + b, 0);
}

console.log(findMissingNumber([1, 2, 4, 5]));  // Output: 3
// 10 question
function countOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countOccurrences("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

//14. Longest Word in a String
function longestWord(str) {
    return str.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));
// Output: "quick"


//15. Array Intersection


function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));
// Output: [2, 3]
// 17 Write a function to merge two sorted arrays.
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]





//1 Find the output of the following code:
 console.log(1 + "2" + "2");  //122
console.log(1 + +"2" + "2"); //32
console.log(1 + -"1" + "2"); //02
console.log(+"1" + "1" + "2");//312
console.log("A" - "B" + "2");//Nan2
console.log("A" - "B" + 2);//Nan2

//2 What will be the output of the following?
console.log(0.1 + 0.2 === 0.3);//false
// What will be the output?
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456
// 3What does this function return?

function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo());// name: "John"
//4 How do you make this work?
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(3)(4)); // Expected output: 9
8. /*What will be the output?*/
    
    
    console.log(typeof NaN); //number
    
    
    
9. /*How to check if an object is empty in JavaScript?*/
    
    
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/*10 What will be the output?*/
function test() {
    console.log(a);
    var a = 5;
    console.log(a);
}
test();//undefined
    
    
    










