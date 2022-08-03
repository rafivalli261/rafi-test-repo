// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its descriptio
const personAccount = {
	firstName: "Diluc",
	lastName: "Ragvindr",
	incomes: 20000000,
	expenses: 100000,
	totalIncome: function () {
		return this.incomes;
	},
	totalExpense: function () {
		return this.expenses;
	},
	accountInfo: function () {
		return `Name : ${this.firstName + this.lastName} \nIncomes : ${this.totalIncome} \nExpenses : ${this.totalExpense} \nBalance : ${this.accountBalance}`;
	},
	accountBalance: function () {
		return this.incomes - this.expenses;
	},
	addExpense: function () {
		this.expenses += 100000;
	},
	addIncome: function () {
		this.incomes += 20000000;
	},
};
console.log(personAccount);
console.log(personAccount.accountInfo);
