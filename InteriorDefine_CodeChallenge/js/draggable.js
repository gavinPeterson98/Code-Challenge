$(document).ready(function() {
    dragReady()
    bumper()
});
$(window).on('resize', function() {
    dragReady()
    bumper();
});


function dragReady() {
    $vWidth = $(window).width();
    $('#test').html($vWidth);

    if($vWidth < 900){
        $( "#cc-wrapper" ).draggable({
            axis: 'x', 
            containment: '#draggable-wrapper',
            drag: function(e, ui) {
                $( '#drag-watermark' ).hide();
              }
    })
    }

}

function bumper() {

    let draggableBumper = $(window).width() - ($('#cc-wrapper').offset().left + $('#cc-wrapper').width())

    if($vWidth < 900){
        $('#draggable-wrapper').css('left', draggableBumper).css('width', 1440 + (draggableBumper * -1))  
    } else {
        $('#draggable-wrapper').css('left', 0).css('width', 1440)  

    }

}
