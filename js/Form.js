class Form {
  constructor() {
    //we are using p5dom library which is helpinmg us to create a form that looks like an html page
  }

  display(){
    var title = createElement('h2')
    //here we are creating the element which is the heading 
    title.html("Car Racing Game");
    //we are adding text to this heading using html function
    title.position(130, 0);
    
    var input = createInput("Name");
    //this will create an input box
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();
      //as soon as you click on html button this anonymus function will return everything which is written inside it
      //hide() is inbuilt function which hides your html elements from the canvas

      var name = input.value();
      //value() is also a pre defined function it extracts data from html element (input baox)
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
