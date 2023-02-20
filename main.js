// Homework

let nadpis = document.querySelector('h1')
nadpis.innerHTML = 'Homework 4'

/*V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do konzole počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vyřízněte z názvu prvních pět písmen.
Vyřízněte z názvu posledních pět písmen.*/

//Oblibeny film
//let title = 'Vykoupení z věznice Shawshank' -- puvodni reseni
let title = prompt('Jaký je tvůj oblíbený film?')
console.log(title)

//Pocet znaku konzole
console.log(title.length)

//Prevod na velka pismena - zobrazeno web
let capsLock = document.querySelector('.capsLock')
capsLock.innerHTML = 'Oblíbený film velkými písmeny: ' + title.toUpperCase()

//Prvnich pet pismen - zobrazeno web
let vyriznutiPrvni = document.querySelector('.vyriznutiPrvni')
vyriznutiPrvni.innerHTML = 'Prvních pět písmen: ' + title.slice(0,5)

//Poslednich pet pismen - zobrazeno web
let vyriznutiPosledni = document.querySelector('.vyriznutiPosledni')
vyriznutiPosledni.innerHTML = 'Posleních pět písmen: ' + title.slice(-5)


/*Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
Dále z e-mailu vyřízněte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
	userName: 'slavomir.ponuchalek',
	domain: 'yahoo.com',
}
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.*/

let email = prompt('Zadej svůj email: ')

let zadanyEmail = document.querySelector('.zadanyEmail')
zadanyEmail.innerHTML = 'Tvůj email je: ' + email

let zavinac = document.querySelector('.zavinac')
zavinac.innerHTML = 'Zavináč najdeš na ' + Number(email.indexOf('@') + 1) + '.' + ' ' + 'pozici'
//pisi pro normalni uzivatel a ten zacina pocitat od 1, proto +1

let vyriznutiEmail = document.querySelector('.vyriznutiEmail')
vyriznutiEmail.innerHTML = 'Jméno a příjmení: ' + email.slice(0, email.indexOf('@'))

let domena = document.querySelector('.domena')
domena.innerHTML = ' Domena: ' + email.slice(email.indexOf('@')+1, email.length)


let parsedEmail = {
	userName: email.slice(0, email.indexOf('@')),
	domain: email.slice(email.indexOf('@')+1, email.length)
}
//console.log(parsedEmail)

let {userName,domain} = parsedEmail

let vypisUser = document.querySelector('.vypisUser')
vypisUser.innerHTML = 'User name: ' + userName

let vypisDomain = document.querySelector('.vypisDomain')
vypisDomain.innerHTML = 'Domain: ' + domain

/*Vytvořte webovou stránku, 
kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
	<p>Pod Stájemi 67</p>
	<p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.*/

let order = {
	streetName: 'Sokolnická',
	number: '822',
	city: 'Brno',
	postalCode: '620 00'
}

let { streetName, number, city, postalCode } = order

let content = `
<address>
	<p> ${streetName} ${number}</p>
	<p> ${postalCode} ${city}</p>
</address>
`
//console.log(content)

//document.body.innerHTML = content ----- výpis do body zadávám pouze komentáře, protože se nezobrazí předchozí výpisy

let adresa = document.querySelector('.adresa')
adresa.innerHTML = 'Adresa interpolace řetězců: '+ content







