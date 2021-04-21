var toad, fly, crocodile, bg, crocs, feedback
var toadImage, flyImage, crocImage, lotusImage, bgImage, feedbackImg

var gameOverS, jumpS

var lotus, lotus1, lotus2, lotus3, lotus4
var platform1, platform2, platform3, platform4
var shape2, shape3, shape4

var score

var flyGroup, crocodileGroup

var gameState = 0

function preload(){
    
  toadImage = loadImage("images/toad.png")
  flyImage = loadImage("images/fly.png")
  crocImage = loadImage("images/crocodile.png")
  lotusImage = loadImage("images/lotus.png")
  bgImage = loadImage("images/bg.png")
  feedbackImg = loadImage("images/Feedback.png")

  gameOverS = loadSound("music/gameOver.wav")
  jumpS = loadSound("music/jump.wav")
}

function setup(){
    createCanvas(displayWidth, displayHeight-125)


    bg = createSprite(780,400);
    bg.addImage(bgImage);
    bg.scale = 1.99

    //bg.velocityX = 5;
  

    


    lotus1 = createSprite(370,500,20,20)
    lotus1.addImage(lotusImage)
    lotus1.scale = 0.07

    lotus2 = createSprite(900,350,20,20)
    lotus2.addImage(lotusImage)
    lotus2.scale = 0.07

    lotus3 = createSprite(700,610,20,20)
    lotus3.addImage(lotusImage)
    lotus3.scale = 0.07

    lotus4 = createSprite(1200,550,20,20)
    lotus4.addImage(lotusImage)
    lotus4.scale = 0.07


    //platform1 = createSprite(370,550,120,20)
    //platform1.visible = false;
    //platform2 = createSprite(900,400,120,20)
    //platform3 = createSprite(700,650,120,20)
    //platform4 = createSprite(1200,570,120,20)


    //shape2 = createSprite(980,385,50,50)
    //shape3 = createSprite(780,635,50,50)
    //shape4 = createSprite(1280,555,50,50)

    toad = createSprite(370,500,20,20)
    toad.addImage(toadImage)
    toad.scale = 0.1

    flyGroup = createGroup()
    crocodileGroup = createGroup()

    score = 0

    

}

function draw(){
  
    background("white")

  //if(gameState === 0){

    textSize(50)
    textFont("Georgia")
    fill('lightblue')
    stroke('darkblue')
    strokeWeight(5)
    text("Mr.Toad's Quest", 650, 65)
    
    //if(bg.x >1000){
      //bg.x = 550
    //}

    if (flyGroup.isTouching(toad)){
      //flyGroup.destroyEach();
    
      score = score + 2
       
   }

   

   

    if(keyDown(UP_ARROW) && toad.y >= 300) {
      toad.velocityY = -11;
      jumpS.play()
    }
    
    toad.velocityY = toad.velocityY +0.8;

    if(keyDown(RIGHT_ARROW)){
      toad.velocityX = 7
      jumpS.play()
    }

    if(keyDown(LEFT_ARROW)){
      toad.velocityX = -7
      jumpS.play()
    }

    toad.collide(lotus1)
    toad.collide(lotus2)
    toad.collide(lotus3)
    toad.collide(lotus4)

    //toad.collide(shape2)
    //toad.collide(shape3)
    //toad.collide(shape4)

    if (toad.isTouching(crocodileGroup)){
      background(feedbackImg)

      gameOverS.play()


    textSize(50)
    textFont("Georgia")
    fill('lightblue')
    stroke('darkblue')
    strokeWeight(5)
    text("Mr.Toad's Quest", 650, 100)

      textSize(30)
      fill("darkgreen")
      stroke("lightgreen")
      text("Game Over", 700, 300);

      text("Final Score:" + score, 700, 400)

      //feedback = createSprite(780,400,30,30)
      feedback.changeImage(feedbackImg)
      feedback.scale = 0.5

 
    flies.velocityX = 0
    flyGroup.destroyEach();
    crocodileGroup.destroyEach();
    flyGroup.setVelocityXEach(0);
    crocodileGroup.setVelocityXEach(0);
     
     //flyGroup.lifetime = -2000
     //crocodileGroup.lifetime = -2000

     flies.changeImage("images/fly.png")
  
      //flyGroup.visible = false;
      //crocodileGroup.visible = false;
  
      toad.destroy();
      lotus1.destroy();
      lotus2.destroy();
      lotus3.destroy();
      lotus4.destroy();
      
      
     }
    

    stroke('white')
    textSize(25)
    fill("darkblue")
    text("Score: "+ score, 1300,40);

    flies();
    crocodiles();
  
    drawSprites();


   
 
}

function flies(){
  if (frameCount % 60 === 0) {

    position = Math.round(random(1,2));

    var flies = createSprite(displayWidth,40,10);

    flies.y = Math.round(random(220,300));
    flies.addImage(flyImage);
    flies.scale = 0.055;
    //flies.velocityX = -6;

    if(position==1){
      flies.x=1500;
      //flies.velocityX = -8
      flies.velocityX = -(6 + 3*score/10);
     }
      else if (position==2){
      flies.x=0
      flies.velocityX = (6 + 3*score/10);
      } 
 
    
    flies.lifetime = 250;
    flyGroup.add(flies);

  }
    
}

function crocodiles(){

  if (frameCount % 150 === 0) {
    var crocs = createSprite(900,500,40,10);
    crocs.x = Math.round(random(400,1200));
    crocs.y = Math.round(random(400,470));
    crocs.addImage(crocImage);
    crocs.scale = 0.3;
    //crocs.velocityX = -8;

    crocs.lifetime = 50;
    crocodileGroup.add(crocs);
 }
  
}
