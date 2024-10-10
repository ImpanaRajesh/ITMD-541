function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`${str}: ${count} vowels`);
}

// Test case 1
countVowels("education");

// Test case 2
countVowels("beauty");

// Test case 3
countVowels("programming");
