

var apikey = 'c9e6e65a0a014ae1a2257f9ad429dee540b3a498'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
var query

function searchCallback(results) {
    console.log(results);
   $('body').append('<p>The results of our APi search for ' + query + 'returned  ' + results.length +'</p>');
	        for(var i=0; i<results.length; i++){
	        
	        $('body').append('<div><img src =' + results[i].image["small_url"] + '>'+ results[i].name + '</div>');
    
}
$("body").on('click', 'img', function(event){  
$(this).
	alert("We rock!");

	        }
}

function 
$(document).ready(function() {

	 $("body").on('click', '.confirmSearch', function(event){      
      event.preventDefault();     
	query = $("#gameForm :input").val() ;
	// Start the search here!
	// search('superman');
	search(query);


		});

	   		});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        
	        searchCallback(data.results);

	    }
	        
	   
	});
}








