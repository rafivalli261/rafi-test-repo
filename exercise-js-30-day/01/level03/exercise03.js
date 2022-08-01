const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(`Max age : ${ages[ages.length - 1]}`);
console.log(`Min age : ${ages[0]}`);
// Find the median age(one middle item or two middle items divided by two)
let median = [];
if (ages.length % 2 == 0) {
	console.log(`Median age : ${ages[(Math.floor(ages.length / 2), Math.floor(ages.length / 2) + 1)]}`);
} else {
	console.log(`Median age : ${ages[Math.floor(ages.length / 2)]}`);
}

// Find the average age(all items divided by number of items)
// let sum = 0;
// ages.forEach((age) => {
// 	sum += age;
// });
console.log(`Ages sum : ${ages.reduce((total, age) => total + age, 0) / ages.length}`);
// Find the range of the ages(max minus min)
console.log(`Range(max - min) : ${Math.max(...ages) - Math.min(...ages)}`);
// Compare the value of (min - average) and (max - average), use abs() method
console.log(`(min - average) = ${Math.min(...ages) - ages.reduce((total, age) => total + age, 0) / ages.length}`);
console.log(`(max - average) = ${Math.max(...ages) - ages.reduce((total, age) => total + age, 0) / ages.length}`);
