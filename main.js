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
const timeH = document.getElementById('countdown');
let started = false
let startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click',timer)
//create a timer using button in html 
function timer(){
started = true
let timeSecond = 10;

timeH.innerHTML = `${timeSecond}`;

const countDown = setInterval(()=>{
    timeSecond --
    timeH.innerHTML = `${timeSecond}`;
    if (timeSecond<10){
      timeH.innerHTML = `0${timeSecond}`;
    }
    if(timeSecond=== 0 ){
        clearInterval(countDown);
    const youLose = document.createElement('img');
    youLose.setAttribute('id','youLose')
    youLose.src= './assets/gameover.png';
    document.body.appendChild(youLose)
    remove()
    }
}, 1000)
  
  
}
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
     card.setAttribute('id', 'cardRemove')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
    }
)


//append to grid 
//flip card function that should be imcluded in the for loop ; once created add an even listener to card in create grid 
function flipCard(){
    if (!started){
      return
    }
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsImgId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2){
    setTimeout(checkForMatch, 500)
    }
    console.log(matched)
 
}   
//function to remove everything but the you win png 
function remove(){
  let title = document.getElementById('super')
  let title2 = document.getElementById('memory')
  let title3 = document.getElementById('match')
  let cloud1 = document.getElementById('cloud')
  let cloud2 =  document.getElementById('cloud2')
  let btn = document.getElementById('start-btn')
  let questionCards = document.querySelectorAll('#cardRemove')
  questionCards.forEach(function(card){
     card.remove()
  })
  title.remove()
  title2.remove()
  title3.remove()
  cloud1.remove()
  cloud2.remove()
  btn.remove()
  timeH.remove()
  
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
    remove()
    const img = document.createElement('img');
    img.setAttribute('id','youWin')
    img.src= './assets/youwin.png';
    document.body.appendChild(img)
    started = false
    
  }
  cardsChosen = []
  cardsImgId = []
}


//create empty arrays where data will be pushed , also rmember to 
//clear thse arrays 



 