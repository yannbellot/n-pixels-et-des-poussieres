/*
n pixels et des poussières
Yann Bellot (2013-2020)
*/

let nMaxPxPoussiere = 8;
let densiteMaxPoussieres = 0.002;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);

  // Définition du nombre de poussières
  let densitePoussieres = random(displayWidth*displayHeight*densiteMaxPoussieres);
  let nPoussieres = round(densitePoussieres);

    // Légende
    fill(255);
    textFont('Monospace');
    text(nPoussieres + " pixels et des poussières...", 10, 24);

  // Générateur de poussières
  for (let p = 0; p < nPoussieres; p = p + 1) {
    
    // Nombre de pixels composant une poussière
    let nPxPoussiere = random(nMaxPxPoussiere);
    
    // Position du premier pixel en x et y
    let xPxPoussiere = random(displayWidth);
    let yPxPoussiere = random(displayHeight);
    
    // Couleur du premier pixel
    let couleurPoussiere = random(0,70);
    stroke(couleurPoussiere);
    
    // Affichage du premier pixel
    point(xPxPoussiere,yPxPoussiere);
    
    // Constructeur de poussières
    for (let px = 0; px < nPxPoussiere; px = px + 1) {
    
      // Décallage des pixels
      let decalX = random(-1,1);
      let decalY = random(-1,1);
      
      // Position x et y des autres pixels
      xPxPoussiere = xPxPoussiere + decalX;
      yPxPoussiere = yPxPoussiere + decalY;
      
      // Décallage de couleur
      let decalCouleur = random(-30,30);
      
      // Couleur des autres pixel
      couleurPoussiere = couleurPoussiere + decalCouleur;
      stroke(couleurPoussiere);
    
      // Affichage des autres pixels
      point(xPxPoussiere,yPxPoussiere);
    
    }

  }
}

function draw(){
}

function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}