const moduleTime =await import('./timer.js');
const gameModule=  await import('./game.js');


const ctnGame= document.getElementById('ctnGame');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnContinue= document.getElementById('continue');
const tagFails = document.getElementById('fails');
const tagTime = document.getElementById('timePlay');
const formLevel = document.getElementById('formLevel');

let cards=null;
let newGame = null;
let Notify= null;
let controller= null;


async function init(){
     const module = await import('./notify.js');
    Notify = new module.Notify(ctnGame);    
}


// btnPlay.addEventListener('click',async (ev)=>{
// ctnGame.removeChild(btnPlay);

//    await init(); 
//    await startGame();
// })

formLevel.addEventListener('submit', async(ev)=>{
    ev.preventDefault();
    const data = new FormData(formLevel).get('level') ?? 'easy';
    ctnGame.removeChild(formLevel);
    
    await init(); 
    await startGame(data);
})


async function startGame(level) {
    Notify.waitPlay();

     const monsterModule=  await import('./monsterCards.js');
    const monsters =   monsterModule.createCards(level);
    monsters.id= "CtnGame--grid"

    //agregar clase segun dificultad
    monsters.classList.add(`${level}`)

    if(!monsters){
         Notify.message('Error');
         return;
     }
 
    

    ctnGame.append(monsters);

    const parentCards= document.getElementById('CtnGame--grid') 
    cards= [...document.querySelectorAll('.front')];
    newGame = new gameModule.Game(ctnGame,parentCards,level)
    handlerFlip();
    Notify.close();
    timer();

}

 function handlerFlip(){
    cards.forEach(card => {
        card.addEventListener('click',flipcards);
    }); 
}

function removeHandlerFlip(){
    cards.forEach(card => {
        card.removeEventListener('click',flipcards);
    }); 
}

async function flipcards(ev){
    await newGame.flipcards(ev.target.parentNode);
              tagFails.innerText = `Fails : ${newGame.getFails()}`;

            if(newGame.getGameSetOver()){
                clearInterval(controller);
                ctnGame.append(Notify.endPlay());
                const btnReset= document.getElementById('reset');
                btnReset.addEventListener('click',()=>{resetGame()})
             }
}

function resetGame() {
    tagTime.innerText="00 : 00";
    tagFails.innerText = "Fails : 0";
    Notify.close();
    ctnGame.append(formLevel)
 
}

function timer() {
    controller = setInterval(()=>{
        tagTime.innerText = newGame.timer()
    },1000)   
}



btnPause.addEventListener('click',()=>{
    clearInterval(controller);
    btnContinue.style.display="block";
    btnPause.style.display="none"
    removeHandlerFlip()

})

btnContinue.addEventListener('click',()=>{
    timer();
    btnContinue.style.display="none";
    btnPause.style.display="block"
    handlerFlip();
})

