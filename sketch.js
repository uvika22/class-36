var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
//at first game state will be 0 because we are waiting for 4 players to join, so we will display a form to every player, this form will have have a input baox and a button 
//as soon as any player enters the name and clicks on the join button, data from the form will be submitted to database, as soon as the player count reaches 4 at that time the game state
//will change to 1 (playState)

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
