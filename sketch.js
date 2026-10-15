function setup() { //eseguito una sola volta
  createCanvas(windowWidth, windowHeight);
  background("#D6BD50");
  //disegno glifi
  let numeroGlifi =81; //round arrotonda, ceil arrotonda per eccesso
//griglia
let numeroColonne = ceil(sqrt(numeroGlifi)); //sqrt radice quadrata
let numeroRighe = ceil(sqrt(numeroGlifi));
let dimColonna = windowWidth / numeroColonne;
let dimRiga = windowHeight / numeroRighe;

let xCorrente = 0;
let yCorrente = 0;

  for(let g=0; g<numeroGlifi; g++){

    mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8);
    xCorrente = xCorrente + dimColonna;

    if(xCorrente >= windowWidth){//se supera il bordo, la windowwidth
    xCorrente = 0;
    yCorrente = yCorrente + dimRiga;
    }

  }

 // mioGlifo(200, 300, 50); lo mettto nel for
  //mioGlifo(300, 100, 150);
}

function draw() {
//draw viene eseguito 60 volte al secondo
}

function mioGlifo(_x, _y, _size){
push(); //Proteggono il glifo intero: il suo sistema di coordinate viene spostato al punto _x, _y e poi ripristinato.


translate(_x, _y); //sposto verso il centro
const miaScala = random(0.2, 1); //scala casuale
const miaDimensione = _size * miaScala;

fill(0);
circle(0, 0, miaDimensione); //disegno il cerchio principale, cerchio esterno, con dimensione casuale


//cerchio interno, sempre centrato
fill(random(255), random(255), random(255));
circle(0, 0, miaDimensione* 0.4);

//solchi casuali sul cerchio esterno
let grigio = random(80, 200);

stroke(grigio);
strokeWeight(1.5);
noFill();

let numeroArchi = random([2, 3]);

for(let i= 0; i < numeroArchi; i++){
  let inizio = random(360);
  let fine = inizio + random(30, 180);
  let diametro = random(_size * 0.4, _size * 0.90);

  arc(0, 0, diametro, diametro, inizio, fine);
}






for(let i=0; i < 4; i++){//esegue la funzione 4 volte
  //secondo pallino, lo metto in un ciclo per avere piu cerchi e non scrivere il cerchio mille volte
push(); //Prima di disegnare ogni pallino, salva nuovamente la posizione. Quando ruoti e sposti il disegno, le modifiche valgono solo per quel pallino.
  angleMode(DEGREES);
const miaRotazione = random(360); //rotazione casuale
const mioRaggio = random(_size/10); //raggio casuale



rotate(miaRotazione);
translate(_size/2, 0);
scale(miaScala);



pop();
}

pop();

}

