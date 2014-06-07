/*Layout functionality to manipulate DOM*/

	function Layout () {

		this.bodyContainer = $("body");

		this.learnMore = '#learn-more';
		this.homeLink = '#home-link';
		this.experience = '#experience';
		this.services = '#services';
		this.contactMe = '#contact-me';
		this.startContact = '#start-contact';
		this.priceSection = '#price-section';
		this.contactDiv = '.contact-div';

		this.init();
		this.menuFixed();
	}

	Layout.prototype.init = function(){
		this.bodyClickEvents();
		this.activeLink();
		this.hoverMenu();
		console.log('init loaded');
	}

	Layout.prototype.bodyClickEvents = function() {
		_this=this;

		$(_this.learnMore).on('click', function(){
			console.log('scrolling to top');
			//var top = document.getElementById('top');
			//top.scrollIntoView(true);
			_this.scrollToSection('#top');
		});

		$(_this.homeLink).on('click', function(){
			console.log('scrolling to top');
			//var top = document.getElementById('top');
			//top.scrollIntoView(true);
			_this.scrollToSection('#start');
		});

		$(_this.experience).on('click', function(){
			console.log('scrolling to experience');
			_this.scrollToSection('#left-section');
		});

		$(_this.services).on('click', function(){
			console.log("scrolling to services...");
			_this.scrollToSection('#price-section');
		});

		$(_this.contactMe).on('click', function(){
			console.log('scrolling to contact div...');
			_this.scrollToSection('.contact-div');
		});

		$(_this.startContact).on('click', function(){
			console.log('scrolling to contact div...');
			_this.scrollToSection('.contact-div');
		});
	}

	Layout.prototype.hoverMenu = function(){
		$('#home-link').hover(function(){
			$('#experience').css('opacity', '0.4');
			$('#services').css('opacity', '0.4');
			$('#contact-me').css('opacity', '0.4');
		}, function(){
			$('#experience').css('opacity', '1');
			$('#services').css('opacity', '1');
			$('#contact-me').css('opacity', '1');
		});
		$('#experience').hover(function(){
			$('#home-link').css('opacity', '0.4');
			$('#services').css('opacity', '0.4');
			$('#contact-me').css('opacity', '0.4');
		}, function(){
			$('#home-link').css('opacity', '1');
			$('#services').css('opacity', '1');
			$('#contact-me').css('opacity', '1');
		});
		$('#services').hover(function(){
			$('#experience').css('opacity', '0.4');
			$('#home-link').css('opacity', '0.4');
			$('#contact-me').css('opacity', '0.4');
		}, function(){
			$('#experience').css('opacity', '1');
			$('#home-link').css('opacity', '1');
			$('#contact-me').css('opacity', '1');
		});
		$('#contact-me').hover(function(){
			$('#experience').css('opacity', '0.4');
			$('#services').css('opacity', '0.4');
			$('#home-link').css('opacity', '0.4');
		}, function(){
			$('#experience').css('opacity', '1');
			$('#services').css('opacity', '1');
			$('#home-link').css('opacity', '1');
		});
	}

	Layout.prototype.scrollToSection = function(id){
		var win = $(window).height();
		console.log(win);

		win = '"' + win + 'px"';
		console.log(win);
		if(id === '.contact-div' || id === '#left-section' || id === '#price-section'){
			var top = $(id).offset().top;
			top = top - 180;

			$('html,body').animate({
        		scrollTop: top
    		}, 800);
		} 
		else {
    		$('html,body').animate({
        		scrollTop: $(id).offset().top
    		}, 800);
    	}
	}

	Layout.prototype.activeLink = function(){
		_this = this;

		$(window).scroll(function(){
			var winPos = $(window).scrollTop();
			console.log(winPos);

			var startPos = 0;
			var topPos = $('#top').offset().top - 140;
			var leftSection = $('#left-section').offset().top - 140;
			var priceSection = $(_this.priceSection).offset().top - 245;
			var contactSection = $(_this.contactDiv).offset().top - 245;

			if(winPos >= startPos && winPos < topPos){
				$(_this.homeLink).css('text-decoration', 'underline');
			} else {
				$(_this.homeLink).css('text-decoration', 'none');
			}

			if(winPos >= topPos && winPos < priceSection){
				$(_this.experience).css('text-decoration', 'underline');
			} else {
				$(_this.experience).css('text-decoration', 'none');
			}

			if(winPos >= priceSection && winPos < contactSection) {
				$(_this.services).css('text-decoration', 'underline');
			} else {
				$(_this.services).css('text-decoration', 'none');
			}

			if(winPos >= contactSection) {
				$(_this.contactMe).css('text-decoration', 'underline');
			} else {
				$(_this.contactMe).css('text-decoration', 'none');
			}
		});
	}

	Layout.prototype.menuFixed = function(){
		var windowHeight = $(window).height();
		$(document).scroll(function(){
			console.log('scrolling...');
			var scrollPosition = $(document).scrollTop();
			console.log(scrollPosition);

			if(scrollPosition > windowHeight){
				$('#top').css('position', 'fixed');
			} else {
				$('#top').css('position', 'absolute');
			}
		});
	}