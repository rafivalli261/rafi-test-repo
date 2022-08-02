// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 21;
const yourAge = prompt("Enter your age : ");
if (myAge > yourAge) {
	console.log(`You are ${myAge - yourAge} years younger than me`);
} else {
	console.log(`You are ${yourAge + myAge} years older than me`);
}
