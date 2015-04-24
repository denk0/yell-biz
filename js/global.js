$(document).ready(function() {
	$('.go-next').click(function() {
		if ($('body').hasClass('fp-viewing-premium')) {
			var nextLink = '#about-site';
		} else{
			var nextLink = $('#fp-nav li a.active').parent().next().children('a').attr('href');
		};
		$(".go-next").attr("href", nextLink);

		$('.overlay').fadeOut(100);
		$('.form').fadeOut(100);
	});
	$('.branding-pages__box').click(function(){
		$('.branding-pages__box').removeClass('index-more');
		$(this).addClass('index-more');
	});
	$('.order').click(function() {
		$('.overlay').fadeIn(100);
		$('.form').fadeIn(100);
	});
	$('.overlay, #fp-nav').click(function() {
		$('.overlay').fadeOut(100);
		$('.form').fadeOut(100);
	});

	$('#fp-nav li a[href="#about-site-2"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#advertising-block"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#top-phrases"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#announcement"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#geotagging"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#site-production"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#delete-competitors"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#video-production"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#slideshow"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#locate-video"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#up-feedback"]').parent().addClass('menu-none');
	$('#fp-nav li a[href="#url"]').parent().addClass('menu-none');

});