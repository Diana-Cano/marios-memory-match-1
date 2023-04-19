# marios-memory-match-1




https://user-images.githubusercontent.com/109752714/233186787-d1177585-c97e-4e2d-a533-078ab7f259cd.mov








index.html 
The index html conisits of three different headers that make up the title, this was done for design purposes, I wanted each word to have a different color for the Super Mario Brothers aesthetic and the only way I could think to do this was through creating different header tags for each word in the title. Two image tags are also imcluded in the header for look purposes. Since the images went with the title I decided to include them im the header. There is also a section that contais a div that holds all the cards added in through java script. After that there is two more tags being the aside amd the footer. There is nothing in these tags however I included them in attempt to follow the 'holy grail layout' in order to make it compatiable with a mobile view along with a computer view. All of the tage previously mentioned are wrapped in a div called container inside the body of course. 

style.css
The first thing I did in my css file was set the width and height for my cards so then I could decide the appropriate dimensions for my game grid. I knew I wasted a three by four layout so i added what the width would be with all the images including the margins I was to set for the space inbetween the cards. After that the rest was really more for style and to make it appealing to look at for users. I decided to go with a pixel font from google because I did a retro mario game and it really just all fit together. I also added a shadow to the title also or aesthetic reasons. The clouds images also fit the whole mario look really well. All images used were pixel and really gave the whole game a cohesive look.

java script 
Orignially I had created all the cards in the html after looking at it I noticed the repettition and dried it up by using a for each loop. This for each loop , looped through an array of objects containing image sources for all of cthe characters that were to be matched in the game. In this for each loop I added an even listener to each card and passed the flip card function. The flip card function changes the umage source and pushes that information to the cards chosen array. In this function another function is passed being the check for match function. This function pushes the cards to chosen to cards won if they are to match. Aside from this, there is a function to randomze the arrat so that on refresh there is a new order for the cards.  There is also functions for the timer that is used when start is clicked. There an even listener being used for that start button. That is the jist of the code and what it does however there is a lot mroe detail to it. The functions mentioned though, were the most pivotal to get this game to work and where I personally stuglled the most.

how to play
users click start button. timer begins and you have twenty five seconds to find all the matches or you lose. What is behind the cards is only known until you start makung clicks. When you win a banner will appear and the same thing will happen if you run out of time and lose.



bugs I would have fixed if I had more time / things to add:
-when playing the game if you go to fast I find that there is some kind of lag. I think it might have something to do with the set time out in the flip card function 
-I would have added some kind of point system
-play again button at the end 
-found a better game over image for when you loose, I dont think it is as visually appealing as when you win 
- added audio for when you find a match or when clicking the start button, orginally I had planned an audio of marrio saying his classic lets a go catch phrase
