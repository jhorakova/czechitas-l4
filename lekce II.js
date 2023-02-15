// opakování video 4.lekce
const address = {
	streetName: 'Pod Kaštany',
	number: 31,
	city: 'Horní Dlouhonosy',
	postalCode: '123 11',
}

//address.number = 21
let vstupUzivatele = prompt('Zadej spravne cislo: ')

address.number = vstupUzivatele

const user1 = {
	fullName: 'Lubomír Větvička',
	login: 'lubos',
	address: {
		streetName: 'Pod Kaštany',
		number: 31,
		city: 'Horní Dlouhonosy',
		postalCode: '123 11',
	},
	cartItems: 0,
}

const product = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč',
}

const {name, price, currency} = product





