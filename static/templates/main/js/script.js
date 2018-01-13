$(document).ready(function(){


	$('.main-banner-wrap.off .btn-down').addClass('hide');
	$('.chk-toggle').on('click', function(){  
	    if($(this).children("input").is(":checked")){  
	        $('.main-banner-wrap').removeClass('off');
	        $('.main-banner-wrap .banner-wrap').removeClass('close');
	        $('.main-banner-wrap .btn-down').removeClass('hide');
	    }else{  
	        $('.main-banner-wrap').addClass('off');
	        $('.main-banner-wrap .banner-wrap').addClass('close');
	        $('.main-banner-wrap .btn-down').addClass('hide');
	    }  
	});





	//animation favorites, compare, buy
	function animateImageToCart(image, cont) {
		imagePosition = image.offset(); // получаем позицию изображения
		contPos = cont.offset(); // получаем позицию корзины
		contPos.left = contPos.left + ( cont.width() / 2 ); // если корзина справа, то плюсуем, чтобы получить центр, иначе минусуем
		contPos.top = contPos.top + ( cont.height() / 2 ); // формальность
		$('body').prepend('<div id="imageToCart"><img src="'+ image.attr('src') +'"></div>'); // вставляем картинку в самом низу страницы
		// моментально накладываем нашу новую картинку поверх существующей
		$('#imageToCart img').css({
		  'position': 'absolute',
		  'z-index': '1999',
		  'left': imagePosition.left + 'px',
		  'top': imagePosition.top + 'px',
		  'width': image.width() + 'px',
		  'height': image.height() + 'px'
		});
		// поехала анимация в направлении корзины
		$('#imageToCart img').animate({
			  top: contPos.top + 'px',
			  left: contPos.left + 'px',
			  opacity: '0',
			  width: image.width() / 8,
			  height: image.height() / 8
			  }, 1000, function() {
			  $('#imageToCart').remove();
		  });
		}
	$('.cat-item .btn-compare').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-item').find('.photo-block').children('img');
			container=$('.header .count-block .compare');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cat-list-item .btn-compare').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-list-item').find('.photo-block').children('img');
			container=$('.header .count-block .compare');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.compare-item .btn-compare').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.compare-item').find('.photo-block').children('img');
			container=$('.header .count-block .compare');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.product-item-box .btn-compare').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$('.product-photos-box .main-photo .item.active img');
			container=$('.header .count-block .compare');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.product-item-box .btn-postpone').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$('.product-photos-box .main-photo .item.active img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cart-box .btn-postpone').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cart-box').find('img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cart-box .btn-basket').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cart-box').find('img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cat-item .btn-favorites').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-item').find('.photo-block').children('img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cat-list-item .btn-favorites').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-list-item').find('.photo-block').children('img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.compare-item .btn-favorites').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.compare-item').find('.photo-block').children('img');
			container=$('.header .count-block .favorites');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cat-item .btn-cart').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-item').find('.photo-block').children('img');
			container=$('.header .count-block .cart');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.compare-item .btn-cart').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.compare-item').find('.photo-block').children('img');
			container=$('.header .count-block .cart');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})
	$('.cat-list-item .btn-cart').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			imageAnim=$(this).parents('.cat-list-item').find('.photo-block').children('img');
			container=$('.header .count-block .cart');
			animateImageToCart(imageAnim, container);
			$(this).addClass('active');
		}
		return false;
	})


	//btn up
	if ($(window).scrollTop()>="250") $("#btn-up").fadeIn("slow");
	$(window).scroll(function(){
		if ($(window).scrollTop()<="250") $("#btn-up").fadeOut("slow")
		else $("#btn-up").fadeIn("slow");
	});
	 $("#btn-up").click(function(){$("html,body").animate({scrollTop:0},"slow");return false;})


	// header fix
	if (!!$('.header .bottom-panel').offset()) { // make sure ".bottom-panel" element exists
		var headerTop = $('.header .bottom-panel').offset().top;
		$(window).scroll(function(){
			var wrapTop = $(window).scrollTop();
			if (headerTop < wrapTop){
				$('.wrap').addClass('menu-fixed')
			}
			else {
				$('.wrap').removeClass('menu-fixed')
			}
		});
	}


	//breadcrumbs tabs
	$('.breadcrumbs-tabs').tabs();


	//catalog
	$('.catalog-inner-box .btn-toggle').on('click', function() {
		if ($(this).parent('.item').hasClass('active')) {
			$('.catalog-inner-box .active').removeClass('active');
		} else {
			$('.catalog-inner-box .active').removeClass('active');
			$(this).parent('.item').addClass('active');
		}
		return false;
	})


	//catalog filter
	$('.main-catalog-wrap .mobile-title .btn-toggle').on('click', function() {
		$('.catalog-filter-wrap').toggleClass('active');
		return false;
	})
	$('.filter-wrap .f-section.open .f-hidden').slideDown(200);
	$('.filter-wrap .f-title').on('click', function() {
		if ($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
			$(this).next('.f-hidden').slideUp(200);
		} else {
			$(this).parent().addClass('open');
			$(this).next('.f-hidden').slideDown(200);
		}
		return false;
	})


	//main slider
	$('.main-banner-wrap.slider .main-banner').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		mouseDrag: false,
		touchDrag: false
	})

	//popup cat slider



	//cart
	$('.cart-box #'+$('.cart-box .incart-block .btn.active').attr('data-tab')).show(0);
	$('.cart-box .incart-block .btn').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.cart-box .incart-block .btn').removeClass('active');
			$(this).addClass('active');
			$('.cart-box .cart-wrap').slideUp(200);
			$('.cart-box #'+$(this).attr('data-tab')).slideDown(200);
		}
		return false;
	})


	//contacts
	$('.contact-section.open .hidden').slideDown(0);
	$('.contact-section .title-block a').on('click', function() {
		if ($(this).parents('.contact-section').hasClass('open')) {
			$(this).parents('.contact-section').removeClass('open')
			.find('.hidden').slideUp(200);
		} else {
			$(this).parents('.contact-section').addClass('open')
			.find('.hidden').slideDown(200);
		}
		return false;
	})


	//faq box
	$('.faq-box .btn-text-more').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			.parents('.item').removeClass('open');
		} else {
			$(this).addClass('active')
			.parents('.item').addClass('open');
		}
		return false;
	})


	//new slider
	$('.new-photos-wrap .slider-box .slider').owlCarousel({
		responsive: {
			0: {
				items: 2
			},
			400: {
				items: 3
			},
			560: {
				items: 4
			},
			640: {
				items: 4
			},
			740: {
				items: 5
			},
			900: {
				items: 6
			},
			960: {
				items: 4
			},
			1100: {
				items: 5
			}
		},
		loop: true,
		nav: true,
		dots: false
	})
	$('.new-photos-wrap .slider-box .item a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.new-photos-wrap .slider-box .active').removeClass('active');
			$(this).addClass('active');
			$('.new-photos-wrap .photo-box .active').removeClass('active');
			$('.new-photos-wrap .photo-box .item').eq($(this).attr('data-num')).addClass('active');
		}
		return false;
	})


	//side menu
	$('.side-menu .btn-toggle').on('click', function() {
		$(this).toggleClass('active');
		return false;
	})
	$('.side-menu ul a').on('click', function() {
		if ($(this).next('ul').length>0) {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open')
				.next('ul').slideUp(200);
			} else {
				$(this).addClass('open')
				.next('ul').slideDown(200);
			}
			return false;
		}
	})


	//down
	$('.btn-down').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-50}, 1000);
			e.preventDefault();
		return false;
	});


	//mobile accordeon.open
	$('.mobile-accordeon.open .inner-mobile').css('display', 'block');
	$('.mobile-accordeon .title-toggle').on('click', function() {
		if ($('.wrap').width()<768) {
			if ($(this).parents('.mobile-accordeon').hasClass('open')) {
				$(this).parents('.mobile-accordeon').removeClass('open')
				.find('.inner-mobile').slideUp(200);
			} else {
				$(this).parents('.mobile-accordeon').addClass('open')
				.find('.inner-mobile').slideDown(200);
			}
		}
		return false;
	})



	//field counter
	$('.field-counter .minus').bind('click', function(){
	    var cnt=$(this).parents('.field-counter').find('input').val();
	    cnt=parseInt(cnt);
	    if (cnt>0) {
	        $(this).parents('.field-counter').find('input').val(cnt-1);
	    }
	    return false;
	})
	$('.field-counter .plus').bind('click', function(){
	    var cnt=$(this).parents('.field-counter').find('input').val();
	    $(this).parents('.field-counter').find('input').val(cnt-1+2);
	    return false;
	})

	//search popup
	$('.header .search-block input[type="text"]').on('focus', function() {
		$('.header .search-popup').fadeIn(200);
		$('.overlay').show(0);
	})
	$('.header .search-block input[type="text"]').on('focusout', function() {
		$('.header .search-popup').fadeOut(200);
		$('.overlay').hide(0);
	})

	//popup callback
	$('#popup-callback').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 375,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-page popup-callback',
		title: 'Заказать обратный звонок'
	})
	$('.btn-callback').on('click', function() {
		$('#popup-callback').dialog('open');
		return false;
	})

	//popup callback01
	$('#popup-callback01').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 375,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-page popup-callback',
		title: 'Нашли дешевле?'
	})
	$('.btn-callback01').on('click', function() {
		$('#popup-callback01').dialog('open');
		return false;
	})

	//popup callback02
	$('#popup-callback02').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 375,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-page popup-callback',
		title: 'У нас лучшие цены, узнать почему'
	})
	$('.btn-callback02').on('click', function() {
		$('#popup-callback02').dialog('open');
		return false;
	})

	//popup callback03
	$('#popup-callback03').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 375,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-page popup-callback',
		title: 'Как получить скидку?'
	})
	$('.btn-callback03').on('click', function() {
		$('#popup-callback03').dialog('open');
		return false;
	})

	//popup cart
	$('#popup-cart').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 650,
		open: function() {
			$('.cat-item-slider .slider').owlCarousel({
				responsive: {
					0: {
						items: 1
					}, 
					640: {
						items: 2
					},
				},
				loop: true,
				nav: true,
				dots: false
			})
		},
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-page popup-cart-wrap',
		title: 'Товар успешно добавлен в корзину!'
	})
	$('.cat-item .btn-buy').on('click', function() {
		$('#popup-cart').dialog('open');
		return false;
	})
	$('.compare-item .btn-buy').on('click', function() {
		$('#popup-cart').dialog('open');
		return false;
	})
	$('.cat-list-item .btn-buy').on('click', function() {
		$('#popup-cart').dialog('open');
		return false;
	})
	$('.product-item-box .btn-buy').on('click', function() {
		$('#popup-cart').dialog('open');
		return false;
	})


	//footer 
	$('.footer .menu a').on('click', function() {
		if ($('.wrap').width()<768) {
			if ($(this).parent('li').hasClass('open')) {
				$(this).parent('li').removeClass('open')
				.find('ul').slideUp(200);
			} else {
				$(this).parent('li').addClass('open')
				.find('ul').slideDown(200);
			}
			return false;
		}
	})
	$('.footer .title').on('click', function() {
		if ($('.wrap').width()<768) {
			if ($(this).parent().hasClass('open')) {
				$(this).parent().removeClass('open')
				.find('.hidden-mobile').slideUp(200);
			} else {
				$(this).parent().addClass('open')
				.find('.hidden-mobile').slideDown(200);
			}
			return false;
		}
	})


	//mobile menu
	$('.mobile-menu li a').on('click', function() {
		if ($(this).next('ul').length>0) {
			if ($(this).parent('li').hasClass('open')) {
				$(this).parent('li').removeClass('open')
				.find('ul').slideUp(200);
			} else {
				$(this).parent('li').addClass('open')
				.find('ul').slideDown(200);
			}
			return false;
		}
	})
	$('.btn-menu-toggle').on('click', function() {
		$('.mobile-menu').fadeIn(200);
		$('.overlay').addClass('menu').show(0);
		return false;
	})
	$('.mobile-menu .btn-toggle').on('click', function() {
		$('.overlay').removeClass('menu').hide(0);
		$('.mobile-menu').fadeOut(200);
		return false;
	})

	//overlay
	$('.overlay').on('click', function() {
		$(this).removeClass('menu').hide(0);
		$('.mobile-menu').fadeOut(200);
	})


	//popup city
	$('#popup-city').dialog({
		autoOpen: false, //eee
		modal: true,
		resizable: false,
		draggable: false,
		width: 373,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: '',
		title: '',
		position: { my: 'left top', at: 'left bottom', of: $('.header .city-block') }
	})
	$('.btn-city').on('click', function() {
		$('#popup-city').dialog('open');
		return false;
	})


	//popup city-select
	$('#popup-city-select').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 400,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: '',
		title: '',
		position: { my: 'left top', at: 'left bottom', of: $('.header .city-block') }
	})
	$('.btn-city-select').on('click', function() {
		$('#popup-city').dialog('close');
		$('#popup-city-select').dialog('open');
		return false;
	})


	$(document).on("click", function (event) {
        if ($(".ui-dialog").has(event.target).length === 0) $('[id^="popup"]').dialog('close');
    });


    //range slider
    $('#slider01').slider({
    	range: true,
    	min: 0,
    	max: 200000,
    	values: [50000, 170000],
    	slide: function( event, ui ) {
    		$('#min01').val(ui.values[0]);
    		$('#max01').val(ui.values[1]);
      }
    })
    $('#min01').val($('#slider01').slider('values', 0));
    $('#max01').val($('#slider01').slider('values', 1));
    $('#min01').bind('focusout', function() {
    	if ($(this).val()>$('#slider01').slider('values', 1)) {
    		$(this).val($('#slider01').slider('values', 0));
    	}
    	$('#slider01').slider('values', 0, $(this).val());
    })
    $('#max01').bind('focusout', function() {
    	if ($(this).val()<$('#slider01').slider('values', 0)) {
    		$(this).val($('#slider01').slider('values', 1));
    	}
    	$('#slider01').slider('values', 1, $(this).val());
    })
    $('#min01').bind('keypress', function(e) {
    	if (e.keyCode==13) {
    		if ($(this).val()>$('#slider01').slider('values', 1)) {
    			$(this).val($('#slider01').slider('values', 0));
    		}
    		$('#slider01').slider('values', 0, $(this).val());
    	}
    })
    $('#max01').bind('keypress', function(e) {
    	if (e.keyCode==13) {
    		if ($(this).val()<$('#slider01').slider('values', 0)) {
    			$(this).val($('#slider01').slider('values', 1));
    		}
    		$('#slider01').slider('values', 1, $(this).val());
    	}
    })




    //product photos box
    $('.product-photos-box .main-photo .item').eq(0).addClass('active');
    $('.product-item-box [data-slide="01"]').addClass('active');
    $('.product-photos-box .slider-horizontal .slider').owlCarousel({
    	responsive: {
    		0: {
    			items: 2
    		},
    		400: {
    			items: 3
    		},
    		550: {
    			items: 4
    		},
    		2000: {
    			items: 4
    		}
    	},
    	loop: true,
    	nav: true,
    	dots: false
    })
    $('.product-photos-box .slider-vertical ul').bxSlider({
    	mode: 'vertical',
    	responsive: false,
    	minSlides: 4,
    	maxSlides: 4
    })
    $('.product-item-box [data-slide]').on('click', function() {
    	var numberSlide=$(this).attr('data-slide');
    	if ($(this).hasClass('active')) {

    	} else {
    		$('.product-item-box [data-slide]').removeClass('active');
    		$('.product-item-box [data-slide='+numberSlide+']').addClass('active');
    		$('.product-photos-box .main-photo .item').removeClass('active');
    		$('.product-photos-box [data-num='+numberSlide+']').addClass('active');
    	}
    	return false;
    })
    $('.product-section .section-title').on('click', function() {
    	$(this).toggleClass('active');
    	return false;
    })
    if (!!$('.product-menu').offset()) { // make sure ".product-menu" element exists
		wTop = $(window).scrollTop();
		if (wTop>$('.product-ext-box').offset().top-200) {
			$('.product-menu').addClass('fixed');
		} else {
			$('.product-menu').removeClass('fixed');
			$('.product-menu').css('top', $('.product-ext-box').offset().top+20);
		}
    	$(window).scroll(function(){
    		wTop = $(window).scrollTop();
    		if (wTop>$('.product-ext-box').offset().top-200) {
    			$('.product-menu').addClass('fixed');
    		} else {
    			$('.product-menu').removeClass('fixed');
    			$('.product-menu').css('top', $('.product-ext-box').offset().top+20);
    		}

    		var s01Top=$('#section01').offset().top-100;
    		var s02Top=$('#section02').offset().top-100;
    		var s03Top=$('#section03').offset().top-100;
    		var s04Top=$('#section04').offset().top-100;
    		var s05Top=$('#section05').offset().top-100;
    		var s06Top=$('#section06').offset().top-100;
    		if (wTop>s01Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section01"]').addClass('active');
    		}
    		if (wTop>s02Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section02"]').addClass('active');
    		}
    		if (wTop>s03Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section03"]').addClass('active');
    		}
    		if (wTop>s04Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section04"]').addClass('active');
    		}
    		if (wTop>s05Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section05"]').addClass('active');
    		}
    		if (wTop>s06Top) {
    			$('.product-menu .active').removeClass('active');
    			$('.product-menu a[href="#section06"]').addClass('active');
    		}
    	});
    }
    $('.product-menu a[href*=#]').bind("click", function(e){
    	var anchor = $(this);
    	$('html, body').stop().animate({
    		scrollTop: $(anchor.attr('href')).offset().top-90}, 1000);
    		e.preventDefault();
    	return false;
    });
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('Youtube', {
			events: {'onReady': onPlayerReady}
		});
	}
    $('.video-gallery-box [data-slide="01"]').addClass('active');
    $('.video-gallery-box [data-num="01"]').addClass('active');
    $('.video-gallery-box [data-slide]').on('click', function() {
    	var numVideo=$(this).attr('data-slide');
    	if ($(this).hasClass('active')) {
    
    	} else {
    		$('.video-gallery-box [data-slide]').removeClass('active');
    		$('.video-gallery-box [data-slide='+numVideo+']').addClass('active');
    		$('.video-gallery-box .main-video .item').removeClass('active');
    		$('.video-gallery-box [data-num='+numVideo+']').addClass('active');
    		function onPlayerReady(event) {
	    		player.pauseVideo();
			}
    	}
    	return false;
    })
    $('.video-gallery-box .slider-vertical ul').bxSlider({
    	mode: 'vertical',
    	responsive: false,
    	minSlides: 2,
    	maxSlides: 2
    })
    $('.video-gallery-box .slider-horizontal .slider').owlCarousel({
    	items: 2,
    	responsive: false,
    	loop: true,
    	nav: true,
    	dots: false
    })
	$('.accessories-slider .slider').owlCarousel({
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1220: {
				items: 3
			},
		},
		loop: true,
		nav: true,
		dots: false
	})
	$('.frm-add-opin .row-btn .btn').on('click', function() {
		$(this).parent().toggleClass('active');
		return false;
	})


	//popup stock
	$('.stock-tabs').tabs();
	$('#popup-stock').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
		width: 650,
		show: { effect: "fade", duration: 400 },
		hide: { effect: "fade", duration: 400 },
		dialogClass: 'popup-stock',
		title: '',
		open: function(event, ui) {
		    var t = $(this).parent();
		    var w = $('.wrap');
		    t.css({
		        left: (w.width() / 2) - (t.width() / 2)
		    });
		}
	})
	$('.stock-info.instock').on('click', function() {
		$('#popup-stock').dialog('open');
		return false;
	})
	$('.btn-tab01').on('click', function() {
		if ($('.wrap').width()<640) {
		} else {
			$('#popup-stock').dialog('open');
		}
		return false;
	})
	$('.btn-tab02').on('click', function() {
		if ($('.wrap').width()<640) {
		} else {
			$('#popup-stock').dialog('open');
			$('.stock-tabs').tabs({active: 1});
		}
		return false;
	})
	$('.btn-tab03').on('click', function() {
		if ($('.wrap').width()<640) {
		} else {
			$('#popup-stock').dialog('open');
			$('.stock-tabs').tabs({active: 2});
		}
		return false;
	})

	


	//compare box
	$('.compare-box .table-panel, .compare-box .top-panel-wrap, .compare-box .top-panel').width($('.compare-box table').width());

	if (!!$('.compare-box').offset()) { // make sure ".compare-box" element exists
		var stickyTop = $('.compare-box').offset().top;
		$(window).scroll(function(){
			var windowTop = $(window).scrollTop();
			if (stickyTop < windowTop){
				$('.compare-box').addClass('fixed').addClass('short');
				$('.compare-box.fixed .top-panel-wrap .inner-wrap')
				.css('left', ($('.compare-box .table-panel').position().left + 'px'));
				$('.compare-box .scroll-wrap').scroll(function() {
					$('.compare-box.fixed .top-panel-wrap .inner-wrap')
					.css('left', ($('.compare-box .table-panel').position().left + 'px'));
				})
			}
			else {
				$('.compare-box').removeClass('fixed').removeClass('short');
				$('.compare-box.fixed .top-panel-wrap .inner-wrap')
				.css('left', ($('.compare-box .table-panel').position().left + 'px'));
				$('.compare-box .scroll-wrap').scroll(function() {
					$('.compare-box.fixed .top-panel-wrap .inner-wrap')
					.css('left', ($('.compare-box .table-panel').position().left + 'px'));
				})
			}
		});
	}
	$('.compare-box.fixed .top-panel-wrap .inner-wrap')
	.css('left', ($('.compare-box .table-panel').position().left-25 + 'px'));
	$('.compare-box .scroll-wrap').scroll(function() {
		$('.compare-box.fixed .top-panel-wrap .inner-wrap')
		.css('left', ($('.compare-box .table-panel').position().left-25 + 'px'));
	})





});


$(window).load(function() {
	//desktop menu
	$('.desktop-menu>ul>li').each(function() {
		if ($(this).position().top>0) {
			$(this).clone().appendTo('#more');
			$(this).addClass('hide');
		}
	})
});
$(window).resize(function() {
	//desktop menu
	$('#more').empty();
	$('.desktop-menu .hide').removeClass('hide');
	$('.desktop-menu>ul>li').each(function() {
		if ($(this).position().top>0) {
			$(this).clone().appendTo('#more');
			$(this).addClass('hide');
		}
	})
});
$(window).load(function() {
      $('.header .desktop-menu>ul').addClass('active');
});