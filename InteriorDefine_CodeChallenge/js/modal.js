$('.modal-tag').on('click', function() {
    let clickedModal = $( this )
    $( this ).children( '.modal' ).toggle();    
    $( ".modal" ).each(function() {
        console.log ($(this)[0].parentNode)
        console.log (clickedModal[0])
       if ( $( this ).is( ":visible" ) && $(this)[0].parentNode != clickedModal[0] ) {
           $( this ).hide();
       } 
    });
})
