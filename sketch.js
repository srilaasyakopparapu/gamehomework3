var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20
var w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39
var w40, w41, w42, w43, w44, w45, w46, w47, w48, w49, w50, w51, w52, w53, w54, w55, w56, w57, w58
var w59, w60, w61, w62, w63, w64, w65, w66, w67, w68, w69, w70, w71, w72, w73, w74, w75, w76, w77
var w78, w79, w80, w81, w82, w83, w84, w85, w86, w87, w88, w89, w90, w91, w92, w93, w94, w95, w96
var w97, w98, w99, w100, w101, w102, w103, w104, w105,w106, w107, w108, w109, w110, w111, w112, w113
var w114, w115, w116, w117, w118, w119
var coinImg, doorImg, keyImg, opendoorImg, boyImage, boy, boyImage2, homeImg
var key1, key2, key3, key4, key5, key6, key7, key8, key9
var door1, door2, door3, door4, door5, door6, door7, door8, door9
var wallGroup, keyGroup
function preload(){
boyImage = loadAnimation("images/boy2.png","images/boy5.png", "images/boy10.png", "images/boy15.png", "images/boy20.png", "images/boy25.png" )
boyImage2 = loadAnimation("images/boy2l.png","images/boy5l.png", "images/boy10l.png")
doorImg = loadImage("images/door.png")
keyImg = loadImage("images/key.png")
opendoorImg = loadImage("images/opendoor.png")
homeImg = loadImage("images/home.png")

}
function setup() {
  createCanvas(800, 700);
  w1 = createSprite(800, 630, 150, 2);
  w2 = createSprite(720, 580, 2, 100);
  w4 = createSprite(755, 570, 2, 80);
  w5 = createSprite(800, 650, 60, 2);
  w6 = createSprite(670, 667, 2, 40);
  w7 = createSprite(630, 667, 2, 40);
  w8 = createSprite(646, 600, 54, 2);
  w9 = createSprite(620, 473, 2, 250);
  w10 = createSprite(646, 520, 54, 2);
  w11 = createSprite(646, 480, 54, 2);
  w12 = createSprite(670, 394, 2, 170);
  w14 = createSprite(715, 400, 2, 130);
  w15 = createSprite(737, 467, 44, 2);
  w16 = createSprite(757, 444, 2, 45);
  w17 = createSprite(780, 420, 45, 2);
  w18 = createSprite(740, 380, 45, 2);
  w19 = createSprite(760, 356, 2, 45);
  w20 = createSprite(730, 280, 40, 2);
  w21 = createSprite(718, 250, 2, 80);
  w23 = createSprite(755, 234, 2, 45);
  w24 = createSprite(674, 210, 90, 2);
  w25 = createSprite(675, 187, 2, 45);
  w26 = createSprite(630, 230, 2, 130);
  w27 = createSprite(610, 297, 45, 2);
  w28 = createSprite(610, 250, 45, 2);
  w29 = createSprite(590, 190, 2, 120);
  w30 = createSprite(600, 140, 130, 2);
  w31 = createSprite(600, 110, 2, 40);
  w32 = createSprite(518, 90, 170, 2);
  w33 = createSprite(480, 108, 2, 40);
  w34 = createSprite(790, 100, 100, 2);
  w35 = createSprite(745, 140, 2, 80);
  //w36 = createSprite(755, 160, 45, 2);
  w37 = createSprite(730, 158, 2, 45);
  w38 = createSprite(700, 38, 2, 40);
  //w39 = createSprite(720, 57, 40, 2);
  //w40 = createSprite(700, 90, 100, 2);
  w41 = createSprite(500, 670, 2, 44);
  w42 = createSprite(520, 650, 44, 2);
  w43 = createSprite(540, 590, 2, 120);
  w43 = createSprite(560, 530, 44, 2);
  w44 = createSprite(580, 490, 2, 80);
  w45 = createSprite(560, 570, 45, 2);
  w46 = createSprite(580, 590, 2, 60);
  w47 = createSprite(560, 500, 45, 2);
  w49 = createSprite(520, 460, 45, 2);
  w50 = createSprite(500, 515, 2, 110);
  w51 = createSprite(580, 380, 80, 2);
  w52 = createSprite(470, 380, 55, 2);
  w53 = createSprite(580, 360, 2, 45);
  w54 = createSprite(445, 400, 2, 40);
  w55 = createSprite(400, 420, 90, 2);
  w56 = createSprite(355, 370, 2, 180);
  w57 = createSprite(350, 90, 2, 50); 
  w58 = createSprite(320, 113, 130, 2);
  w59 = createSprite(385, 130, 2, 40);
  w60 = createSprite(255, 110, 2, 90);
  w61 = createSprite(215, 125, 2, 120);
  w62 = createSprite(217, 65, 80, 2);
  w63 = createSprite(195, 100, 45, 2);
  w64 = createSprite(175, 120, 2, 45);
  w65 = createSprite(135, 140, 80, 2);
  w66 = createSprite(95, 120, 2, 45);
  w67 = createSprite(90, 110, 10, 2);
  w68 = createSprite(30, 110, 45, 2);
  w69 = createSprite(140, 140, 2, 80);
  w70 = createSprite(120, 180, 45, 2);
  w71 = createSprite(100, 220, 2, 80);
  w72 = createSprite(100, 255, 130, 2);
  w73 = createSprite(130, 300, 2, 90);
  w74 = createSprite(120, 350, 150, 2);
  w75 = createSprite(110, 380, 2, 70);
  w76 = createSprite(90, 380, 40, 2);
  w77 = createSprite(190, 380, 2, 70);
  w78 = createSprite(170, 400, 40, 2);
  w79 = createSprite(230, 415, 90, 2);
  w80 = createSprite(275, 380, 2, 120);
  w81 = createSprite(253, 320, 45, 2);
  w82 = createSprite(232, 293, 2, 110);
  w83 = createSprite(215, 240, 35, 2);
  w84 = createSprite(50, 440, 100, 2);
  w85 = createSprite(100, 490, 2, 100);
  w86 = createSprite(20, 540, 50, 2);
  w87 = createSprite(50, 470, 2, 40);
  w88 = createSprite(70, 490, 40, 2);
  w89 = createSprite(125, 540, 50, 2);
  w90 = createSprite(150, 500, 2, 80);
  w91 = createSprite(190, 500, 85, 2);
  w92 = createSprite(200, 480, 2, 40);
  w93 = createSprite(20, 650, 45, 2);
  w94 = createSprite(80, 600, 45, 2);
  w95 = createSprite(100, 640, 2, 90);
  w97 = createSprite(200, 670, 2, 45);
  w98 = createSprite(245, 650, 90, 2);
  w99 = createSprite(290, 630, 2, 45);
  w100 = createSprite(270, 610, 45, 2);
  w101 = createSprite(250, 590, 2, 45);
  w102 = createSprite(230, 570, 45, 2);
  w103 = createSprite(210, 590, 2, 45);
  w104 = createSprite(190, 610, 45, 2);
  w105 = createSprite(350, 640, 2, 150);
  w106 = createSprite(330, 565, 45, 2);
  w107 = createSprite(370, 660, 45, 2);
  w108 = createSprite(390, 585, 2, 150);
  w109 = createSprite(370, 510, 45, 2);
  w110 = createSprite(450, 550, 2, 180);
  w111 = createSprite(460, 250, 120, 2);
  w112 = createSprite(460, 210, 2, 80);
  w113 = createSprite(450, 300, 100, 2);
  w114 = createSprite(350, 200, 2, 70);
  w115 = createSprite(315, 165, 70, 2);
  w116 = createSprite(600, 20, 1500, 2);
  w117 = createSprite(500, 690, 1100, 2);
  w118 = createSprite(799, 698, 2, 1500);
  w119 = createSprite(1, 1, 2, 1500);

  //w39.shapeColor = "red"

  wallGroup = new Group();
  wallGroup.add(w1)
  wallGroup.add(w2)
  wallGroup.add(w4)
  wallGroup.add(w5)
  wallGroup.add(w6)
  wallGroup.add(w7)
  wallGroup.add(w8)
  wallGroup.add(w9)
  wallGroup.add(w10)
  wallGroup.add(w11)
  wallGroup.add(w12)
  wallGroup.add(w14)
  wallGroup.add(w15)
  wallGroup.add(w16)
  wallGroup.add(w17)
  wallGroup.add(w18)
  wallGroup.add(w19)
  wallGroup.add(w20)
  wallGroup.add(w21)
  wallGroup.add(w23)
  wallGroup.add(w24)
  wallGroup.add(w25)
  wallGroup.add(w26)
  wallGroup.add(w27)
  wallGroup.add(w28)
  wallGroup.add(w29)
  wallGroup.add(w30)
  wallGroup.add(w31)
  wallGroup.add(w32)
  wallGroup.add(w33)
  wallGroup.add(w34)
  wallGroup.add(w35)
  //wallGroup.add(w36)
  wallGroup.add(w37)
  wallGroup.add(w38)
  //wallGroup.add(w39)
  //wallGroup.add(w40)
  wallGroup.add(w41)
  wallGroup.add(w42)
  wallGroup.add(w43)
  wallGroup.add(w44)
  wallGroup.add(w45)
  wallGroup.add(w46)
  wallGroup.add(w47)
  wallGroup.add(w49)
  wallGroup.add(w50)
  wallGroup.add(w51)
  wallGroup.add(w52)
  wallGroup.add(w53)
  wallGroup.add(w54)
  wallGroup.add(w55)
  wallGroup.add(w56)
  wallGroup.add(w57)
  wallGroup.add(w58)
  wallGroup.add(w59)
  wallGroup.add(w61)
  wallGroup.add(w62)
  wallGroup.add(w63)
  wallGroup.add(w64)
  wallGroup.add(w65)
  wallGroup.add(w66)
  wallGroup.add(w67)
  wallGroup.add(w68)
  wallGroup.add(w69)
  wallGroup.add(w70)
  wallGroup.add(w71)
  wallGroup.add(w72)
  wallGroup.add(w73)
  wallGroup.add(w74)
  wallGroup.add(w75)
  wallGroup.add(w76)
  wallGroup.add(w77)
  wallGroup.add(w78)
  wallGroup.add(w79)
  wallGroup.add(w80)
  wallGroup.add(w81)
  wallGroup.add(w82)
  wallGroup.add(w83)
  wallGroup.add(w84)
  wallGroup.add(w85)
  wallGroup.add(w86)
  wallGroup.add(w87)
  wallGroup.add(w88)
  wallGroup.add(w89)
  wallGroup.add(w90)
  wallGroup.add(w91)
  wallGroup.add(w92)
  wallGroup.add(w93)
  wallGroup.add(w94)
  wallGroup.add(w95)
  wallGroup.add(w97)
  wallGroup.add(w98)
  wallGroup.add(w99)
  wallGroup.add(w100)
  wallGroup.add(w101)
  wallGroup.add(w102)
  wallGroup.add(w103)
  wallGroup.add(w104)
  wallGroup.add(w105)
  wallGroup.add(w106)
  wallGroup.add(w107)
  wallGroup.add(w108)
  wallGroup.add(w109)
  wallGroup.add(w110)
  wallGroup.add(w111)
  wallGroup.add(w112)
  wallGroup.add(w113)
  wallGroup.add(w114)
  wallGroup.add(w115)
  wallGroup.add(w116)
  wallGroup.add(w117)
  wallGroup.add(w118)
  wallGroup.add(w119)

  


  keyGroup = new Group();
  key1 = createSprite(770, 595, 10, 10);
  keyGroup.add(key1)
  key2 = createSprite(560, 600, 10, 10);
  keyGroup.add(key2)
  key3 = createSprite(580, 120, 10, 10);
  keyGroup.add(key3)
  key4 = createSprite(20, 460, 10, 10);
  keyGroup.add(key4)
  key5 = createSprite(785, 115, 10, 10);
  keyGroup.add(key5)
  key6 = createSprite(240, 100, 10, 10);
  keyGroup.add(key6)
  key7 = createSprite(250, 400, 10, 10);
  keyGroup.add(key7)
  key8 = createSprite(750, 40, 10, 10);
  keyGroup.add(key8)
  key9 = createSprite(700, 190, 10, 10);
  keyGroup.add(key9)
  for(var i = 0; i<keyGroup.length; i++){
    keyGroup.get(i).addImage(keyImg)
    keyGroup.get(i).scale = 0.1
  }
  boy = createSprite(750, 675, 10, 10);
  boy.addAnimation("runningl", boyImage2)
  boy.addAnimation("running", boyImage)
  boy.scale = 0.125
  
  doorGroup = new Group();
  door1 = createSprite(695, 440, 10, 10);
  door2 = createSprite(525, 390, 10, 10);
  door3 = createSprite(360, 480, 10, 10);
  door4 = createSprite(350, 250, 10, 10);
  door5 = createSprite(70, 550, 10, 10);
  door6 = createSprite(180, 250, 10, 10);
  door7 = createSprite(70, 100, 10, 10);
  door8 = createSprite(360, 50, 10, 10);
  door9 = createSprite(700, 70, 10, 10);
  doorGroup.add(door1)
  doorGroup.add(door2)
  doorGroup.add(door3)
  doorGroup.add(door4)
  doorGroup.add(door5)
  doorGroup.add(door6)
  doorGroup.add(door7)
  doorGroup.add(door8)
  doorGroup.add(door9)
  for(var i = 0; i<doorGroup.length; i++){
    doorGroup.get(i).addImage(doorImg)
    doorGroup.get(i).scale = 0.20
   // boy.collide(doorGroup.get(i))

  }
  
}

function draw() {
  background("black");  
  boy.collide(doorGroup)
  boy.collide(wallGroup)
  handleBoyControls();
  handleKeyCollision();
  drawSprites();
}

function handleBoyControls(){
  if(keyIsDown(LEFT_ARROW)){
    boy.x = boy.x - 2
    boy.changeAnimation("runningl", boyImage2)
  }
  if(keyIsDown(RIGHT_ARROW)){
    boy.x = boy.x + 2
    boy.changeAnimation("running", boyImage)
  }
  if(keyIsDown(UP_ARROW)){
    boy.y = boy.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    boy.y = boy.y + 2
  }
}

function handleKeyCollision(){
  for(var i = 0; i<keyGroup.length; i++){
    if(key1.isTouching(boy)){
      doorGroup.get(i).destroy();
      keyGroup.get(i).destroy();
    }
    if(key2.isTouching(boy)){
      door2.destroy();
      key2.destroy();
    }
    if(key3.isTouching(boy)){
      door3.destroy();
      key3.destroy();
    }
    if(key4.isTouching(boy)){
      door4.destroy();
      key4.destroy();
    }
    if(key5.isTouching(boy)){
      door5.destroy();
      key5.destroy();
    }
    if(key6.isTouching(boy)){
      door6.destroy();
      key6.destroy();
    }
    if(key7.isTouching(boy)){
      door7.destroy();
      key7.destroy();
    }
    if(key8.isTouching(boy)){
      door8.destroy();
      key8.destroy();
    }
    if(key9.isTouching(boy)){
      door9.destroy();
      key9.destroy();
    }
  }
  }

  //if(keyGroup.isTouching(boy)){
   // doorGroup.get(i).destroy();
   // keyGroup.get(i).destroy();
    
  //}
  