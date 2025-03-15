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
// 
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
// 









