const cards = [
    {name:'mushroom' , img:'assets/mushroom.png'},
    {name:'meanMush' , img:'assets/meanmush.png'},
    {name:'egg' , img:'egg.png'},
    {name:'star' , img:'stars.png'},
    {name:'flower',  img:'flower.png'},
    {name:'ghost',  img:'ghost.png'},
    {name:'mushroom' , img:'assets/mushroom.png'},
    {name:'meanMush' , img:'assets/meanmush.png'},
    {name:'egg' , img:'egg.png'},
    {name:'star' , img:'stars.png'},
    {name:'flower',  img:'flower.png'},
    {name:'ghost',  img:'ghost.png'},
]

//obtain access to where you wanna place your grid 
let grid = document.querySelector('.game-grid')
//create a for loop to place question mark images (backside)
function createGrid() {
    for(let i = 0; i<cards.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src','assets/frontface.png')
    card.setAttribute('data-id', 1 )
    grid.appendChild(card)
    }
} 
//append to grid 
createGrid();
//flip card function that should be imcluded in the for loop 

//create empty arrays where data will be pushed , also rmember to 
//clear thse arrays 


