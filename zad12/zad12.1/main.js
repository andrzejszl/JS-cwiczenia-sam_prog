const arr = [34, 219, 109, 2934, 12, 10, 29];

//filter
const oddNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));


//map
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " osób")


//forEach
const arr2 = [];
arr.forEach((number, index) => arr2[index] = number * 2)

//search