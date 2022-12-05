const promise = new Promise(function (resolve, reject) {
	const x = 7;

	// "Producing Code" (May take some time)
	if (x > 5) {
		resolve("OK");
	}

	reject(new Error("Hai! Namaku Error, salam kenal semuanya!"));
	reject(new Error("Hai! Namaku Error, salam kenal semuanya!"));
});

// "Consuming Code" (Must wait for a fulfilled Promise)
promise.then(
	(value) => {
		console.log(value);
	},
	(error) => {
		console.log(error);
	}
);

// next : https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
