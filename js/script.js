// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Best of Both Worlds",
	"artist":"Hannah Montana",
	"mp3URL":"https://open.spotify.com/track/6Z0F3Mqj7tq1CBZo5qMlUg",
	"imageURL":"https://images-na.ssl-images-amazon.com/images/I/51%2B0vlVS3ML._SX355_.jpg",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3URL":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageURL":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3URL":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageURL":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3URL":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageURL":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
         displayList()



});

function displayList(){
$('body').append("<p>Title: " + mySong.title + "</p>");
$('body').append("<p>Artist: " + mySong.artist + "</p>");
$('body').append(" <a href= " + mySong.mp3URL + ">Listen</a>");
$('body').append("<img src=" + mySong.imageURL + ">");



  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
