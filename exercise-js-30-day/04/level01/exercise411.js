// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (a, b) => {
	return a + b;
};

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

const _areaOfCircle = (r) => {
	return Math.PI * r * r;
};

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit(celcius) {
	return celcius * (9 / 5) + 32;
}

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculatedBMI(weight, height) {
	const bmi = weight / (height * height);
	if (bmi < 18.5) {
		return `Underweight`;
	} else if (bmi >= 18.5 && bmi < 24.9) {
		return `Normal weight`;
	} else if (bmi >= 24.9 && bmi < 25) {
		return `Overweight`;
	} else {
		return `Obese`;
	}
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(Month) {
	const month = Month.toLowerCase();
	if (month == "september" || month == "october" || month == "november") {
		alert("The season is Autumn");
	} else if (month == "december" || month == "january" || month == "february") {
		alert("The season is Winter");
	} else if (month == "march" || month == "april" || month == "may") {
		alert("The season is Spring");
	} else if (month == "june" || month == "july" || month == "august") {
		alert("The season is Summer");
	} else {
		alert("Wrong month");
	}
}
