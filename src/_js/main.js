/* eslint no-undef: "off" */

// Init timeago
timeago().render(document.querySelectorAll('.timeago'));

// Navbar behaviour on scroll
$(window).scroll(function() {
	onScroll();
});

function onScroll() {
	if ($(this).scrollTop() > 0) {
		$('.navbar').addClass('fixed-top navbar-dark bg-black');
		$('.navbar').removeClass('absolute-top navbar-light bg-white');
	}
	else {
		$('.navbar').addClass('absolute-top navbar-light bg-white');
		$('.navbar').removeClass('fixed-top navbar-dark bg-black');
	}
}

onScroll();

// Search input behaviour on focus
$('.js-search')
	.on('focus', function() {
		$(this).data('placeholder', $(this).attr('placeholder')); // Store for blur
		$(this).attr('placeholder', $(this).attr('title'));
	})
	.on('blur', function() {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
