// test de majorité
let age = 90
// si age est < 18 alors :
if (age < 18) {
  console.log('Vous êtes mineur.')
  // sinon si age <= 18 et <= 65 alors :
} else if (age < 65) {
  console.log('Vous êtes majeur.')
  // sinon si age <= 65 et <= 99 alors :
} else if (age < 99) {
  console.log('Vous êtes sénior')
  // sinon si age <= 65 et <= 99 alors :
} else if (age <= 100) {
  console.log('Vous êtes centenaire.')
  // sinon c'est que age >100 alors :
} else if (age < 125) {
  console.log('Vous faite partie des personnes les plus agées de l Humanité.')
  // sinon
} else {
  console.log('Les morts ne parles pas !')
}