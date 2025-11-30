//- Crea un array composto da 10 automobili.
//- Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//- Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//- Infine stampa separatamente i 3 array.

const automobile = [
    {marca: 'Fiat', modello: 'Panda', alimentazione: 'Benzina'},
    {marca: 'Audi', modello: 'Q5', alimentazione: 'Diesel'},
    {marca: 'Toyota', modello: 'Prius', alimentazione: 'Ibrida'},
    {marca: 'Tesla', modello: 'Model Y', alimentazione: 'Elettrica'},
    {marca: 'Volkswagen', modello: 'Golf', alimentazione: 'Metano'},
    {marca: 'Alfa Romeo', modello: 'Tonale', alimentazione: 'Benzina'},
    {marca: 'Hyundai', modello: 'Kona', alimentazione: 'Elettrica'},
    {marca: 'Ford', modello: 'Puma', alimentazione: 'GPL'},
    {marca: 'Mercedes-Benz', modello: 'Classe C', alimentazione: 'Diesel'},
    {marca: 'Porsche', modello: 'Taycan', alimentazione: 'Elettrica'}
]

const autoBenzina = automobile.filter(auto => {
    if(auto.alimentazione === 'Benzina'){
         return true
    }return false   
})
console.log(autoBenzina)

const autoDiesel = automobile.filter(auto => {
    if(auto.alimentazione === 'Diesel'){
        return true
    } return false
}
)
console.log(autoDiesel)

const altreAlimentazioni = automobile.filter(auto =>{
    if(auto.alimentazione != 'Benzina' && auto.alimentazione != 'Diesel'){
        return true
    }return false
}
)
console.log(altreAlimentazioni)