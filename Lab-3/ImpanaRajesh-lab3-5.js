function sortPeopleByAge(people) {
    let sortedPeople = people.slice().sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test case 1
sortPeopleByAge([
    { name: 'Savitha', age: 47, city: 'New York' },
    { name: 'Impana', age: 23, city: 'Chicago' },
    { name: 'Vrushabh', age: 24, city: 'Los Angeles' },
    { name: 'Gaman', age: 20, city: 'Houston' },
    { name: 'Rajesh', age: 53, city: 'Phoenix' }
]);

// Test case 2
sortPeopleByAge([
    { name: 'Ranjitha', age: 20, city: 'San Diego' },
    { name: 'Adarsh', age: 35, city: 'Dallas' },
    { name: 'Kousthubha', age: 33, city: 'Miami' },
    { name: 'Manu', age: 19, city: 'Boston' },
    { name: 'Rakshitha', age: 26, city: 'Atlanta' },
    { name: 'Rajat', age: 28, city: 'California' }
]);
