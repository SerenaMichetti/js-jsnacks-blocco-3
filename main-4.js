//- Crea un array di oggetti che rappresentano delle persone.
//- Ogni persona ha un nome, un cognome e un’età.

//- Partendo da questo, crea quindi un nuovo array inserendo,
//  per ogni persona, una frase (stringa) con il nome e cognome
//  e l’indicazione se può guidare, in base all’età.

const people = [
    {nome: 'Alfredo', cognome: 'Lupo', eta: 18},
    {nome: 'Alberto', cognome: 'Lupo', eta: 15},
    {nome: 'Angelo', cognome: 'Lupo', eta: 32},
    {nome: 'Ada', cognome: 'Lupo', eta: 10},
]

const peopleDue = people.map(person => {
    if(person.eta >= 18){
        return(`La persona ${person.nome } ${person.cognome} può guidare`)
    }else {
        return(`La persona ${person.nome } ${person.cognome} non può guidare`)
    }
})
console.log(peopleDue)