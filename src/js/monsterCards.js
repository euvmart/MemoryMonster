
const monsters=[
    {
        id:12248,
        url : './src/assets/monsters/pixel-monster-12248.png'
    },
    {
        id:13695,
        url : './src/assets/monsters/pixel-monster-13695.png'
    },
    {
        id:22940,
        url : './src/assets/monsters/pixel-monster-22940.png'
    },
    {
        id:35105,
        url : './src/assets/monsters/pixel-monster-35105.png'
    },
    {
        id:41627,
        url : './src/assets/monsters/pixel-monster-41627.png'
    },
    {
        id:41634,
        url : './src/assets/monsters/pixel-monster-41634.png'
    },
    {
        id:46728,
        url : './src/assets/monsters/pixel-monster-46728.png'
    },
    {
        id:48771,
        url : './src/assets/monsters/pixel-monster-48771.png'
    },
    {
        id:49696,
        url : './src/assets/monsters/pixel-monster-49696.png'
    },
    {
        id:50938,
        url : './src/assets/monsters/pixel-monster-50938.png'
    },
    {
        id:52614,
        url : './src/assets/monsters/pixel-monster-52614.png'
    },
    {
        id:52622,
        url : './src/assets/monsters/pixel-monster-52622.png'
    },
      {
        id:56501,
        url : './src/assets/monsters/pixel-monster-56501.png'
    },
    {
        id:118532,
        url : './src/assets/monsters/pixel-monster-118532.png'
    },
    {
        id:132800,
        url : './src/assets/monsters/pixel-monster-132800.png'
    },
    {
        id:164573,
        url : './src/assets/monsters/pixel-monster-164573.png'
    },
    {
        id:196952,
        url : './src/assets/monsters/pixel-monster-196952.png'
    },
    {
        id:229791,
        url : './src/assets/monsters/pixel-monster-229791.png'
    },
    {
        id:248257,
        url : './src/assets/monsters/pixel-monster-248257.png'
    },
    {
        id:248809,
        url : './src/assets/monsters/pixel-monster-248809.png'
    },
]


const numCards ={
    easy: 12,
    medium: 16,
    hard: 24
}



export function createCards(level) {
    let arrayCards =[];
    const size = numCards[level];
    let sliceMonsters= getMonsters(size/2)
    sliceMonsters= [...sliceMonsters,...sliceMonsters]
    

    for(let i= 0; i< size; i++){
        const card=document.createElement('div');
        card.classList.add('card-game')
        

        const front = document.createElement('div');
        front.classList.add('face','front')

        const back = document.createElement('div');
        back.classList.add('face','back');

        const img = document.createElement('img');
        img.setAttribute('src',sliceMonsters[i].url);
        img.setAttribute('name', sliceMonsters[i].id)
        back.append(img)

        card.appendChild(front)
        card.appendChild(back)

        arrayCards.push(card)
    }

   
    return createNodeCtn(arrayCards) ;
    

}


function createNodeCtn(arrayCards){
    const ctnNode = document.createElement('div');
    
    let indexOfArrayCards = [];
    const length = arrayCards.length;

    while (!(indexOfArrayCards.length === length)){
        const index = Math.trunc(Math.random() * length)
        
        if(!indexOfArrayCards.includes(index)){
            indexOfArrayCards.push(index);
            ctnNode.append(arrayCards[index]);
            
        }
    }
   
    return ctnNode;
}

function getMonsters(max){
const length = monsters.length;
let monsterArray=[];
let indexArray =[];

while (!(indexArray.length === max)){
    const index = Math.trunc(Math.random() * length)
    
    if(!indexArray.includes(index)){
        indexArray.push(index);
        monsterArray.push(monsters[index]);
        
    }
}

return monsterArray
}