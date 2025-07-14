//creo un array che descrive bici da corsa, con marca/modello e peso, prendo spunto da articoli trovati su Decathlon
const racingbike = [
  {
    model: `RC 500 Microshift 9V`,
    kg: 10.5,
  },
  {
    model: `Triban RC120`,
    kg: 11.5,
  },
  {
    model: `EDR EASY VAN RYSEL `,
    kg: 11.5,
  },
  {
    model: `TRIBAN RC 500 FB PROWHEEL/SORA`,
    kg: 11,
  },
  {
    model: ` NCR AF Shimano Tiagra 2x10V`,
    kg: 9.5,
  },
];


console.log(racingbike)
//ricavo dall'array la bicicletta che ha il peso minore tra quelle elencate utilizzato un ciclo for, in questo caso devo creare una variabile che mi contenga uno degli degli oggetti presenti nell'array originale, cosi da poter fare un confronto passo passo con tutti gli altri oggetti presenti.
let lightbike = racingbike[0]
//ciclo ogni elemento dell'array 
for (let i = 0; i < racingbike.length; i++) {


  //stabilisco la condizione che mi permette di stabilire quale degli oggetti deve andare ad essere inserito nella variabile prima creata 
  if (racingbike[i].kg < lightbike.kg) {
    lightbike = racingbike[i];
  }
};
console.log(lightbike)


//esercizio 2

//Creo un array di squadre da calcio 

const team = [
  {
    society: `Atalanta`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Bologna`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Cagliari`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Como`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Cremonese`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Fiorentina`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Genoa`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Hellas Verona`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Inter`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Juventus`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Lazio`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Lecce`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Milan`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Napoli`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Parma`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Roma-`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Sassuolo`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Torino`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Udinese`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
  {
    society: `Verona`,
    points: Math.floor(Math.random() * 100 + 1),
    fouls_drawn: Math.floor(Math.random() * 100 + 1),
  },
];
console.log(team)
