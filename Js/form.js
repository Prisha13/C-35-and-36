class Form{
    constructor(){
      this.title = createElement('h1');
      this.input = createInput('NAME:');
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
 display(){
   this.title.html("CAR RACING");
   this.title.position(430, 5);
   this.input.position(430, 160);
   this.button.position(480, 200);
   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount += 1;
    player.index = playerCount
    player.update();
    player.updateCount(playerCount);
    this.greeting.html('Welcome' + player.name);
    this.greeting.position(230, 100);
   })
 }
}