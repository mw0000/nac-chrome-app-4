

$( document ).ready(function() {
    $('h1').text('sdfsdf');
    console.log('test');
    
    $.getJSON( "http://dormitorium.kei.pl/nac-api/api.php", function( data ) {
        console.log(data);
        var items = [];
        $.each( data, function( key, val ) {
          //items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
       //
       $.backstretch(data['img_url']);
       $('p a').text(data['title']); 

      });
      



    //var photo = $.JSON.parse('http://dormitorium.kei.pl/nac-api/api.php');
    
});


