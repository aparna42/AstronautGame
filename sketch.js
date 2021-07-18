var bath1
var background1
var move1
var sleep1
var gym
var eat
var brush
//Created a variable to store the array of edges
var edges


function preload() {
  //The path of the images for adding animation have to be correct depending on the project
  //In this project, there is no images folder so you can remove that part from the file names
  bath1 = loadAnimation("bath1.png","bath2.png","bath1.png","bath2.png")
  background1 = loadImage("iss.png")
  move1 = loadAnimation("move.png","move1.png","move.png","move1.png")
  //For sleep we just need 1 image
  sleep1 = loadAnimation("sleep.png") // -> You can also use loadImage for this
  gym = loadAnimation("gym11.png","gym12.png","gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png","eat1.png","eat2.png")
  //For brushing we just need 1 image
  brush = loadAnimation("brush.png") 

}


function setup() {
  createCanvas(800,600);
  astona = createSprite(400, 200, 50, 50);
  //We need to write astona.addAnimation here instead of astona = addAnimation("sleep", sleep1)
  astona.addAnimation("sleep",sleep1)
  astona.scale = 0.1
  //Created edge sprites
  edges = createEdgeSprites();
}

function draw() {
  background(background1);   
  //Write the code here to make the astronaut bounce off the edges 
  drawSprites();
 
}

//We check if a key is pressed 
//Then we write if and else if conditions to change the animations based on the key pressed
function keyPressed(){
  //These key codes are predefined
  //We have to use them exactly the same way as seen here
  if (keyCode === LEFT_ARROW){
    astona.addAnimation("bath",bath1)
    astona.changeAnimation("bath",bath1)
  }
  //32 is the keyCode for the space bar -> you can use any other key too
  //If space bar is pressed, we can add the gym animation
else if (keyCode === 32){
    astona.addAnimation("gym",gym)
    astona.changeAnimation("gym",gym)
  }

else if (keyCode === DOWN_ARROW){
    astona.addAnimation("move",move1)
    astona.changeAnimation("move",move1)
    //Assign x and y velocity to the astona sprite 
    //You can make the sprite bounce off the edges so it does not go off the screen
  }

else if (keyCode === RIGHT_ARROW){
    astona.addAnimation("eating",eat)
    astona.changeAnimation("eating",eat)
  }
else if (keyCode === UP_ARROW){
    astona.addAnimation("brushing",brush)
    astona.changeAnimation("brushing",brush)
  }
}