# Oumuamua
Memory game inspired by the handheld game 'Simon'.

## What is This Website For?

This website allows for people to play the game 'Oumuamua'.

## What Does it Do?

There are nine different circles. Once you press the start button, the first circle will light up. 
You have to click on the circles in the same sequence as shown by the game.
Every time you get the sequence right, the level goes up by one and there is one more circle to click on.
In addition to this, the circles switch around so you have to remember the colours rather than just where they were on the page.

## How Does it Work?

A combination of HTML, SASS, CSS, and JavaScript is used to make the webpage. Bootstrap is used with HTML for some simple responsive design
and for the button to start/reset the game. HTML allows for the basic layout of the webpage, including a script which allows a sound to play
when a circle is clicked by the user. CSS is rarely touched in this project as I have used a .scss file to style the page. The SASS file
helps to write the majority of 'code' used in this project. Inside the SASS file, you can find CSS grids being used to make the page responsive
across all devices. There is also the styling for the webpage including the circles, background, and rainbow border. An array of circles was
made at the top of this file to help with any future changes that could be made to the colours with ease of access. These circles are part of
a function which is called for each of the circles. The JavaScript file contains the workings of the game. In main.js you can find that the
function begins by clicking on the start button which changes to the reset button during the playthrough of the game. The simon pattern function 
is called which generates the sequence to be shown by the computer. The game then checks if the user has clicked on the same pattern as simon
and decides whether or not to go to the next level and shuffle the circles, or to ask the user to try again.

## User Stories

The most important story that was recieved by a user was that during the development, the colours didn't seem to be obvious enough for all
users to see. This made me add a dark border to the circles to assist the ease of use for the user. Another user story told me that there
wasn't a long enough delay between the levels, making it so that you could see the last colour you clicked before going to the next level.
In order to fix this, I had to add a setInterval function into my main.js file.

## Future Implimentations

- Object orientated programming rather than procedural programming.
- Different difficulty selections such as easy, medium, and hard mode.
- Add more sound effects.

## Tech Used

**HTML5, CSS3, JavaScipt, [SASS](https://sass-lang.com/), [JQuery](https://jquery.com/),and [Bootstrap](http://getbootstrap.com/)**

## Deployment

The site was deployed using Github Pages. Throughout my work on this project, there have been many regular commits whenever I felt
as though I did something important in the creation of the game. The deployed version and development versions are both the same for now
but will be updated in the future as my JavaScript skills improve. Personally, I used both Visual Studio Code, and Cloud9 to make this
game. VS Code was used to edit the code for the majority of the project, whilst Cloud9 was used if I had to demonstrate my game to someone, or try to fix an issue with my
mentor or tutor, or to work away from home. You can feel free to download the files above and create your own local version of this project.

## Testing 

1. Responsiveness:
* On any webpage
* Right click and inspect
* Change the resolution to multiple device types or just use the 'responsive' option
* Another alternative is to use [Responsinator](https://www.responsinator.com)

2. Game Design:
* Start up the game
* Play the game, ensuring that the level goes up and the circles shuffle each time
* Try pressing on the wrong colour. A try again error should be displayed where "level:" is
* Try pressing the correct colour this time; this should bring you on to the next level

## Credits
- Information: [W3 Schools](https://www.w3schools.com/) Very helpful website to help remember some of the basics that may have been
 forgotten along the way, or to learn new topics. [Github link] (https://gist.github.com/charliepark/3409697) Helped me to learn how to 
create a rainbow border around my game.
- Images: Background photo obtained from [Pixabay](www.pixabay.com).
- Audio: Clicking sound downloaded here [Freesound](https://freesound.org/).

