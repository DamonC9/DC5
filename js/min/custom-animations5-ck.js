$(document).ready(function(){function t(){$("#slide1").slideDown("slow").delay(5e3).slideUp("slow").delay(5e3),$("#slide2").slideUp(1).delay(6e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3),$("#slide3").slideUp(1).delay(12e3).slideDown("slow").delay(5e3).slideUp("slow"),$("#slide4").slideUp(1).delay(18e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3),$("#slide5").slideUp(1).delay(24e3).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3),$("#slide6").slideUp(1).delay(3e4).slideDown("slow").delay(5e3).slideUp("slow").delay(5e3),$("#slide7").slideUp(1).delay(36e3).slideDown("slow").delay(5e3).slideUp("slow",t)}function o(){$(".lightson").animate({opacity:"0.50"},1350,"easeOutSine").delay(300).animate({opacity:"1"},1350,"easeInSine").delay(300),setTimeout(o,3300)}function n(){var t=$(window).scrollTop();$("#outer-ring").css("top",620-.23*t+"px"),$("#middle-ring").css("top",620-.23*t+"px"),$("#my-face").css("top",290-0*t+"px"),$("#inner-ring").css("top",620-.23*t+"px"),$("#vertical-scale").css("top",740-.4*t+"px"),$("#target").css("top",950-.52*t+"px"),$("#about-box").css("top",950-.52*t+"px"),$("#interface-box").css("top",1680-.52*t+"px"),$("#animation-box").css("top",2680-.52*t+"px"),$("#branch").css("top",50-.05*t+"px"),$("#front-ink1").css("top",1350-.15*t+"px"),$("#front-ink2").css("top",200-0*t+"px"),$("#print-box").css("top",3800-.42*t+"px"),$("#concepts-box").css("top",3e3-.42*t+"px"),$("#art-box").css("top",4480-.42*t+"px")}function e(){var t=0,o=$("#about").offset().top-($("#interface").offset().top-$("#about").offset().top)/4,n=$("#interface").offset().top-($("#animation").offset().top-$("#interface").offset().top)/4,e=$("#animation").offset().top-($("#concepts").offset().top-$("#animation").offset().top)/4,a=$("#concepts").offset().top-($("#print").offset().top-$("#concepts").offset().top)/4,i=$("#print").offset().top-($("#art").offset().top-$("#print").offset().top)/4,c=$("#art").offset().top-($(document).height()-$("#art").offset().top)/4;$("li.menu").removeClass("active"),$(document).scrollTop()>=t&&$(document).scrollTop()<o?$("li#home-tab").addClass("active"):$(document).scrollTop()>=o&&$(document).scrollTop()<n?$("li#about-tab").addClass("active"):$(document).scrollTop()>=n&&$(document).scrollTop()<e?$("li#interface-tab").addClass("active"):$(document).scrollTop()>=e&&$(document).scrollTop()<a?$("li#animation-tab").addClass("active"):$(document).scrollTop()>=a&&$(document).scrollTop()<i?$("li#concepts-tab").addClass("active"):$(document).scrollTop()>=i&&$(document).scrollTop()<c?$("li#print-tab").addClass("active"):$(document).scrollTop()>=c&&$("li#art-tab").addClass("active")}t(),o(),$("h3#nav_print").waypoint(function(t){"down"===t?($("nav.current").switchClass("pushmenu-push-up","pushmenu-push-down",600,"easeOutQuad"),$(".left_tab").switchClass("left_tab-push-left","left_tab-push-right",750,"easeOutQuad"),$(".right_tab").switchClass("right_tab-push-left","right_tab-push-right",750,"easeOutQuad")):($("nav.current").switchClass("pushmenu-push-down","pushmenu-push-up",600,"easeInQuad"),$(".left_tab").switchClass("left_tab-push-right","left_tab-push-left",750,"easeInQuad"),$(".right_tab").switchClass("right_tab-push-right","right_tab-push-left",750,"easeInQuad"))});var a=navigator.userAgent.indexOf("Chrome")>-1,i=navigator.userAgent.indexOf("MSIE")>-1,c=navigator.userAgent.indexOf("Firefox")>-1,s=navigator.userAgent.indexOf("Safari")>-1,l=navigator.userAgent.indexOf("Presto")>-1;-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&($(".slidedown *, .x_nav, .toolbar nav .menu a, .overlay_text_mask *").css("font-weight","normal"),$(".overlay_text_mask *").css("font-weight","300"),$("nav.current").css("width","509px"),$("#triangle-topleft").css("marginLeft","509px"),$(".info-box header").css("font-weight","300")),$("#contact_btn").hover(function(){$("#tooltip").fadeIn("slow")},function(){$("#tooltip").fadeOut("slow")}),$(".left_tab span").click(function(){$(".left_tab .icon-user").is(":visible")?$(this).switchClass("icon-user","icon-close",500,function(){$(".-lft").animate({marginLeft:"0px",opacity:"1"},600,"easeOutQuad")}):$(".left_tab .icon-close").switchClass("icon-close","icon-user",500,function(){$(".-lft").animate({marginLeft:"-310px",opacity:"0"},600,"easeInQuad")})}),$("#nav_resume a").click(function(){$(".left_tab span").switchClass("icon-user","icon-close",500,function(){$(".-lft").animate({marginLeft:"0px",opacity:"1"},600,"easeOutQuad")})}),$("#user-close").click(function(){$(".left_tab span").switchClass("icon-close","icon-user",500,function(){$(".-lft").animate({marginLeft:"-310px",opacity:"0"},600,"easeInQuad")})}),$(".right_tab span").click(function(){$(".right_tab .icon-mail").is(":visible")?$(this).switchClass("icon-mail","icon-close",500,function(){$(".-rt").animate({marginRight:"0px",opacity:"1"},600,"easeOutQuad")}):$(".right_tab .icon-close").switchClass("icon-close","icon-mail",500,function(){$(".-rt").animate({marginRight:"-310px",opacity:"0"},600,"easeInQuad")})}),$("#nav_contact a").click(function(){$(".right_tab span").switchClass("icon-mail","icon-close",500,function(){$(".-rt").animate({marginRight:"0px",opacity:"1"},600,"easeOutQuad")})}),$("#mail-close").click(function(){$(".right_tab span").switchClass("icon-close","icon-mail",500,function(){$(".-rt").animate({marginRight:"-310px",opacity:"0"},600,"easeInQuad")})}),$("#oc_about").click(function(){$(".button-area #open-about").is(":visible")?$(".button-area #open-about").fadeOut("fast",function(){$(".button-area #close-about").fadeIn("fast",function(){$("#about-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},1e3)})}):$(".button-area #close-about").fadeOut("fast",function(){$(".button-area #open-about").fadeIn("fast",function(){$("#about-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},700)})})}),$("#oc_interface").click(function(){$(".button-area #open-interface").is(":visible")?$(".button-area #open-interface").fadeOut("fast",function(){$(".button-area #close-interface").fadeIn("fast",function(){$("#interface-box").animate({height:"2400",paddingTop:"900px",marginTop:"-900px"},1e3)})}):$(".button-area #close-interface").fadeOut("fast",function(){$(".button-area #open-interface").fadeIn("fast",function(){$("#interface-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},700)})})}),$("#oc_print").click(function(){$(".button-area #open-print").is(":visible")?$(".button-area #open-print").fadeOut("fast",function(){$(".button-area #close-print").fadeIn("fast",function(){$("#print-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},1e3)})}):$(".button-area #close-print").fadeOut("fast",function(){$(".button-area #open-print").fadeIn("fast",function(){$("#print-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},700)})})}),$("#oc_concepts").click(function(){$(".button-area #open-concepts").is(":visible")?$(".button-area #open-concepts").fadeOut("fast",function(){$(".button-area #close-concepts").fadeIn("fast",function(){$("#concepts-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},1e3)})}):$(".button-area #close-concepts").fadeOut("fast",function(){$(".button-area #open-concepts").fadeIn("fast",function(){$("#concepts-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},700)})})}),$("#oc_art").click(function(){$(".button-area #open-art").is(":visible")?$(".button-area #open-art").fadeOut("fast",function(){$(".button-area #close-art").fadeIn("fast",function(){$("#art-box").animate({height:"2400px",paddingTop:"900px",marginTop:"-900px"},1e3)})}):$(".button-area #close-art").fadeOut("fast",function(){$(".button-area #open-art").fadeIn("fast",function(){$("#art-box").animate({height:"100px",paddingTop:"0",marginTop:"0"},700)})})}),$("#osmplayer").osmplayer({width:"590px",height:"305px",playlist:"playlist.xml"}),$("#oc_about").click(function(){return $("html, body").animate({scrollTop:$("#about").offset().top+210},1e3,function(){n()}),!1}),$("#oc_interface").click(function(){return $("html, body").animate({scrollTop:$("#interface").offset().top+90},1e3,function(){n()}),!1}),$("#oc_animation").click(function(){return $("html, body").animate({scrollTop:$("#animation").offset().top+120},1e3,function(){n()}),!1}),$("#oc_print").click(function(){return $("html, body").animate({scrollTop:$("#print").offset().top+165},1e3,function(){n()}),!1}),$("#oc_concepts").click(function(){return $("html, body").animate({scrollTop:$("#concepts").offset().top+150},1e3,function(){n()}),!1}),$("#oc_art").click(function(){return $("html, body").animate({scrollTop:$("#art").offset().top+130},1e3,function(){n()}),!1}),$("#resume_btn").click(function(){return $(".pushmenu-push").toggleClass("toright"),$(".toolbar").toggleClass("toolbar-extended"),!1}),$("#nav_resume a").click(function(){return $(".pushmenu-push").toggleClass("toright"),$(".toolbar").toggleClass("toolbar-extended"),!1}),$("#contact_btn").click(function(){return $(".pushmenu-push").toggleClass("toleft"),$(".toolbar").toggleClass("toolbar-extended"),!1}),$("#nav_contact a").click(function(){return $(".pushmenu-push").toggleClass("toleft"),$(".toolbar").toggleClass("toolbar-extended"),!1}),$(window).bind("scroll",function(t){n(),e()}),$("#home-tab").click(function(){return $("html, body").animate({scrollTop:0},1e3,function(){n()}),!1}),$(function p(){$("#about-tab").click(function(){return $("html, body").animate({scrollTop:$("#about").offset().top+210},1e3,function(){n()}),!1})}),$("#interface-tab").click(function(){return $("html, body").animate({scrollTop:$("#interface").offset().top+90},1e3,function(){n()}),!1}),$("#animation-tab").click(function(){return $("html, body").animate({scrollTop:$("#animation").offset().top+120},1e3,function(){n()}),!1}),$("#print-tab").click(function(){return $("html, body").animate({scrollTop:$("#print").offset().top+165},1e3,function(){n()}),!1}),$("#concepts-tab").click(function(){return $("html, body").animate({scrollTop:$("#concepts").offset().top+150},1e3,function(){n()}),!1}),$("#art-tab").click(function(){return $("html, body").animate({scrollTop:$("#art").offset().top+130},1e3,function(){n()}),!1}),$("#nav_about").click(function(){return $("html, body").animate({scrollTop:$("#about").offset().top+210},1e3,function(){n()}),!1}),$("#nav_interface").click(function(){return $("html, body").animate({scrollTop:$("#interface").offset().top+90},1300,function(){n()}),!1}),$("#nav_animation").click(function(){return $("html, body").animate({scrollTop:$("#animation").offset().top+120},1600,function(){n()}),!1}),$("#nav_print").click(function(){return $("html, body").animate({scrollTop:$("#print").offset().top+165},1900,function(){n()}),!1}),$("#nav_concepts").click(function(){return $("html, body").animate({scrollTop:$("#concepts").offset().top+150},2200,function(){n()}),!1}),$("#nav_art").click(function(){return $("html, body").animate({scrollTop:$("#art").offset().top+130},2500,function(){n()}),!1}),$("nav#primary a").hover(function(){$(this).prev("h1").show()},function(){$(this).prev("h1").hide()}),$("#lab").parallax("100%",3400,.3,!0),$("#space").parallax("20%",5700,.05,!0),$("#jungle-bg").parallax("50%",6500,.15,!0),$("#gears").parallax("50%",7600,.3,!0),$("#ink").parallax("50%",10300,.3,!0),$("#face3d").parallax("20%",12200,.3,!0);var r=0;$(window).scroll(function(t,o){if("down"===o){r++,r+=1;var n="rotate("+r+"deg)";$("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform":n,"-webkit-transform":n})}else{r++,r+=1;var n="rotate("+r+"deg)";$("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform":n,"-webkit-transform":n})}}),$(".trigger-overlay").click(function(){$(".toolbar").css("z-index","200"),$("html,body").css("overflow","hidden")}),$(".overlay-close").click(function(){$("html,body").css("overflow","auto"),$(".toolbar").css("z-index","999",500)})})(jQuery);