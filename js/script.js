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

