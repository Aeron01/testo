// I - Les 5 types de données dans javascript :

// let nb = 7 // un nombre : integré (an integer)
// let pi = 3.14 // un nombre : virgule flotante (a float)
// let msg = 'Hello Alyra' // une phrase (a string)
// let isStarted = true // un booléen (a boolean)
// let isFinished = false // un booléen (a boolean)
// null // quelques choses de null (something null)
// undefined (non définie)

// null et undefined sont très peu utilisé. Il est conseillier d'éviter de s'en servire.

// --------------------------------------------------

// II - Raccoucie syntaxique de la commande if-else :
let ex1 = 'I - Raccoucie syntaxique de la commande if-else :'
console.log(`${ex1}`)
console.log('')

let age = 7
if (age >= 18) {
  console.log('Vous êtes majeur.')
} else {
  console.log('vous êtes mineur')
}
// est équivalent à :
age >= 18 ? console.log('Vous êtes majeur.') : console.log('Vous êtes mineur.')

// ---------------------------------------------------

// III - La commande switch :

let ex2 = 'II - La commande switch :'
console.log('')
console.log(`${ex2}`)
console.log('')

let language = 'javascript'
let msg = ''
switch (language) {
  case 'html':
    msg = 'good for web dev.'
    break
  case 'javascript':
    msg = 'good for everything'
    break
  case 'solidity':
    msg = 'good for smart contract dev.'
    break
  case 'basic':
    msg = 'begin 1980'
    break
  case 'matrix code':
    msg = 'i am Néo.'
    break
  case 'dna code':
    msg = 'for this language, i sugest to ask your maker.'
    break
}
console.log(`${language}: ${msg}`)

// -------------------------------------------------------

// VI - Les commandes de boucles :
let ex3 = 'III - Les commandes de boucles :'
console.log('')
console.log(`${ex3}`)
console.log('')

// 1 - La commande while (tant que faire)
let ex4 = '1 - La commande while (tant que faire) :'
console.log('')
console.log(`${ex4}`)
console.log('')

let counter1 = 10 // définition de la variable "counter1"
while (counter1 > 0) {
  console.log(counter1)
  counter1 -= 1
}
// Voila ce que dit le code tapez ci dessus:
// Tant que la variable "counter2" est suppérieur à 0,
//tu affiche le "counter2" et le réduit de 1.

// 2 - La commande "for" :
let ex5 = '2 - La commande "for" :'
console.log('')
console.log(`${ex5}`)
console.log('')

for (let counter2 = 10; counter2 > 0; counter2 -= 1) {
  console.log(counter2)
}
// Pour tous les élements de 10, jusqu'à 0 (0 non inclus)

// ---------------------------------------------------------

// V - La commande break :
let ex6 = 'IV - La commande "break" :'
console.log('')
console.log(`${ex6}`)
console.log('')

let counter3 = 0 // définition de la variable "counter3"
while (true) {
  console.log(counter3)
  counter3 += 1
  if (counter3 === 100) {
    break
  }
}
// Voila ce que dit code tapez ci dessus:
// Tant que c'est vrais (pour la variable "counter3"),
// affiche "counter3", ajoute-y 1, et si il arrive à 100
// tu arrête.

// ----------------------------------------------------------

// VI - La commande "continue" :
// Afficher tous les nombres impairs entre 0 et 99
let ex7 = 'V - La commande "continue" :'
console.log('')
console.log(`${ex7}`)
console.log('')

for (let i1 = 0; i1 < 100; i1 += 1) {
  // si "i1" est pair alors:
  if (i1 % 2 === 0) {
    continue // arrêter l'itération actuelle et passer à la suivante
  }
  console.log(i1)
}

// ----------------------------------------------------------

// VII - Les fonctions :
// Definition de la fonction "add" qui prend 2 paramètres
let ex8 = 'VI - Les fonctions :'
console.log('')
console.log(`${ex8}`)
console.log('')

const add = (nb1, nb2) => {
  return nb1 + nb2
}
// Appel de la fonction
let sum = add(11, 13) // sum === 24

// Definition de la fonction "sayHello" avec 2 paramètres optionnels
const sayHello = (from = 'i', to = 'you') => {
  return `${from} says hello to ${to}`
}
console.log(sayHello()) // affiche (print en anglais): 'i says hello to you'
console.log(sayHello('alice')) // print: 'alice says hello to you'
console.log(sayHello('alice', 'bob')) // print: 'alice says hello to bob'