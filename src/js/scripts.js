var main = {

	initialize: function () {
        //main.objectFit();
        main.stellar();
        main.menu();
        //main.intro();
        //main.details();
        //main.modal();
        //main.heroElements();
        //main.introElements();
        //main.bookingElements();
        main.hal();
        main.pageReady();
    },

    
    //---------------------------------------------------------------------------------------------
    // Initialize objectfit
    //---------------------------------------------------------------------------------------------
    objectFit: function() {

		if ( ! Modernizr.objectfit ) {
			$('img.object-fit').each(function () {
			  
				var src = jQuery(this).attr('src');
				
				jQuery(this).parent().css({
					"background-image" : "url('" + src + "')",
					"background-size" : "cover",
					"background-position": "center center"
				});
				
				jQuery(this).css({
					"opacity" : "0"
				});
			});
		}
	},
	
	
	//---------------------------------------------------------------------------------------------
    // STELLAR
    //---------------------------------------------------------------------------------------------
    stellar: function() {
		
		(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|android|ipad|playbook|silk|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
		
		if(jQuery.browser.mobile) {}
		else {
	        $(window).load(function () {
		        $.stellar({
			        hideDistantElements: false,
			        horizontalScrolling: false,
			        responsive: false,
		        });
	        });
	    }
        
    },
    
    //---------------------------------------------------------------------------------------------
    // MENU
    //---------------------------------------------------------------------------------------------
    menu: function() {

		$('.hamburger').click(function(){
			$(this).toggleClass('is-active');
		});
	},
	
	
	//---------------------------------------------------------------------------------------------
    // INTRO
    //---------------------------------------------------------------------------------------------
    intro: function() {
        
        //get height of intro
        
        function introPosition() {
			var introHeight = $('.intro').outerHeight();

			$('.intro').css('margin-top', (introHeight / -2) + 'px').css('margin-bottom', (introHeight / -2) + 'px');
			//$('.properties--column-filter').affix('checkPosition');
		}
		
		introPosition();
		
		$(window).load(function () {
			introPosition();
		}).resize(function () {
			introPosition();
		});
    },
    
    //---------------------------------------------------------------------------------------------
    // DETAILS
    //---------------------------------------------------------------------------------------------
    details: function() {
        
        //get height of intro
        
        function detailsPosition() {
			var detailsHeight = $('.details').innerHeight();

			//$('div.details').css('margin-top', (detailsHeight / -2) + 'px').css('margin-bottom', (detailsHeight / -2) + 'px');
			//$('.properties--column-filter').affix('checkPosition');
		}
		
		detailsPosition();
		
		$(window).load(function () {
			detailsPosition();
		}).resize(function () {
			detailsPosition();
		});
    },
    
    //---------------------------------------------------------------------------------------------
    // MODAL JS
    //---------------------------------------------------------------------------------------------
    modal: function() {
        $( '*[data-dismiss="modal"]' ).click(function() {
	       $('.modal').modal('hide') 
	    });
	    
	    
	    
		//For each element that has a data-wrapper="modal" attrib
	    $( '*[data-wrapper="modal"]' ).each(function() {
		    
		    //Get the value stored in the data-id attribute
		    var dataID = $(this).attr("data-id");
		    
		    //And then, wrap some html around it and use that value as a class and ID for the modal div
		    $( this ).wrap( '<div class="modal ' + dataID + ' fade" id="' + dataID + '" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>' );
		    });
		$('.modal').each(function() {
			$(this).prepend('<div class="modal-close" data-dismiss="modal"></div>');
		});
    },
	
	
	//---------------------------------------------------------------------------------------------
    // HERO ELEMENTS
    //---------------------------------------------------------------------------------------------
	heroElements: function() {
		
		
		
		
		//Due to how object-fit works, we need to give the parent element of the img a defined height (100% won't cut it).
		//Respsonsiveness makes this tricky. Fortuantely, Javascript!
		
		function heroHeight() {
			var heroHeight = $('.hero').height();
			//console.log(heroHeight);
			$('.hero--slide').css('height', heroHeight + 'px');
			//$('.properties--column-filter').affix('checkPosition');
		}
		
		heroHeight();
		
		$(window).load(function () {
			heroHeight();
		}).resize(function () {
			heroHeight();
		});

	},
	
	
	//---------------------------------------------------------------------------------------------
    // INTRO ELEMENTS
    //---------------------------------------------------------------------------------------------
	introElements: function() {
		
		function introHeight() {
			enquire.register("screen and (max-width:991px)", {
	
			    match : function() {
				    var introHeight = $('.tahiti-wrapper .feature .intro').outerHeight();
				    $('.tahiti-wrapper .feature .intro').css('top', introHeight * (-1) + 'px');
				    
				    $('.tahiti-wrapper .feature').css('margin-top', introHeight + 'px');
			    },
			                                
			    unmatch : function() {
				    
					$('.tahiti-wrapper .feature .intro').css('top', '');
					$('.tahiti-wrapper .feature').css('margin-top', '');
					
			    }
			});
			
			enquire.register("screen and (min-width:992px)", {
	
			    match : function() {
				    $('.tahiti-wrapper .feature .intro').css('top', '');
					$('.tahiti-wrapper .feature').css('margin-top', '');
			    }
			});
		}
		
		introHeight();
		
		$(window).load(function () {
			introHeight();
		}).resize(function () {
			introHeight();
		});

	},
	
	
	//---------------------------------------------------------------------------------------------
    // BOOKING ELEMENTS
    //---------------------------------------------------------------------------------------------
	bookingElements: function() {
		
		function bookingHeight() {
			enquire.register("screen and (max-width:991px)", {
	
			    match : function() {
				    var bookingHeight = $('.tahiti-wrapper .feature .booking').outerHeight();
				    $('.tahiti-wrapper .feature .booking').css('bottom', bookingHeight * (-1) + 'px');
				    
				    $('.tahiti-wrapper .feature').css('margin-bottom', bookingHeight + 'px');
			    },
			                                
			    unmatch : function() {
				    
					$('.tahiti-wrapper .feature .booking').css('bottom', '');
					$('.tahiti-wrapper .feature').css('margin-bottom', '');
					
			    }
			});
		}
		
		enquire.register("screen and (min-width:992px)", {
	
			    match : function() {
				    $('.tahiti-wrapper .feature .booking').css('bottom', '');
					$('.tahiti-wrapper .feature').css('margin-bottom', '');
			    }
			});
		
		bookingHeight();
		
		$(window).load(function () {
			bookingHeight();
		}).resize(function () {
			bookingHeight();
		});

	},
	
	//---------------------------------------------------------------------------------------------
    // I'M SORRY, DAVE. BUT I CAN'T DO THAT
    //---------------------------------------------------------------------------------------------
    hal: function() {

		var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '/assets/media/audio/hal.mp3');
        $.get();




        $('.details--expert--image').click(function() {
	        audioElement.play();
        });


	},
	
	//---------------------------------------------------------------------------------------------
    // PAGE READY
    //---------------------------------------------------------------------------------------------
    pageReady: function() {

		$(window).load(function () {
			$('body').addClass('dom-ready');
		});
	}
}

$(document).ready(main.initialize);