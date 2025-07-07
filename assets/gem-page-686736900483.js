

    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1730295453933').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  (function( jQuery ){
  try {
    var $module = jQuery('#m-1730286962226').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1730905006500').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1730905006375').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1730905006396').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1730904987801').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1730904987749').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1730904987671').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1730283069961').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  (function( jQuery ){
  try {
    var $module = jQuery('#m-1731064931249').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1730904939879').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1730904939981').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1730904939947').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1730904923931').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1730904923958').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1730904924044').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1730369001267').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1730905526402').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  (function( jQuery ){
  var $module = jQuery('#m-1731068625912').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if (mode == 'production') {
    jQuery(window).ready(function() {
      $module.gfVideoBg();
    })
  } else {
    $module.gfVideoBg();
  }
  
  function resizeBgVideo(){
    var heightVideo = 0;
    if($module.attr('data-video-source') == 'vimeo'){
      heightVideo += $('.gf_video-bg-inner iframe').innerHeight();
      $('.gf_video-bg-inner iframe').css({'max-width' : '100%',
        'position' : 'absolute',
        'transform' : 'translateY(-50%)',
        'top' : '50%',
      });
      $('.gf_video-bg-inner iframe').parent().css('height', '100%');
      $module.parent().css('background-color', 'transparent');
    } else if ($module.attr('data-video-source') == 'youtube') {
      heightVideo += $('.gf_video-bg-inner iframe').innerHeight();
    } else {
      heightVideo += $module.find('.gf_video-bg-inner video').innerHeight();
    }
    console.log(heightVideo);
    if (window.innerWidth < 768){
      if ($module.attr('data-height-xs') == 'auto') {
        $module.attr('style', 'height:'+ heightVideo +'px')
      }
    }
  }
  setInterval(function(){
    resizeBgVideo();
    $(window).resize(function(){
      resizeBgVideo();
    });
  }, 1000)
  
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    
  
    
  (function( jQuery ){
  try {
    var $module = jQuery('#m-1731068625834').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625860').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625998').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625836').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625997').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625868').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625891').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625875').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625906').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625858').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625908').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625911').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625945').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625882').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625885').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1731068625819').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625886').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625968').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625913').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625943').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625976').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625894').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1731068625843').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068625971').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625902').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625993').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1731068626004').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1731068625915').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1731068625939').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#e-1731068625884","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1731068625955","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1731068625955"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1731069391137","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#r-1731068625862","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Row: #r-1731068625862"}]}]); window.__gfV1FlowActions.init();