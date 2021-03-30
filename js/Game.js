class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      // function (data) is an anonymus function , it means that a function whre we dont give any name and we dont define it anywhere, so we are directly using the function which will return 
      // a value that is in the form of data and store it inside a gameState variable

       gameState = data.val();
       //data. vall() it is a pre defined function used to xtract data from that position in database
    })
   
  }

  update(state){
    database.ref('/').update({
      // the slash is known as root level
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
