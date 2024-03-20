let osc = new Tone.Synth(100, 'sine').toDestination();
let lfo = new Tone.LFO(3, 100, 500).connect(osc.frequency).start();

function mousePressed()
{
  osc.triggerAttack();
}

function mouseReleased()
{
  osc.triggerRelease();
}

function preload(){
  alien = loadImage('assets/alien.png');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed === true)
  {
    background(alien);
  }
  else
  {
    background(240);
    text("Press mouse", 150, 100);
  }
}
