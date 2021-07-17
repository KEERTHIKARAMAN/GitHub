var ball ;

function setup () {
createCanvas(1600,750);

ball=createSprite(750,380,50,50)
}

function draw () {
  background("crimson");

if (keyIsDown(RIGHT_ARROW)){
  background ("magenta");
}

if (keyIsDown(LEFT_ARROW)){
  background ("aqua");
  }

  if (keyIsDown(UP_ARROW)){
    background ("yellow");
    }

    if (keyIsDown(DOWN_ARROW)){
      background ("springgreen");
      }

drawSprites() ;
}




