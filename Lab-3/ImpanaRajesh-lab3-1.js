function minMaxAverage(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = (sum / arr.length).toFixed(2); // Average with two decimal places
    console.log(`Total Numbers: ${arr.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg}`);
}

// Test case 1
minMaxAverage([4, 10, 46, 12, 18, 8, 60, 2]);

// Test case 2
minMaxAverage([17, 28, 33, 46, 51]);

// Test case 3
minMaxAverage([8, 19, 18, 23, 6, 27, 1]);
