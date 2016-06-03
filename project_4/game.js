var GAME_WIDTH = 760;
var GAME_HEIGHT = 550;
var GAME_SCALE = 1;

// var HORIZON_Y = GAME_HEIGHT/GAME_SCALE/2;

var gameport = document.getElementById("gameport");
var renderer = new PIXI.autoDetectRenderer(GAME_WIDTH,
                                           GAME_HEIGHT,
                                           {backgroundColor: 	0x0000FF});

										   gameport.appendChild(renderer.view);
/* 	Creste Stage, home, turoiral, play, credits containers,
	Create buttons and background objects */

//allocate memory for variables. 

var stage = new PIXI.Container();
stage.scale.x = GAME_SCALE;
stage.scale.y = GAME_SCALE;

PIXI.loader
	.add('assets.json')
	.add('map.json')
	.add('tileSheet.png')
	.load(ready)
 // Ready method creates sprite movie clips 
var moving = true;
var johnRun;
var johnTalk;
var johnTalkBox;
var johnTalkBox2;
var johnWarp;
var zorg;  
var zorgTalk;
var zorgTalkBox;
var home;
var playlvl; 
var credits;
var tutorial;
var creditsPage;
var loseScreen;
var winScreen;
var losetext;
var wintext;
var homeButton;
var homeButtonS;
var homeButtonM;
var title;
var playButton;
var creditsButton;
var tutorialButton;
var tutorialPage;
var finish;
var count;
var world;
var lvl;
var player;
var tu;
var bombs;
var coins;
var steps;
var next;
var next2;
var fight;
var game_state = 0;
var bombs_layer;
var steps_layer;
var coins_layer;
var jump_start;
var titleOver;
function ready() {

  var frames = [];
  var johnTalkFrames = [];
  var johnTalkBoxFrames = [];
 /*  var johnTalkBoxFrames2 = []; */
  var johnWarpFrames = [];
  var zorgTalkFrames = [];
  var zorgTalkBoxFrames = [];
  var titleOverFrames = [];

  for (var i=1; i<=4; i++) {
    frames.push(PIXI.Texture.fromFrame('john' + i + '.png'));

  }
  for (var i=1; i<=2; i++) {
    johnTalkFrames.push(PIXI.Texture.fromFrame('johnTalk' + i + '.png'));

  }
   for (var i=1; i<=8; i++) {
    johnTalkBoxFrames.push(PIXI.Texture.fromFrame('talkBox' + i + '.png'));

  }
/*   for (var i=1; i<=4; i++) {
    johnTalkBoxFrames2.push(PIXI.Texture.fromFrame('john' + i + '.png'));

  } */
  for (var i=1; i<=6; i++) {
    johnWarpFrames.push(PIXI.Texture.fromFrame('johnTalk' + i + '.png'));

  }
  for (var i=1; i<=2; i++) {
    zorgTalkFrames.push(PIXI.Texture.fromFrame('zorg' + i + '.png'));

  }
  for (var i=1; i<=8; i++) {
    zorgTalkBoxFrames.push(PIXI.Texture.fromFrame('zorgTalk' + i + '.png'));

  }
    for (var i=1; i<=3; i++) {
    titleOverFrames.push(PIXI.Texture.fromFrame('titleOver' + i + '.png'));

  }
  
  titleOver = new PIXI.extras.MovieClip(titleOverFrames);
  
  
  
  johnTalk = new PIXI.extras.MovieClip(johnTalkFrames);
  johnTalk.anchor.x = .25;
  johnTalk.anchor.y = 0.5;
  johnTalk.position.x = 100 ;
  johnTalk.position.y = 450;  
  johnTalk.scale.x = 5;
  johnTalk.scale.y = 5;
  johnTalk.animationSpeed = .10;
  //=====================================
  johnTalkBox = new PIXI.extras.MovieClip(johnTalkBoxFrames);
  johnTalkBox.anchor.x = .25;
  johnTalkBox.anchor.y = 0;
  johnTalkBox.position.x = 130;
  johnTalkBox.position.y = 220;  
  johnTalkBox.gotoAndStop(0);
  //=====================================
  johnWarp = new PIXI.extras.MovieClip(johnWarpFrames);
  johnWarp.anchor.x = .25;
  johnWarp.anchor.y = 0.5;
  johnWarp.position.x = 120 ;
  johnWarp.position.y = 450;  
  johnWarp.scale.x = 5;
  johnWarp.scale.y = 5;
  johnWarp.animationSpeed = .10;
  //====================================
  zorgTalk = new PIXI.extras.MovieClip(zorgTalkFrames);
  zorgTalk.anchor.x = .25;
  zorgTalk.anchor.y = 0.5;
  zorgTalk.position.x = 580 ;
  zorgTalk.position.y = 450;  
  zorgTalk.scale.x = 5;
  zorgTalk.scale.y = 5;
  zorgTalk.animationSpeed = .10;
  //====================================
  zorgTalkBox = new PIXI.extras.MovieClip(zorgTalkBoxFrames);
  zorgTalkBox.anchor.x = .25;
  zorgTalkBox.anchor.y = 0;
  zorgTalkBox.position.x = 530 ;
  zorgTalkBox.position.y = 200;  
  zorgTalkBox.gotoAndStop(0);
  //====================================
  johnRun = new PIXI.extras.MovieClip(frames);
  johnRun.anchor.x = .25;
  johnRun.anchor.y = 0;
  johnRun.position.x = (32*7);
  johnRun.position.y = (32*29);  
  johnRun.animationSpeed = .13;
  //====================================
  next = new PIXI.Sprite(PIXI.Texture.fromFrame("next1.png"));
  next.anchor.x = .25;
  next.anchor.y = 0;
  next.position.x = 150;
  next.position.y = 100;
  next2 = new PIXI.Sprite(PIXI.Texture.fromFrame("next1.png"));
  next2.anchor.x = .25;
  next2.anchor.y = 0;
  next2.position.x = 150;
  next2.position.y = 100;
  fight = new PIXI.Sprite(PIXI.Texture.fromFrame("fight.png"));
  fight.anchor.x = .25;
  fight.anchor.y = 0;
  fight.position.x = 150;
  fight.position.y = 100;  
	
	
	scene1back = new PIXI.Sprite(PIXI.Texture.fromFrame("scene1back.png"));
	scene2back = new PIXI.Sprite(PIXI.Texture.fromFrame("scene2back.png"));
	creditsPage = new PIXI.Sprite(PIXI.Texture.fromFrame("creditsPage.png"));
	homeButton = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButton.png"));
	homeButtonS = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButtonS.png"));
	homeButtonM = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButtonM.png"));
	title = new PIXI.Sprite(PIXI.Texture.fromFrame("title.png"));
	playButton = new PIXI.Sprite(PIXI.Texture.fromFrame("playButton.png"));
	creditsButton = new PIXI.Sprite(PIXI.Texture.fromFrame("creditsButton.png"));
	tutorialButton = new PIXI.Sprite(PIXI.Texture.fromFrame("tutorialButton.png"));
	tutorialPage = new PIXI.Sprite(PIXI.Texture.fromFrame("tutorialPage.png"));
	losetext = new PIXI.Sprite(PIXI.Texture.fromFrame("loseScreen.png"))
	wintext = new PIXI.Sprite(PIXI.Texture.fromFrame("winScreen.png"))
	count = 0;
	
	
	tu = new TileUtilities(PIXI);
    world = tu.makeTiledWorld('map.json', 'tileSheet.png');
	// add in the world in the paly section
	
	playlvl.addChild(world);
	steps = world.getObject('steps').data;
	bombs = world.getObject('bombs').data;
	finish = world.getObject('finish').data;
	
	
	 
	



	// Set sprites to interactive
	playButton.interactive = true;
	creditsButton.interactive = true;
	tutorialButton.interactive = true;
	homeButton.interactive = true;
	homeButtonS.interactive = true;
	homeButtonM.interactive = true;
	next.interactive = true;
	next2.interactive = true;
	fight.interactive = true;
	
	// Handle mousedown event on interactives
	tutorialButton.on('mousedown', mouseClickTutorial)
	playButton.on('mousedown', mouseClickPlay);
	homeButton.on('mousedown', mouseClickHome);
	creditsButton.on('mousedown', mouseClickCredits);
	homeButtonS.on('mousedown', mouseClickHome);
	homeButtonM.on('mousedown', mouseClickHome);
	next.on('mousedown', mouseClickNext);
	next.on('mouseup', mouseReleaseNext);
	next2.on('mouseup', mouseClickNext2);
	fight.on('mouseup', mouseClickFight);

	jump_start = johnRun.position.y;

	titleScreen(); 
	animate();
  }
	
var scene1 = new PIXI.Container();
var scene2 = new PIXI.Container();
home = new PIXI.Container();
playlvl = new PIXI.Container();
credits = new PIXI.Container();
tutorial = new PIXI.Container();
loseScreen = new PIXI.Container();
winScreen = new PIXI.Container();

//add Home to stage

// =================================================================================
// Set title position
	var song;
	song = new Audio('titleSong.mp3');
	var hit;
	hit = new Audio('hit.wav');
	
	var won;
	won = new Audio('win.wav');
	
	var lost;
	lost	= new Audio('lose.wav');
/* 	
	var coin;
	coin = new Audio('coin.wav');
	*/
	var jump;
	jump = new Audio('crouch.wav');
	
function titleScreen(){
	game_state = 0;
	stage.addChild(home);
	
	song.play();
	song.loop = true;
	home.alpha = 1;
	title.anchor.x = 0.5;
	title.anchor.y = 0.5;
	title.position.x = GAME_WIDTH/2;
	title.position.y = GAME_HEIGHT/2;
	titleOver.position.x = 400;
	titleOver.position.y = 160;
	titleOver.animationSpeed = .15;
	titleOver.anchor.x = 0.5;
	titleOver.anchor.y = 0.5;

 	// Set button positions
	playButton.position.x = 315;
	playButton.position.y = 350;

	creditsButton.position.x = 449;
	creditsButton.position.y = 350;

	tutorialButton.position.x = 179;
	tutorialButton.position.y = 350;

	// Add sprites to Home page
	home.addChild(title);
	home.addChild(titleOver);
	titleOver.play();
	home.addChild(tutorialButton);
	home.addChild(playButton);
	home.addChild(creditsButton); 
	
}
function creditsScreen(){
	game_state = 2;
	// Add sprites to Credits Page
	credits.addChild(creditsPage);
	credits.addChild(homeButton);
	
	homeButton.position.x = 250;
	homeButton.position.y = 300;
	stage.addChild(credits);

}
function playScreen(){
	scene1.addChild(scene1back);
	scene1.addChild(johnTalk);
	scene1.addChild(johnTalkBox);
	scene1.addChild(zorgTalk);
	scene1.addChild(zorgTalkBox);
	scene1.addChild(next);
		johnTalk.play();
	zorgTalk.play();
	stage.addChild(scene1);
}
function playScreen2(){
	stage.removeChild(scene1);
	scene2.addChild(scene2back);
	scene2.addChild(johnWarp);
	scene2.addChild(next2);
	stage.addChild(scene2);
	johnWarp.play();

	}
	

function playScreen3(){
	game_state = 1;
	song.play();
	song.loop = true;
	playlvl.addChild(johnRun);
	var count =1;
	playlvl.addChild(homeButtonS);
	stage.addChild(playlvl);
	homeButtonS.scale.x = .25;
	homeButtonS.scale.y = .25;
	homeButtonS.position.x = 650;
	homeButtonS.position.y = 5;}

function tutorialSceen(){
	game_state = 3;
	stage.addChild(tutorial);
	tutorial.addChild(tutorialPage);
	tutorial.addChild(homeButtonM);
	
	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = 650;
	homeButtonM.position.y = 5;
	song.pause();
	song.currentTime = 0;
	
	}
 function lose(){
	stage.removeChild(playlvl);
	stage.addChild(loseScreen);
	loseScreen.addChild(losetext);
	loseScreen.addChild(homeButtonM);

	losetext.position.x = 
	losetext.position.y = 
	losetext.anchor.x = 0;
	losetext.anchor.y = 0;

	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = johnRun.position.x;
	homeButtonM.position.y = johnRun.position.y;
	homeButtonM.anchor.x =0 ;
	homeButtonM.anchor.y = 0;
	homeButtonM.position.x = 650;
	homeButtonM.position.y = 5;
	loseScreen.alpha = 1;
	lost.play();
	lost.loop = false;
	playlvl.removeChild(johnRun);
		moving = false;


	}
function win(){
	stage.removeChild(world);
	stage.addChild(winScreen);
	winScreen.addChild(wintext);
	winScreen.addChild(homeButtonM);
	
	wintext.position.x = (32*238);
	wintext.position.y = (32*29);
	wintext.anchor.x = .5;
	wintext.anchor.y = .525;
	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = johnRun.position.x;
	homeButtonM.position.y = johnRun.position.y;
	homeButtonM.anchor.x = .5;
	homeButtonM.anchor.y = .525;
	homeButtonM.position.x = 660;
	homeButtonM.position.y = 5;
	winScreen.alpha = 1;
	won.play();
	won.loop = false;
	} 
	
// Handle Mouse Click on Credits
function mouseClickCredits(e) {
	credits.alpha = 1;
	home.alpha = 0;
	stage.addChild(credits);
	creditsScreen();
	
	}

// Handle Mouse Click on Home	
function mouseClickHome(e) {
	credits.alpha = 0;
	home.alpha = 1;
	playlvl.alpha = 0;
	tutorial.aplha = 0;
	lose.alpha = 0;
	win.aplha = 0;
	titleScreen();
	ready();
	}

// Handle Mouse Click on Play 	
function mouseClickPlay(e) {
	playlvl.alpha = 1;
	home.alpha = 0;
	playScreen();

	}	
	
function mouseClickTutorial(e) {
	credits.alpha = 0;
	home.alpha = 0;
	playlvl.alpha = 0;
	tutorial.alpha = 1;
	tutorialSceen();

	}
	var xt=0;
	var yt =0;
	
function mouseClickNext(e) {

	johnTalkBox.gotoAndStop(xt);
	zorgTalkBox.gotoAndStop(yt);
	scene1.removeChild(next);
	scene1.addChild(next);
	if (xt >= 8 && yt >= 8){
		scene1.removeChild(next);
		scene1.addChild(fight);
	}
	

}
function mouseReleaseNext(){
	xt++;
	yt++;
	
}
function mouseClickFight(){
	scene1.removeChild(johnTalk);
	scene1.removeChild(johnTalkBox);
	scene1.removeChild(zorgTalk);
	scene1.removeChild(zorgTalkBox);
	scene1.addChild(johnWarp);
	johnWarp.play();
	
	johnWarp.animationSpeed =.09;
	playScreen2();
		
	}
function mouseClickNext2(){
	stage.removeChild(scene2);
	playScreen3();
		
	}


var jumping = false;
var gravity = .04;
var jump_speed;
var jump_start; 




document.addEventListener("keydown", onKeyDown), false;

// Keydown handler for character movement
function onKeyDown(key) {
	

	 var x = johnRun.position.x;
	 
	if(moving === true){ 	 
	if (key.keyCode == 87  ) {   // W key
		jump.play();
		key.preventDefault();
		moving = true;
		if(!jumping) {
			jumping = true;
			jump_speed = 5;
	}}
	 
	if (key.keyCode == 87 && key.keyCode === 65  ) {   // W key
		key.preventDefault();
		moving = true;

		if(!jumping) {
			jumping = true;
			jump_speed = 5;
			createjs.Tween.get(johnRun.position).to({x: x - 38}, 500, createjs.Ease.linear);		
			johnRun.scale.x = -1;
			}
	}
 
	if (key.keyCode == 87 && key.keyCode === 68  ) {   // W key
		key.preventDefault();
		moving = true;

		if(!jumping) {
			jumping = true;
			jump_speed = 5;
			createjs.Tween.get(johnRun.position).to({x: x + 38}, 500,createjs.Ease.linear);
			johnRun.scale.x = 1;
		}
	}
 
	
	if (key.keyCode === 65 ) { // left
			moving = true;

		if(johnRun.position.x != 0){
	createjs.Tween.get(johnRun.position).to({x: x - 38}, 500, createjs.Ease.linear);		
	johnRun.scale.x = -1;
		johnRun.play();}
    }
    if (key.keyCode === 68 ) { // right
			moving = true;

	
		createjs.Tween.get(johnRun.position).to({x: x + 38}, 500,createjs.Ease.linear);			
		johnRun.scale.x = 1;
			johnRun.play();
		

        }
	  if(key.keycode === 83){
		
		johnRun.gotoAndStop(1);
	}
	}   
}

document.addEventListener("keyup", onKeyRelease), false;

// KeydReleaseown handler for character movement
function onKeyRelease(key) {
	
	if(key.keyCode === 87 ){
		jump.pause();
		jump.loop = false;
	}

    if (key.keyCode === 65 ) { // left
		johnRun.gotoAndStop(1); 
		
		}
  
    if (key.keyCode === 68 ) { // right

		johnRun.gotoAndStop(1);
        }
    if(key.keycode === 83){
		
		johnRun.gotoAndStop(1);
	}
}

 
// function for testing hits with rectangles
function hitRectangle(r1, r2) {
	
	// Variables needed to test if there is a hit
	var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
	
	// Hit or not
	hit = false;
	
	// Finds the center of the rectangular sprites (only works with rectangles/boxes)
	r1.centerX = r1.x + r1.width / 2;
	r1.centerY = r1.y + r1.height / 2;
	r2.centerX = r2.x + r2.width / 2;
	r2.centerY = r2.y + r2.height / 2;
	
	// Divides the Height and Width by two and stores the values.
	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;
	
	// Checks the distances between centers on X and Y axis
	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;
	
	// Combination of sprite width's and heights
	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;
	
	// Collision on the x axis ?
	if (Math.abs(vx) < combinedHalfWidths) {
		// Collision on the y axis ?
		if (Math.abs(vy) < combinedHalfHeights) {
			  // Collision!
			  hit = true;
		} else {
			// No Collision
			hit = false;
    }
	} else {
		// No collision
		hit = false;
  }
	// Return true if hit
	return hit;
};

//function detects hit if true
function checkHit(){
/* 	if(hitRectangle(johnRun, zorg)=== true){
		lose();
	} */
	
	if(hitRectangle(johnRun, finish)=== true){
		win();
		game_state = 4;
	}
	

	var collisiontest = tu.hitTestTile(johnRun, bombs, 0, world, "every");
	if (!collisiontest.hit){
      console.log("hit");
	 johnRun.position.x = johnRun.position.x;
	 lose();}
	 
	var collisiontest2 = tu.hitTestTile(johnRun, steps, 0, world, "every");
	if (!collisiontest2.hit){
	console.log("hit");}
	
	var collisiontest3 = tu.hitTestTile(johnRun, finish, 0, world, 'every');
	
	if (!collisiontest3.hit){
		   console.log("win");
		win();
	}
	 
	
	
} 

 
//update the page
function animate() {
  requestAnimationFrame(animate);
  var x = johnRun.position.x;
	
	checkHit();
	while(game_state === 1){
	update_camera(); 
	break;
	}
	
	process_input();
	
/* 	if(johnRun.position.x > (32*20)){
		 createjs.Tween.get(zorg.position).to({x:(32*240)}, 15000,createjs.Ease.linear);
	}
	if(johnRun.position.x > (32*244)){
		zorg.position.x = (32*5);
		 createjs.Tween.get(zorg.position).to({x:(32*4)}, 15000,createjs.Ease.linear);
	} */

   createjs.Ticker.setFPS(60);
  renderer.render(stage);
  
}
function process_input(){
	if (jumping) {
		johnRun.position.y -= jump_speed;
		jump_speed -= gravity;

		if (johnRun.position.y >= jump_start) {
			jumping = false;
			johnRun.position.y = jump_start;
		}
	}
} 

function update_camera() {
  stage.x = -johnRun.x*GAME_SCALE + GAME_WIDTH/2 - johnRun.width/2*GAME_SCALE;
  stage.y = -johnRun.y*GAME_SCALE + GAME_HEIGHT/2 + johnRun.height/2*GAME_SCALE;
  stage.x = -Math.max(0, Math.min((32*250)*GAME_SCALE - GAME_WIDTH, -stage.x));
  stage.y = -Math.max(0, Math.min((32*50)*GAME_SCALE - GAME_HEIGHT, -stage.y));
}
 