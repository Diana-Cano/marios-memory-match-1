# marios-memory-match-1






https://user-images.githubusercontent.com/109752714/233187414-591eb54c-0daa-4d0f-9635-72c5b510c359.mov




SUPER MEMORY MATCH

Super Memory was designed to be an overall simple game of memory match. There is twelve cards in each game and everytime a new game is started the cards are shuffled so you never get the same game twice. If all cards are matched under the given time frame you will get a "you win" trophy flashing, otherwise a "game over" text will flash. All the styling is a reference to a beautiful pixel game we all know and love, Mario. The entire game follows the pixel theme creating a cohesive user experiemce. 


TECHNOLOGY USED:
java script 
Orignially I had created all the cards in the html after looking at it I noticed the repettition and dried it up by using a for each loop. This for each loop , looped through an array of objects containing image sources for all of cthe characters that were to be matched in the game. In this for each loop I added an even listener to each card and passed the flip card function. The flip card function changes the umage source and pushes that information to the cards chosen array. In this function another function is passed being the check for match function. This function pushes the cards to chosen to cards won if they are to match. Aside from this, there is a function to randomze the arrat so that on refresh there is a new order for the cards.  There is also functions for the timer that is used when start is clicked. There an even listener being used for that start button. That is the jist of the code and what it does however there is a lot mroe detail to it. The functions mentioned though, were the most pivotal to get this game to work and where I personally stuglled the most.

STYLING
style.css
The first thing I did in my css file was set the width and height for my cards so then I could decide the appropriate dimensions for my game grid. I knew I wasted a three by four layout so i added what the width would be with all the images including the margins I was to set for the space inbetween the cards. After that the rest was really more for style and to make it appealing to look at for users. I decided to go with a pixel font from google because I did a retro mario game and it really just all fit together. I also added a shadow to the title also or aesthetic reasons. The clouds images also fit the whole mario look really well. All images used were pixel and really gave the whole game a cohesive look.


IMPORVEMENTS / BUGS
-when playing the game if you go to fast I find that there is some kind of lag. I think it might have something to do with the set time out in the flip card function 
-I would have added some kind of point system
-play again button at the end 
-found a better game over image for when you loose, I dont think it is as visually appealing as when you win


CHANGE - LOG 
OCT 30, 2022 : Grid added , 12 cards layed out.
NOV 1, 2022: 12 cards have flip function implemented.
NOV 2, 2022: Flip function revised, previous one was laggy.
NOV 5, 2022: Cards are checked for match when two are clicked.
             Timer has been added to make the game win or lose.
             Cards aren't able to be flipped until timer has been started.
             Added you win , you lose banners. Changed font sizes.
             


