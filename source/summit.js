/*
Summit
Copyright 2014, Dennis Malmin


Summit.js is a lightweight, clean and easy to use header script.
It is fast and quick and easily modified to your will.
  Enjoy!
*/



$( document ).ready( function() {
    $( this ).scrollTop( 0 );                 // on page refresh forces page to scrollTop (0), need to find a workaround

	var lastScrollTop   = 0,
	    delta           = 5;


    $( window ).scroll( function( event ) {

	var scrollTop        = $( this ).scrollTop(),
	    scrollAmount     = $( window ).scrollTop(),
	    documentHeight   = $( document ).height(),
	    scrollPercent    = ( scrollAmount / documentHeight ) * 100;     // calculate scroll percent

	// calculate if less than equal to delta

	if ( Math.abs( lastScrollTop - scrollTop ) <= delta )
	    return;

	// scroll code
	if ( scrollTop > lastScrollTop && scrollPercent > 20 )         // scroll down
	{
	    $( '.summit' ).css({
		transform:          'translateY(-300px)',
		MozTransform:       'translateY(-300px)',
		WebkitTransform:    'translateY(-300px)',
		msTransform:        'translateY(-300px)'
	    });                             // scroll down code
	}
	if ( scrollTop < lastScrollTop && scrollPercent > 20 )          // scroll up
	{
	    $( '.summit' )
	     .delay(300)
	     .queue( function(){
	      $( this ).css({
		transform:          'translateY(0px)',
		MozTransform:       'translateY(0px)',
		WebkitTransform:    'translateY(0px)',
		msTransform:        'translateY(0px)'
		});
		$( this ).dequeue();
	    });
	};

	lastScrollTop = scrollTop;          // store lastScrollTop

    });
});
