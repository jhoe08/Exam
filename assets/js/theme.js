
$( document ).ready( function(){
		var availableTags = [
      "Nowhereville XX 00000",
      "Nowhereville XX 12345",
      "Nowhereville XX 23456",
      "Nowhereville XX 34567",
      "Nowhereville XX 45678",
      "Nowhereville XX 56789",
    ];
	
	$('#zipCity').autocomplete({ //$, (), !
		source: availableTags
	});
});