// Function to test the output
function myFunctionTest(expected, functionToTest) {
    let result = functionToTest();
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

// 1. max function
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Test cases for max
console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function(){ return max(20, 10); }));
console.assert(max(20, 10) === 20, 'Test Failed: max(20, 10) should be 20');

// 2. maxOfThree function
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// Test cases for maxOfThree
console.log("Expected output of maxOfThree(5, 10, 3) is 10 and " + myFunctionTest(10, function(){ return maxOfThree(5, 10, 3); }));
console.assert(maxOfThree(5, 10, 3) === 10, 'Test Failed: maxOfThree(5, 10, 3) should be 10');

// 3. isVowel function
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Test cases for isVowel
console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function(){ return isVowel('a'); }));
console.assert(isVowel('a') === true, 'Test Failed: isVowel(\'a\') should be true');

// 4. sum function
function sum(array) {
    return array.reduce((total, num) => total + num, 0);
}

// Test cases for sum
console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, function(){ return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, 'Test Failed: sum([1, 2, 3, 4]) should be 10');

// 5. multiply function
function multiply(array) {
    return array.reduce((total, num) => total * num, 1);
}

// Test cases for multiply
console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function(){ return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, 'Test Failed: multiply([1, 2, 3, 4]) should be 24');

// 6. reverse function
function reverse(string) {
    return string.split('').reverse().join('');
}

// Test cases for reverse
console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', function(){ return reverse('jag testar'); }));
console.assert(reverse('jag testar') === 'ratset gaj', 'Test Failed: reverse(\'jag testar\') should be \'ratset gaj\'');

// 7. findLongestWord function
function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest ? word.length : longest, 0);
}

// Test cases for findLongestWord
console.log("Expected output of findLongestWord(['hello', 'world', 'javascript']) is 10 and " + myFunctionTest(10, function(){ return findLongestWord(['hello', 'world', 'javascript']); }));
console.assert(findLongestWord(['hello', 'world', 'javascript']) === 10, 'Test Failed: findLongestWord([\'hello\', \'world\', \'javascript\']) should be 10');

// 8. filterLongWords function
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Test cases for filterLongWords
console.log("Expected output of filterLongWords(['hello', 'world', 'javascript'], 5) is ['javascript'] and " + myFunctionTest(['javascript'], function(){ return filterLongWords(['hello', 'world', 'javascript'], 5); }));
console.assert(JSON.stringify(filterLongWords(['hello', 'world', 'javascript'], 5)) === JSON.stringify(['javascript']), 'Test Failed: filterLongWords([\'hello\', \'world\', \'javascript\'], 5) should be [\'javascript\']');

// Modify the map/filter/reduce example
const array = [1, 2, 3, 4, 5];

// a) multiply each element by 10
const multipliedBy10 = array.map(num => num * 10);
console.log("Expected output of array.map(num => num * 10) is [10, 20, 30, 40, 50] and " + myFunctionTest([10, 20, 30, 40, 50], function(){ return multipliedBy10; }));
console.assert(JSON.stringify(multipliedBy10) === JSON.stringify([10, 20, 30, 40, 50]), 'Test Failed: array.map(num => num * 10) should be [10, 20, 30, 40, 50]');

// b) return array with all elements equal to 3
const allElements3 = array.filter(num => num === 3);
console.log("Expected output of array.filter(num => num === 3) is [3] and " + myFunctionTest([3], function(){ return allElements3; }));
console.assert(JSON.stringify(allElements3) === JSON.stringify([3]), 'Test Failed: array.filter(num => num === 3) should be [3]');

// c) return the product of all elements
const productOfElements = array.reduce((product, num) => product * num, 1);
console.log("Expected output of array.reduce((product, num) => product * num, 1) is 120 and " + myFunctionTest(120, function(){ return productOfElements; }));
console.assert(productOfElements === 120, 'Test Failed: array.reduce((product, num) => product * num, 1) should be 120');
