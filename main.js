//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano)//
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.//
//Infine stampa separatamente i 3 array.

const automobili = [
    {marca:'Fiat', modello: 'Panda', alimentazione: 'Benzina'},
    {marca:'Alfa Romeo', modello: 'Giulia', alimentazione: 'Diesel'},
    {marca:'Tesla', modello: 'Model 3', alimentazione: 'Elettrica'},
    {marca:'Toyota', modello: 'Yaris', alimentazione: 'Ibrida'},
    {marca:'BMW', modello: 'Serie 3', alimentazione: 'Benzina'},
    {marca:'Renault', modello: 'Clio', alimentazione: 'Metano'},
    {marca:'Ford', modello: 'Fiesta', alimentazione: 'GPL'},
    {marca:'Porsche', modello: 911, alimentazione: 'Elettrica'},
    {marca:'Audi', modello: 'A4', alimentazione: 'Ibrida'},
    {marca:'Chevrolet', modello: 'Cruze', alimentazione: 'Diesel'}
]
//Con il metodo filter filtro il tipo di alimentazione dell'auto che mi occorre
const autoDiesel = automobili.filter(auto => auto.alimentazione === 'Diesel');
const autoBenzina = automobili.filter(auto => auto.alimentazione === 'Benzina');
const altraAlimentazione = automobili.filter(auto => auto.alimentazione != 'Benzina' && auto.alimentazione != 'Diesel');

