const cards = [
    {name:'mushroom' , img:'assets/mushroom.png'},
    {name:'meanMush' , img:'assets/meanmush.png'},
    {name:'egg' , img:'assets/egg.png'},
    {name:'star' , img:'assets/stars.png'},
    {name:'flower',  img:'assets/flower.png'},
    {name:'ghost',  img:'assets/ghost.png'},
    {name:'mushroom' , img:'assets/mushroom.png'},
    {name:'meanMush' , img:'assets/meanmush.png'},
    {name:'egg' , img:'assets/egg.png'},
    {name:'star' , img:'assets/stars.png'},
    {name:'flower',  img:'assets/flower.png'},
    {name:'ghost',  img:'assets/ghost.png'},
]
//randomize array to later use img source at random 
const randomCards = cards.sort(() => 0.5 - Math.random)
cardsChosen = []
cardsMatched = []

//obtain access to where you wanna place your grid 
let grid = document.querySelector('.game-grid')
//create a for loop to place question mark images (backside)
function createGrid() {
    for(let i = 0; i<cards.length; i++){
       // console.log(cards[i].img)
     var card = document.createElement('img')
     card.setAttribute('src','assets/frontface.png')
     card.setAttribute('data-id', i )
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
    }
} 

//append to grid 
createGrid();
//flip card function that should be imcluded in the for loop ; once created add an even listener to card in create grid 
function flipCard(){
    var cardId = this.getAttribute('data-id')
    this.setAttribute('src', cards[cardId].img)
    cardsChosen.push(cards[cardId].name)
    checkForMatch()
  
}   
console.log(cardsChosen) 

//check to see if images are matching 
function checkForMatch(){
if (cardsChosen[0]!= cardsChosen[1]){
   this.setAttribute('src','assets/frontface.png')
    }
    else{console.log('not pair :(')}
}
//create empty arrays where data will be pushed , also rmember to 
//clear thse arrays 



