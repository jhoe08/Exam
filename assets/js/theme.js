
$( document ).ready( function(){
		var availableTags = [
      "Nowhereville XX 00000",
      "Nowhereville XX 00000",
      "Nowhereville XX 00000",
      "Nowhereville XX 00000",
      "Nowhereville XX 00000",
      "Nowhereville XX 00000",
    ];
	
	$('#zipCity').autocomplete({
		source: availableTags 
	});
});