function sortNumbers(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b); 
    console.log(`Original Array: ${arr}
Sorted Array: ${sortedArr}`);
}

// Test case 1
sortNumbers([9, 4, 11, 10, 6, 21, 52]);

// Test case 2
sortNumbers([12, 3, 18, 10, 13, 16]);

// Test case 3
sortNumbers([22, 25, 30, 8, 7]);
