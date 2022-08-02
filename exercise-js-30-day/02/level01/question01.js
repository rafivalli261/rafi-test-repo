// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const age = prompt("Enter your age : ");
age >= 18 ? alert("You are old enough to drive") : alert(`You are left with ${18 - age} years to drive`);
