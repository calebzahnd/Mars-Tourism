var main = {

	initialize: function () {
        main.objectFit();
        main.intro();
        main.landscape();
        main.details();
        //main.modal();
        //main.heroElements();
        //main.introElements();
        //main.bookingElements();
        
        main.pageReady();
    },

    
    //---------------------------------------------------------------------------------------------
    // Initialize objectfit
    //---------------------------------------------------------------------------------------------
    objectFit: function() {

		if ( ! Modernizr.objectfit ) {
			$('.object-fit').each(function () {
			  
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
    // LANDSCAPE
    //---------------------------------------------------------------------------------------------
    landscape: function() {
        
        $.stellar({
	        hideDistantElements: false,
        });
    },
    
    //---------------------------------------------------------------------------------------------
    // DETAILS
    //---------------------------------------------------------------------------------------------
    details: function() {
        
        //get height of intro
        
        function detailsPosition() {
			var detailsHeight = $('.details').outerHeight();

			$('.details').css('margin-top', (detailsHeight / -2) + 'px').css('margin-bottom', (detailsHeight / -2) + 'px');
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
    // PAGE READY
    //---------------------------------------------------------------------------------------------
    pageReady: function() {

		$(window).load(function () {
			$('body').addClass('dom-ready');
		});
	},
}

$(document).ready(main.initialize);