const cards = [
    {name:'mushroom' , img:'./assets/mushroom.png'},
    {name:'meanMush' , img:'./assets/meanmush.png'},
    {name:'egg' , img:'./assets/egg.png'},
    {name:'star' , img:'./assets/stars.png'},
    {name:'flower',  img:'./assets/flower.png'},
    {name:'ghost',  img:'./assets/ghost.png'},
    {name:'mushroom' , img:'./assets/mushroom.png'},
    {name:'meanMush' , img:'./assets/meanmush.png'},
    {name:'egg' , img:'./assets/egg.png'},
    {name:'star' , img:'./assets/stars.png'},
    {name:'flower',  img:'./assets/flower.png'},
    {name:'ghost',  img:'./assets/ghost.png'},
]
//randomize array to later use img source at random 
 cards.sort(() => 0.5 - Math.random())
cardsChosen = []
cardsImgId = []
matched = []


//obtain access to where you wanna place your grid 
let grid = document.querySelector('.game-grid')
//create a for loop to place question mark images (backside)
cards.forEach(function (c , i) {
       // console.log(cards[i].img)
     var card = document.createElement('img')
     card.setAttribute('class' , 'character')
     card.setAttribute('src','./assets/frontface.png')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
    }
)


//append to grid 
//flip card function that should be imcluded in the for loop ; once created add an even listener to card in create grid 
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsImgId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2){
    setTimeout(checkForMatch, 500)
    }
    console.log(matched)
 
}   


//check to see if images are matching, use if statments  
function checkForMatch(){
    var cards = document.querySelectorAll('.character')
    console.log(cards)
    console.log(cardsChosen[0])
    const chosenCardOneId = Array.from(cards).find((card)=> card.getAttribute('data-id')=== cardsImgId[0]  )
    const chosenCardTwoId = Array.from(cards).find((card)=> card.getAttribute('data-id')=== cardsImgId[1]  )
  if(cardsChosen[0] === cardsChosen[1]){
    console.log(chosenCardOneId)
    chosenCardTwoId.setAttribute('src', './assets/purple.png')
    chosenCardOneId.setAttribute('src', './assets/purple.png')
    matched.push(cardsChosen)

  }else{
    chosenCardOneId.setAttribute('src', './assets/frontface.png')
    chosenCardTwoId.setAttribute('src', './assets/frontface.png')
  }
  if (matched.length === cards.length/2){
    console.log('you won!')
  }
  cardsChosen = []
  cardsImgId = []
}


//create empty arrays where data will be pushed , also rmember to 
//clear thse arrays 



 