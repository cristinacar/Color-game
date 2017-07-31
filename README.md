# COLOR GAME

This is a very easy to play Color Game.
The way you play it is you are given an RGB value, and depending on
the mode you choose you will be displayed a number of squares. You
have to correctly guess which square matches the RGB value. 

First steps:

	- create a html file layout with 3 sections(top-header, middle-content,bottom-footer)
	
	- in the top section the RGB value will be displayed (hard-coded at first)
	
	- in the middle section you will have,two sections
	
		- one section for actions 
			- Start new game
		- one section for colour squares (6 hard-coded colors to start with)
		
	- in the footer section - display the version number of the application
   
Second steps:

	- create a css file
	
	- be creative - style the application as you choose

Third Steps:

	- create a javascript file
	
	- create a function that generates and returns string with a random color values (ex: 'rgb(123,211,122)' )
	
	- create a function that uses the above function to generate 6 random colors that 
		are saved in a global variable (array)
	
	- create a function that picks a random value from that array and saves it into another 
		global variable called pickedColor.
	
	- create a resetGame function that uses the global variables to set the text in the header 
		and the color for each square.

Fourth steps:

	- create a setupSquares function in which we add a click event on each square where you compare
		the color of the clicked square with the pickedColor if the color is corect then show 
		the message in the header
	
	- when you press start new game, the resetGame function is called.

