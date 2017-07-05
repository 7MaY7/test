(function(){

		//navigation: scroll to
	$('#home_nav, #products_nav, #about_nav, #contact_nav')
		.click(function(){
		var par = $(this).attr('id');
		var parName = '';
		console.log(par);

		if(par === "home_nav"){
					parName = ".whyUs";
		}else if(par === "products_nav"){
			parName = ".ourProducts";
		}else if (par === "about_nav"){
			parName = ".aboutUs";
		}else if (par === "contact_nav"){
			parName = ".getInTouch";
		}else{
			parName = "html,body";
		}
					
		console.log(parName);
		if(parName === ".ourProducts"){
			$('html,body').animate({scrollTop: $(parName).offset().top-70},'slow');
		}else{
			$('html,body').animate({scrollTop: $(parName).offset().top},'slow');
		}
	});

	// why choose us panels
	$(".panel").on({
		mouseenter: function () {
				$(this).children().last().fadeIn(500);
		},
		mouseleave: function () {
				$(this).children().last().fadeOut(500);
		}
	});

	$(".onHover").fadeOut(0);

	//about us scills animation
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 1500) {
			$('.technologies').fadeIn(1000, function () {
				$(".gradPs").animate({width: '79%'},1000, function () {
					$(".gradHc").animate({width: '90%'},1000, function () {
						$(".gradJs").animate({width: '69%'},1000, function () {
							$(".gradWp").animate({width: '92%'},1000, function () {
							});
						});
					});
				});
			});			
		} else {
			$('.technologies').fadeOut(0);
			
		}
	});
	
})();