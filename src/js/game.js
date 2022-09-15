 import Timer from "./timer.js";

export class Game{

constructor(ctnGame, parent,level) {
    this.isOver=false;
    this.fails = 0;
    this.points =0;
    this.card1= null;
    this.card2 = null;
    this.ctn= ctnGame;
    this.parent= parent;
    this.isActive= true;
    this.level = level;
    this.goalPoints ={
        easy: 6,
        medium: 8,
        hard: 12
    };
    this.newTimer = new Timer();
}


getGameSetOver(){ return this.isOver};
getFails(){ return this.fails};
getActive(){ return this.isActive};


delay() {
    return new Promise(function (resolve) {
       setTimeout(resolve,600)
    })   
}


async flipcards(card){

    if(!(card.classList.contains('flip-card-game'))){
         card.classList.add('flip-card-game');
         await this.delay();
        this.addCard(card);
        
    }
  
      if(this.card1 !=null && this.card2!=null){
        (this.checkCards())? this.addPoints() : this.reverseFlipCards();
    }
return
}

reverseFlipCards(){
    this.fails++;
    this.card1.classList.remove('flip-card-game');
    this.card2.classList.remove('flip-card-game');
    this.reset();
    
    return;
}

addCard(card){
    if(this.card1==null){
        this.card1= card;
        return;
    }

    if(this.card2==null){
        this.card2= card;
        return;
    }
}


async addPoints(){
    this.points++;
     this.disableCards();
     this.reset();
     if(this.verifyPoints()) {
        this.isOver= true;
        this.isActive= false;
        this.gameOver();
     }
    
}
verifyPoints(){
    if(this.points === this.goalPoints[this.level]){
        return true;
    }else{
        return false;
    }
}
checkCards(){
        const id1= this.card1.querySelector('.back').querySelector('img').getAttribute('name');
        const id2= this.card2.querySelector('.back').querySelector('img').getAttribute('name');
    
        return (id1===id2)?  true: false;      
}

reset(){
    this.card1= null;
    this.card2= null;
}

disableCards(){
    const disabled1= document.createElement('div');
    disabled1.classList.add('disableCard');

    const disabled2= document.createElement('div');
    disabled2.classList.add('disableCard');

    this.parent.replaceChild(disabled1,this.card1);
    this.parent.replaceChild(disabled2,this.card2);
   
return;
}

 gameOver(){ 
    this.ctn.removeChild(this.parent)
}


timer(){
 return this.newTimer.add() ;
}



}

