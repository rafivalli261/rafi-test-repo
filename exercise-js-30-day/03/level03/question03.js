const products = [
	{
		_id: "eedfcf",
		name: "mobile phone",
		description: "Huawei Honor",
		price: 200,
		ratings: [
			{userId: "fg12cy", rate: 5},
			{userId: "zwf8md", rate: 4.5},
		],
		likes: [],
	},
	{
		_id: "aegfal",
		name: "Laptop",
		description: "MacPro: System Darwin",
		price: 2500,
		ratings: [],
		likes: ["fg12cy"],
	},
	{
		_id: "hedfcg",
		name: "TV",
		description: "Smart TV:Procaster",
		price: 400,
		ratings: [{userId: "fg12cy", rate: 5}],
		likes: ["fg12cy"],
	},
];

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(userId, name, rate) {
	products.forEach((n) => {
		if (n.name == name) {
			n.ratings.push({userId, rate});
			return `Rating berhasil ditambahkan`;
		}
	});
	return `Product named ${name} was not found - 404`;
}

// b. Create a function called averageRating which calculate the average rating of a product

function averageRating(name) {
	const product = products.filter((n) => n.name == name)[0];
	if (!product) {
		return `Product doesn't exist`;
	}
	const average = product.ratings.reduce((sum, i) => sum + i, 0) / product.ratings.length;

	return `Average rating of ${product.name} is ${average}`;
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(userId, productId) {
	products.forEach((n) => {
		if (n._id == productId) {
			if (n.likes.includes(userId)) {
				n.likes.splice(n.likes.indexOf(userId), 1);
				return `Like removed`;
			}
			n.likes.push(userId);
			return `Liked`;
		}
	});
	return `Not Found`;
}
