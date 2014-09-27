// Custom site-wide Animations
$(document).ready(function(){

//Home page title slide animation 
function slide() {
    $("#slide1").slideDown('slow').delay(5000).slideUp('slow').delay(5000);
    $("#slide2").slideUp(1).delay(6000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
    $("#slide3").slideUp(1).delay(12000).slideDown('slow').delay(5000).slideUp('slow');
    $("#slide4").slideUp(1).delay(18000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
    $("#slide5").slideUp(1).delay(24000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
    $("#slide6").slideUp(1).delay(30000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
    $("#slide7").slideUp(1).delay(36000).slideDown('slow').delay(5000).slideUp('slow' , slide);
    }   

slide();

function powerloop() {
    $(".lightson").animate({opacity: "0.50"}, 1350, "easeOutSine").delay(300).animate({opacity: "1"}, 1350, "easeInSine").delay(300);

    setTimeout(powerloop, 3300);
}

powerloop();

//Slide down toolbar when waypoint reached
$('h3#nav_print').waypoint(function(direction) {
   if (direction === 'down') {
    $( "nav.current" ).switchClass( "pushmenu-push-up", "pushmenu-push-down", 600, "easeOutQuad" );
    $( ".left_tab" ).switchClass( "left_tab-push-left", "left_tab-push-right", 750, "easeOutQuad" );
    $( ".right_tab" ).switchClass( "right_tab-push-left", "right_tab-push-right", 750, "easeOutQuad" );
	} // do this on the way down
   
   else {
    $( "nav.current" ).switchClass( "pushmenu-push-down", "pushmenu-push-up", 600, "easeInQuad");
    $( ".left_tab" ).switchClass( "left_tab-push-right", "left_tab-push-left", 750, "easeInQuad" );
    $( ".right_tab" ).switchClass( "right_tab-push-right", "right_tab-push-left", 750, "easeInQuad" );
 // do this on the way back up through the waypoint
   }
});


var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_Opera = navigator.userAgent.indexOf("Presto") > -1;

// Safari Targeting - Thicker Fonts
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $(".slidedown *, .x_nav, .toolbar nav .menu a, .overlay_text_mask *").css("font-weight" , "normal");
    $(".overlay_text_mask *").css("font-weight" , "300");
    $("nav.current").css("width" , "509px");
    $("#triangle-topleft").css("marginLeft" , "509px");
    $(".info-box header").css("font-weight" , "300");
}

//Contact tooltip - not in use
$("#contact_btn").hover(function(){
    $("#tooltip").fadeIn("slow");
},
function(){
    $("#tooltip").fadeOut("slow");
});



//User Info Slider
    $(".left_tab span").click(function(){
if ($(".left_tab .icon-user").is(':visible')) {
    $(this).switchClass( "icon-user", "icon-close", 500, function(){
        $(".-lft").animate({marginLeft: "0px" , opacity: "1"}, 600, "easeOutQuad");
    });

} else {
    $(".left_tab .icon-close").switchClass( "icon-close", "icon-user", 500, function(){
        $(".-lft").animate({marginLeft: "-310px" , opacity: "0"}, 600, "easeInQuad");
    });

    }
});

//Home Nav User
$("#nav_resume a").click(function() {
    $(".left_tab span").switchClass( "icon-user", "icon-close", 500, function(){
        $(".-lft").animate({marginLeft: "0px" , opacity: "1"}, 600, "easeOutQuad");
    });
});

$("#user-close").click(function() {
    $(".left_tab span").switchClass( "icon-close", "icon-user", 500, function(){
        $(".-lft").animate({marginLeft: "-310px" , opacity: "0"}, 600, "easeInQuad");
    });
});


//Contact Slider
    $(".right_tab span").click(function(){
if ($(".right_tab .icon-mail").is(':visible')) {
    $(this).switchClass( "icon-mail", "icon-close", 500, function(){
        $(".-rt").animate({marginRight: "0px" , opacity: "1"}, 600, "easeOutQuad");
    });

} else {
    $(".right_tab .icon-close").switchClass( "icon-close", "icon-mail", 500, function(){
        $(".-rt").animate({marginRight: "-310px" , opacity: "0"}, 600, "easeInQuad");
    });

    }
});

//Home Nav Contact
$("#nav_contact a").click(function() {
    $(".right_tab span").switchClass( "icon-mail", "icon-close", 500, function(){
        $(".-rt").animate({marginRight: "0px" , opacity: "1"}, 600, "easeOutQuad");
    });
});

$("#mail-close").click(function() {
    $(".right_tab span").switchClass( "icon-close", "icon-mail", 500, function(){
        $(".-rt").animate({marginRight: "-310px" , opacity: "0"}, 600, "easeInQuad");
    });
});


			
//About box animation 
		$("#oc_about").click(function () {
    if ($('.button-area #open-about').is(':visible')) {
    
            $(".button-area #open-about").fadeOut("fast" , function () {
               
                    $(".button-area #close-about").fadeIn("fast" , function () {
                        $("#about-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 1000);
                    });
             
            });
   
    } else {
      
            $(".button-area #close-about").fadeOut("fast" , function () {
               
                    $(".button-area #open-about").fadeIn("fast" , function () { 
                        $("#about-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 700); 
                    });
              
            });
      
    }
}); 

//Interface box animation 
		$("#oc_interface").click(function () {
    if ($('.button-area #open-interface').is(':visible')) {
      
            $(".button-area #open-interface").fadeOut("fast" , function () {
              
                    $(".button-area #close-interface").fadeIn("fast" , function () {
                        $("#interface-box").animate({height:"2400" , paddingTop: "900px", marginTop: "-900px"}, 1000);
                    });
             
            });
       
    } else {
     
            $(".button-area #close-interface").fadeOut("fast" , function () {
               
                    $(".button-area #open-interface").fadeIn("fast" , function () { 
                        $("#interface-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 700); 
                    });
             
            });
        
    }
}); 


	//Print box animation 
		$("#oc_print").click(function () {
    if ($('.button-area #open-print').is(':visible')) {
       
            $(".button-area #open-print").fadeOut("fast" , function () {
               
                    $(".button-area #close-print").fadeIn("fast" , function () {
                        $("#print-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 1000);
                    });
              
            });
        
    } else {
        
            $(".button-area #close-print").fadeOut("fast" , function () {
               
                    $(".button-area #open-print").fadeIn("fast" , function () { 
                        $("#print-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 700); 
                    });
               
            });
        
    }
}); 

//Concepts box animation 
		$("#oc_concepts").click(function () {
    if ($('.button-area #open-concepts').is(':visible')) {
       
            $(".button-area #open-concepts").fadeOut("fast" , function () {
                
                    $(".button-area #close-concepts").fadeIn("fast" , function () {
                        $("#concepts-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 1000);
                    });
                
            });
        
    } else {
        
            $(".button-area #close-concepts").fadeOut("fast" , function () {
                
                    $(".button-area #open-concepts").fadeIn("fast" , function () { 
                        $("#concepts-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 700); 
                    });
                
            });
        
    }
}); 

//Art box animation 
		$("#oc_art").click(function () {
    if ($('.button-area #open-art').is(':visible')) {
       
            $(".button-area #open-art").fadeOut("fast" , function () {
                
                    $(".button-area #close-art").fadeIn("fast" , function () {
                        $("#art-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 1000);
                    });
                
            });
       
    } else {
       
            $(".button-area #close-art").fadeOut("fast" , function () {
              
                    $(".button-area #open-art").fadeIn("fast" , function () { 
                        $("#art-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 700); 
                    });
               
            });
       
    }
}); 
	
	//Activation for HTML5 player in animation section
     $("#osmplayer").osmplayer({
          width: '590px',
          height: '305px',
          playlist: 'playlist.xml'
        });
		
		
		
		
		//Scrolls about section to top as button is clicked 
		$("#oc_about").click(function () {
			$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls interface section to top as button is clicked 
		$("#oc_interface").click(function () {
			$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
        //Scrolls animation section to top as button is clicked 
        $("#oc_animation").click(function () {
            $('html, body').animate({
            scrollTop:$('#animation').offset().top + 120
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
            });

		//Scrolls print section to top as button is clicked 
		$("#oc_print").click(function () {
			$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls concepts section to top as button is clicked 
		$("#oc_concepts").click(function () {
			$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls art section to top as button is clicked 
		$("#oc_art").click(function () {
			$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
		
		$("#resume_btn").click(function () {
		    $('.pushmenu-push').toggleClass('toright');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		$("#nav_resume a").click(function () {
    		$('.pushmenu-push').toggleClass('toright');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		$("#contact_btn").click(function () {
			$('.pushmenu-push').toggleClass('toleft');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		$("#nav_contact a").click(function () {
		    $('.pushmenu-push').toggleClass('toleft');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		
		//Scroll event handler 
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	//Next/prev and primary nav btn click handlers 
	$('#home-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
	
	// Scrolls from Top nav about
	$(function ToAbout() {
    $('#about-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
	});
	
		//Scrolls from Top nav interface 
    $('#interface-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav animation 
    $('#animation-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#animation').offset().top + 120
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav print
    $('#print-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav concepts
    $('#concepts-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav art
    $('#art-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	
	//Scrolls from home nav about
		$('#nav_about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	
	
		// Scrolls from home nav interface 
	$('#nav_interface').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 1300, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
			// Scrolls from home nav animation 
	$('#nav_animation').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#animation').offset().top + 120
    	}, 1600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
	
	
		// Scrolls from home nav print 
	$('#nav_print').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 1900, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
		// Scrolls from home nav concepts
	$('#nav_concepts').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 2200, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
		// Scrolls from home nav art
	$('#nav_art').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 2500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
	
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );  


    $('#lab').parallax("100%", 3400, 0.3, true);
    $('#space').parallax("20%", 5700, 0.05, true);
    $('#jungle-bg').parallax("50%", 6500, 0.15, true);
    $('#gears').parallax("50%", 7600, 0.30, true);
    $('#ink').parallax("50%", 10300, 0.30, true);
    $('#face3d').parallax("20%", 12200, 0.30, true);


/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	
	//About Scrolling
    $('#outer-ring').css('top',(620-(scrolled*0.23))+'px');
	$('#middle-ring').css('top',(620-(scrolled*0.23))+'px');
	$('#my-face').css('top',(290-(scrolled*0.0))+'px');
	$('#inner-ring').css('top',(620-(scrolled*0.23))+'px');
	$('#vertical-scale').css('top',(740-(scrolled*0.40))+'px');
	$('#target').css('top',(950-(scrolled*0.52))+'px');
	$('#about-box').css('top',(950-(scrolled*0.52))+'px');
	$('#interface-box').css('top',(1680-(scrolled*0.52))+'px');
	
	$('#animation-box').css('top',(2680-(scrolled*0.52))+'px');
	$('#branch').css('top',(50-(scrolled*0.05))+'px');
	
	$('#front-ink1').css('top',(1350-(scrolled*0.15))+'px');
	$('#front-ink2').css('top',(200-(scrolled*0.0))+'px');
	$('#print-box').css('top',(3800-(scrolled*0.42))+'px');
    $('#concepts-box').css('top',(3000-(scrolled*0.42))+'px');
    $('#art-box').css('top',(4480-(scrolled*0.42))+'px');
	
}

var sdegree = 0;

$(window).scroll(function(event, direction) {
 if (direction === 'down') {
         sdegree ++ ;
    sdegree = sdegree + 1 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
    } // do this on the way down
   
   else {
       sdegree ++ ;
    sdegree = sdegree + 1 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
 // do this on the way back up through the waypoint
   }
   

});

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by a quarter the distance to the previous section.
	var section2Top =  $('#about').offset().top - (($('#interface').offset().top - $('#about').offset().top) / 4); 
	var section3Top =  $('#interface').offset().top - (($('#animation').offset().top - $('#interface').offset().top) / 4);
	var section4Top =  $('#animation').offset().top - (($('#concepts').offset().top - $('#animation').offset().top) / 4);
	var section5Top =  $('#concepts').offset().top - (($('#print').offset().top - $('#concepts').offset().top) / 4);
	var section6Top =  $('#print').offset().top - (($('#art').offset().top - $('#print').offset().top) / 4);
	var section7Top =  $('#art').offset().top - (($(document).height() - $('#art').offset().top) / 4);
	
	
	$('li.menu').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('li#home-tab').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('li#about-tab').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('li#interface-tab').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('li#animation-tab').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('li#concepts-tab').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('li#print-tab').addClass('active');
	} else if ($(document).scrollTop() >= section7Top){
		$('li#art-tab').addClass('active');
	}
	
}
  

    $(".trigger-overlay").click(function(){
        $(".toolbar").css("z-index" , "200");
            $("html,body").css("overflow","hidden");

      
    });

     $(".overlay-close").click(function(){
        $("html,body").css("overflow","auto");
        $(".toolbar").css("z-index" , "999", 500);
            
      
    });
  
})(jQuery);
