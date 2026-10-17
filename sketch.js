function setup() { //eseguito una sola volta
  createCanvas(windowWidth, windowHeight);
  background("#D6BD50");
  //disegno glifi
  let numeroDischi =81; //round arrotonda, ceil arrotonda per eccesso
  
//griglia
let numeroColonne = ceil(sqrt(numeroDischi)); //sqrt radice quadrata
let numeroRighe = ceil(sqrt(numeroDischi));
let dimColonna = windowWidth / numeroColonne;
let dimRiga = windowHeight / numeroRighe;

let xCorrente = 0;
let yCorrente = 0;

  for(let g=0; g<numeroDischi; g++){

    mioDisco(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8);
    xCorrente = xCorrente + dimColonna;

    if(xCorrente >= windowWidth){//se supera il bordo, la windowwidth
    xCorrente = 0;
    yCorrente = yCorrente + dimRiga;
    }

  }

}

function draw() {
//draw viene eseguito 60 volte al secondo
}

function mioDisco(_x, _y, _size){
push(); //(push e pop) proteggono il disco intero: il suo sistema di coordinate viene spostato al punto _x, _y e poi ripristinato.


translate(_x, _y); //sposto verso il centro
const miaScala = random(0.2, 1); //scala casuale
const miaDimensione = _size * miaScala;

fill(0);
circle(0, 0, miaDimensione); //disegno il cerchio principale, cerchio esterno, con dimensione casuale


//cerchio interno, sempre centrato
fill(random(255), random(255), random(255));
circle(0, 0, miaDimensione* 0.4);

//tratti casuali sul cerchio esterno
let grigio = random(80, 200);

stroke(grigio);
strokeWeight(0.8);
noFill();

let numeroArchi = random(2, 3);

for(let i= 0; i < numeroArchi; i++){
  let inizio = random(360); //inizio angolo che contiene l'arco
  let fine = inizio + random(30, 180); //fine dell'angolo che contiene l'arco
  let diametro = random(_size * 0.4, _size * 0.90); //diametro casuale

  arc(0, 0, diametro, diametro, inizio, fine);
}

for(let i=0; i < 4; i++){//esegue la funzione 4 volte
  //creo un ciclo per avere piu cerchi e non scrivere il cerchio mille volte
push(); //prima di disegnare ogni cerchio/disco, salva nuovamente la posizione.
const miaRotazione = random(360); //rotazione casuale

//trasformazioni
rotate(miaRotazione);
translate(_size/2, 0);
scale(miaScala);


pop();
}

pop();

}

