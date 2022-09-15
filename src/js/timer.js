   

class Timer{
  constructor() {
    this.second= 0;
    this.minute = 0;
    this.controller= null;
    this.stringTime = `00 : 00`;
  }

  add() {
    this.second++; 

    if(this.second > 60){
        this.minute++;
        this.second= 0;
    }

   return this.updateString();
 }


 updateString() {
    let minutes;
    let seconds;

    if(this.minute > 9){
        minutes = this.minute;
    }else{
        minutes = `0${this.minute}`
    }

    if(this.second >9){
        seconds = this.second;
    }else{
        seconds = `0${this.second}`
    }
    
    this.stringTime = `${minutes} : ${seconds}`;
    return this.stringTime;
 }
}



export default Timer;