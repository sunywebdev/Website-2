	$('.grid').isotope({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use element for option
		columnWidth: '.grid-item'
	  }
	})

	// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-btn-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});