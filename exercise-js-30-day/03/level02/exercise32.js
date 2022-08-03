const users = {
	Alex: {
		email: "alex@alex.com",
		skills: ["HTML", "CSS", "JavaScript"],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: "asab@asab.com",
		skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: "daniel@daniel.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: "daniel@alex.com",
		skills: ["HTML", "CSS", "JavaScript", "Python"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: "john@john.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: "thomas@thomas.com",
		skills: ["HTML", "CSS", "JavaScript", "React"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: "paul@paul.com",
		skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};
// Find the person who has many skills in the users object.
let usersManySkill = "";
let temp = "";
for (const n in users) {
	if (!temp) continue;
	if (users[n].skills.length > temp) temp = n;
}
console.log(temp);
// Find people who are MERN stack developer from the users object
for (const n in users) {
	if (users[n].skills.includes("React") && users[n].skills.includes("MongoDB") && users[n].skills.includes("Express") && users[n].skills.includes("Node")) temp = n;
}
console.log(temp);
// Set your name in the users object without modifying the original users object
const addMeUsers = Object.assign(
	{
		Rafi: {
			email: "rafi@rafi.com",
			skills: ["HTML", "CSS", "Javascript", "MongoDB", "Exspress", "Hapi", "React", "Node", "Git", "Java"],
			age: 20,
			isLoggedIn: true,
			points: 89,
		},
	},
	users
);
console.log(addMeUsers);

// Get all keys or properties of users object
const key = Object.keys(addMeUsers);
console.log(key);

// Get all the values of users object
const values = Object.values(addMeUsers);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
	name: "Indonesia",
	capital: "DKI Jakarta",
	populations: "lebih dari 200jt jiwa",
	languages: "mostly bahasa",
};
console.log(countries);
