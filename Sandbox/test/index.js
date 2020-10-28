
// Declare a game object and call the game object's methods
var game = {
    winner: {
       name:"Broncos",
       score: 24,
    },
    loser: {
       name: "Panthers",
       score: 10,
    },
    
    getMarginOfVictory: function() {
       return this.winner.score - this.loser.score 
    },
    
    showSummery: function() {
       return this.winner.name + this.winner.score + this.loser.name + this.loser.score;
    }
  };
  
  
  var x = game.getMarginOfVictory();
  console.log(x)
  
  var y = game.showSummery();
  console.log(y)