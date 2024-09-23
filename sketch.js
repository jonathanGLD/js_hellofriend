function setup() {
  createCanvas(400, 400);
}

function inicializaCores()  {
  
  background("black")
  fill('darkred')
  textSize(64)
  textAlign(CENTER, CENTER)
  
}

function draw() {
  inicializaCores();
  
  let palavra = "hello friend!"
  let ccc = ":)"

  text(ccc,200, 100)
if (mouseIsPressed) {
  text(palavra, mouseX, mouseY)

   }
}