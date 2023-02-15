// cvičení objekty
/*Ockovani

Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.*/

/*let celeJmeno = prompt('Zadej jmeno a prijmeni> ')
let vek = prompt('Zadej svuj vek: ')

console.log( celeJmeno + vek )

let person = {
	name: celeJmeno,
	age: vek
}

let vypisUdaje = document.querySelector('h1')
vypisUdaje.innerHTML = person.name + ' ' + person.age */

/*Knihovna

V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.*/

/*let kniha1 = {
	bookName: 'Popelka',
	author: 'Jana Horakova',
	papes: '100',
	shopAddress: {
		streetName: 'U Rybnicka 22',
		city: 'Brno',
		postalCode: '123 45'
	},
	onStock: 5
}

let kniha2 = {
	bookName: 'Ruzenka',
	author: 'Jana Lebruska',
	papes: '200',
	shopAddress: {
		streetName: 'U Rybnicka 22',
		city: 'Brno',
		postalCode: '123 45'
	},
	onStock: 7
}*/

/*Realitka
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.*/

const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

/*let nadpis = document.querySelector('h1')
nadpis.textContent = 'Realitni kancelar'

let dispozice = document.querySelector('.dispozice')
dispozice.innerHTML = 'Dispozice bytu je: ' + apartment.disposition

let vymera = document.querySelector('.vymera')
vymera.innerHTML = 'Vymera bytu je: '+ Number(apartment.area.floorage + apartment.area.balcony ) + ' ' + apartment.area.units

let najem = document.querySelector('.najem')
najem.innerHTML = 'Cisty najem: ' + apartment.price.rent + ' ' + apartment.price.currency


let {city, district} = apartment

//let city = apartment.city
//let district = apartment.district

let poloha = document.querySelector('.poloha')
poloha.innerHTML = 'Poloha bytu: '+ city + ' ' + district

let stav = document.querySelector('.stav')
apartment.status = 'taken'
stav.innerHTML = 'Stav pronajmu: ' + apartment.status*/



