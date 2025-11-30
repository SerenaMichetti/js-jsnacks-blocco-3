//- A partire da un array di stringhe, 
//crea un secondo array formattando le stringhe del primo array in minuscolo
//  e con l’iniziale maiuscola.
//Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const names = ['pippo', 'PLUTO', 'Paperino']

const namesDue = names.map(element =>{
    let iniziale = element.charAt(0).toUpperCase()
    let finale = element.slice(1).toLowerCase()
    return iniziale+finale
})
console.log(namesDue)