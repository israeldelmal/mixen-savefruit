// Navegación
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	
	$('body, html').stop(true, true).animate({
		scrollTop: $(Item).offset().top
	}, 1000);
});

$('body > button').on('click', function(event) {
	event.preventDefault();
	$('body > nav').toggleClass('active-nav');

	$('body > button > span').toggleClass('active-span');

	if ($(window).width() <= 440) {
		$('.item-menu').on('click', function(event) {
			event.preventDefault();
			let Item = $(this).attr('href');

			$('body > nav').removeClass('active-nav');

			$('body > button > span').removeClass('active-span');
			
			$('body, html').stop(true, true).animate({
				scrollTop: $(Item).offset().top
			}, 1000);
		});
	}
});