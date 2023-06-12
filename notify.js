export class Notify{

    constructor(ctn) {
        this.ctn= ctn;
         this.interval= null;
    }
    waitPlay(){
        const span= document.createElement('span');
        span.innerText = `LOADING...`;
        
        
        const divNotify= document.createElement('div');
        divNotify.classList.add('notify');

        divNotify.append(span)

        this.ctn.append(divNotify);

         let pointer = 7;
         let textSpan = span.innerText;
         this.interval= setInterval(()=>{
             if(pointer > 10){
                pointer=7;
             }
             span.innerText = textSpan.slice(0, pointer++);
         },1000)  
        
    }

    endPlay(){
        const divNotify= document.createElement('div');
        divNotify.classList.add('notify');

        const nodeWinner= document.createElement('div');
        nodeWinner.classList.add('winner')
        nodeWinner.innerHTML =`<div class="winnerAnimation">
        <p>YOU WIN!</p>
        <iframe id="iframe" src="https://embed.lottiefiles.com/animation/17297"></iframe>
        </div>
        <button  class="btn-play" id="reset">RESET</button>`;

        divNotify.append(nodeWinner);
      
        return divNotify;

    }

    close(){
        (this.interval!=null) ? clearInterval(this.interval): false;
        this.ctn.removeChild(document.querySelector('.notify'))
    }
    

}



  

    
      
