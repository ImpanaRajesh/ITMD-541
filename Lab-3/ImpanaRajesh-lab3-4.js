function celsiusToFahrenheit(celsius) {
    if (typeof celsius === 'string') {
        celsius = parseFloat(celsius); 
    }
    let fahrenheit = (celsius * 9/5 + 32).toFixed(1); 
    console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);
}

// Test case 1 
celsiusToFahrenheit(0);

// Test case 2 
celsiusToFahrenheit(25.5);

// Test case 3 
celsiusToFahrenheit(100);

// Test case 4 
celsiusToFahrenheit("30");

// Test case 5 
celsiusToFahrenheit("45.4");
