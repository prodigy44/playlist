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

$( document ).ready(function() {
	
var mySong = {
	"title":"Best of Both Worlds",
	"artist":"Hannah Montana",
	"mp3URL":"https://open.spotify.com/track/6Z0F3Mqj7tq1CBZo5qMlUg",
	"imageURL":"https://images-na.ssl-images-amazon.com/images/I/51%2B0vlVS3ML._SX355_.jpg",
}

var myPlayList = [
	{
    	"title":"Best of Both Worlds",
	    "artist":"Hannah Montana",
	    "mp3URL":"https://open.spotify.com/track/6Z0F3Mqj7tq1CBZo5qMlUg",
	    "imageURL":"https://images-na.ssl-images-amazon.com/images/I/51%2B0vlVS3ML._SX355_.jpg",
},
	{
		"title":"I got Nerve ",
		"artist":"Hannah Montana",
		"mp3URL":"https://open.spotify.com/track/3bSq5OpEWmLK1o8F7saR2F",
		"imageURL":"https://images-production.global.ssl.fastly.net/uploads/posts/image/136924/hannah-montana.jpg",
	},
	{
		"title":"He could be the One",
		"artist":"Hannah Montana",
		"mp3URL":"https://open.spotify.com/track/07HPV6hzecJmMJwsIX8YVU",
		"imageURL":"https://i.ytimg.com/vi/pv585qiSCkI/hqdefault.jpg",
	}

]



function displayList(){


  
for (var i=0; i < myPlayList.length; i = i + 1) {
	  	$('.songs').append("<p> Title: " + (myPlayList[i].title)+ "</p>");
        $('.songs').append("<p>Artist: " + myPlayList[i].artist + "</p>");
		$('.songs').append(" <a href=" + myPlayList[i].mp3URL + "> Listen </a>");
		$('.songs').append("<img src=" + myPlayList[i].imageURL + ">");
		$('.songs').append("<button class='deletebutton'> delete </button>")
	}
}



$( "body" ).on( "click", ".deletebutton" ,function() {
 //($('selector').index(this) );

  console.log($('.deletebutton').index(this));
});

function clearList(){
  $('#songs').empty();
  
  
}


// DOCUMENT READY FUNCTION

  $('button').click(function(){
       addSong();
       clearList();
       displayList();
       
       
       
   });

	
function addSong(){
	
   var titleInput=$("#title").val();
   var artistInput=$("#artist").val(); 
   var mp3URLInput=$("#mp3URL").val(); 
   var imageURLInput=$("#imageURL").val(); 
myPlayList.push({title: titleInput, artist: artistInput, mp3URL: mp3URLInput, imageURL: imageURLInput });

  
}


displayList();

});