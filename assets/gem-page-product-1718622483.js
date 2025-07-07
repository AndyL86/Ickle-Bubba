

    (function( jQuery ){
  var $module = jQuery('#m-1729540743042').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743130').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729540743090').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540825032').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729540824892').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  (function( jQuery ){
  
  //set initial ATC & Buy Now button - am
  const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);
  
  function atc() {
    var dateText = document.getElementById('hidden-current-variant-message').innerHTML;
  
    if (dateText) {
      $('.AddToCartText').html("PRE ORDER");
      $(".gf_p-dynamic-checkout-button").hide();
      $("#m-1729537683974").hide();
    } else {
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1729537683974").show();
    }
  //})();
  }

  defer(atc);


  var $module = jQuery('#m-1744021442037').children('.module');

  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
      $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
     changeVariantFunction(selectedVariant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }

  function changeVariantFunction(variant){
   

      // dynamic Preorder text ATC & By Now button.  impacts chassis & handles change
      var variantsMetafields = jQuery.parseJSON($("#hidden-variant-metafields").html());
      var today = $("#hidden-today").html();
          var variantInventoryObject2 = window.inventories2[variant.id];
          var variantQuantity = variantInventoryObject2.quantity;
          console.log('log 101) variantQuantity ='+ variantQuantity );

      $("#hidden-current-variant-metafield").hide(); // delete the field 1st. If item "coming soon" no variant shows. So start with hidden field b/c can't delete later based on variant.id
      $("#hidden-current-variant-message").hide();
      $(".gf_p-dynamic-checkout-button").show();     // show the dynamic button 1st before possibly hiding
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1729537683974").show();
      
      variantsMetafields.forEach(function(variantMetafield) {
        if (variantMetafield.variant_id == variant.id) {
          if (variantMetafield.metafield_value !== false) {

            if (variantMetafield.metafield_value_s > today && variantQuantity < 1  ) {
              $("#hidden-current-variant-metafield").html("Order today for dispatch by "+variantMetafield.metafield_value);
              $("#hidden-current-variant-metafield").show();
              $("#hidden-current-variant-message").html("We will fulfill the item as soon as it becomes available");
              $("#hidden-current-variant-message").show();
              $(".AddToCartText").html("PRE ORDER"); // goes back to ATC automatically on next variant change if necessary
              $(".gf_p-dynamic-checkout-button").hide();
            } else {
              // $(".AddToCartText").html("ADD TO CART");
              $(".gf_p-dynamic-checkout-button").show();
              $("#m-1729537683974").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1729537683974").show();
          }
        }
      });

    // dynamic Preorder text ATC & By Now button.  impacts chassis & handles change  - am
      var variantsMetafields = jQuery.parseJSON($("#hidden-variant-metafields").html());
      var today = $("#hidden-today").html();
          var variantInventoryObject2 = window.inventories2[variant.id];
          var variantQuantity = variantInventoryObject2.quantity;
          console.log('log 102) variantQuantity ='+ variantQuantity );

      $("#hidden-current-variant-metafield").hide(); // delete the field 1st. If item "coming soon" no variant shows. So start with hidden field b/c can't delete later based on variant.id
      $("#hidden-current-variant-message").hide();
      $(".gf_p-dynamic-checkout-button").show();     // show the dynamic button 1st before possibly hiding
      $("#m-1729537683974").show();     // show the dynamic button 1st before possibly hiding
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1729537683974").show();
      
      variantsMetafields.forEach(function(variantMetafield) {
        if (variantMetafield.variant_id == variant.id) {
          if (variantMetafield.metafield_value !== false) {

            if (variantMetafield.metafield_value_s > today && variantQuantity < 1  ) {
              $("#hidden-current-variant-metafield").html(" Order today for dispatch by "+variantMetafield.metafield_value);
              $("#hidden-current-variant-metafield").show();
              $("#hidden-current-variant-message").html(" We will fulfill the item as soon as it becomes available");
              $("#hidden-current-variant-message").show();
              $(".AddToCartText").html("PRE ORDER"); // goes back to ATC automatically on next variant change if necessary
              $(".gf_p-dynamic-checkout-button").hide();
              $("#m-1729537683974").hide();
            } else {
              // $(".AddToCartText").html("ADD TO CART");
              $(".gf_p-dynamic-checkout-button").show();
              $("#m-1729537683974").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1729537683974").show();
          }
        }
      });
      
  }

})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1729540743128').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743073').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743104').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743164').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function(jQuery) {
  var $module = jQuery('#m-1729540743075').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {
      document.dispatchEvent(new CustomEvent('variant:change', {
        detail : {
          variant: variant
        }
      }));
    }
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743032').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1729540743129').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743121').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743182').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729540743127').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1708424989692').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693914375216').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1719233403446').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1719233413336').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1693914375109').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693914375165').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1693914375259').children('.module');   
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
  // var $module = jQuery('#m-1708695403467').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1693914375127').children('.module');
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
  var $module = jQuery('#m-1693914375105').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1693914375224').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  (function( jQuery ){
  // var $module = jQuery('#m-1743003732112').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1695725548278').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1707903507170').children('.module');   
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
  var $module = jQuery('#m-1693914375119').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1708429618764').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1718622578806').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729540743160').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698137693198').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698137693187').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1734353933921').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#m-1729540743073"},"events":[{"key":"click"}],"targets":[{"id":"#m-1729540743116","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":150,"marginTop":30}}],"rename":"Accordion: #m-1729540743116"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1729540743104"},"events":[{"key":"click"}],"targets":[{"id":"#m-1729540743116","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":150,"marginTop":30}}],"rename":"Accordion: #m-1729540743116"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1719233403446"},"events":[{"key":"click"}],"targets":[{"id":"#m-1693914375127","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Accordion: #m-1693914375127"}],"disableOn":["md","xs"]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1719233413336"},"events":[{"key":"click"}],"targets":[{"id":"#m-1693914375127","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Accordion: #m-1693914375127"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693914375180","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1708431300613","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693914375227","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1707903583672","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]); window.__gfV1FlowActions.init();