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
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Bologna`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Cagliari`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Como`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Cremonese`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Fiorentina`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Genoa`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Hellas Verona`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Inter`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Juventus`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Lazio`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Lecce`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Milan`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Napoli`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Parma`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Roma`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Sassuolo`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Torino`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Udinese`,
    points: 0,
    fouls_drawn: 0,
  },
  {
    society: `Verona`,
    points: 0,
    fouls_drawn: 0,
  },
];


//ciclo ogni elemento dell'array pèer andara ad inserire nelle 2 variabili dei numeri generati casualmente 

for (let i = 0; i < team.length; i++) {
  team[i].points = Math.floor(Math.random() * 100 + 1);
  team[i].fouls_drawn = Math.floor(Math.random() * 100 + 1);
}

console.log(team)

//voglio mandare in console la scritta della squadra vincitrice 

let teamwin = team[0]

for (let i = 0; i < team.length; i++) {
  if (team[i].points > teamwin.points) {
    teamwin = team[i];
  }
}
console.log(`La squadra vincitrice del campionato è ${teamwin.society}`)

//creo una variabile vuota per poi successivamente metterle all'interno gli oggetti con due delle 3 proprietà

const team_foulsdrawn = [];

for (let i = 0; i < team.length; i++) {


  //creo un nuovo oggetto andando a mettere solo le prprietà che mi servono 

  let team_fouls = {
    society: team[i].society,
    fouls_drawn: team[i].fouls_drawn,
  }


  team_foulsdrawn.push(team_fouls)
}
console.log(team_foulsdrawn)

