

    (function( jQuery ){
  var $module = jQuery('#m-1698936951448').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1686640113860').children('.module');
  // You can add custom Javascript code right here.
console.log("before clicking button");

$(".form-mobile").click(function(e){
  exponea.showBanner('64df736ed11e654477c50865');
  console.log("after clicking button");
});
})( window.GemQuery || jQuery );(function( jQuery ){
  
  //set initial ATC & Buy Now button - am
  const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);
  
  function atc() {
    var dateText = document.getElementById('hidden-current-variant-message').innerHTML;
  
    if (dateText) {
      $('.AddToCartText').html("PRE ORDER");
      $(".gf_p-dynamic-checkout-button").hide();
      $("#m-1698936951434").hide();
    } else {
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1698936951434").show();
    }
  //})();
  }

  defer(atc);




  // repeated JS for variant change  - am
  var $module = jQuery('#m-1682498763297').children('.module');
  var swatchText = $module.attr('data-swatch-text') !== undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {

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
      $("#m-1698936951434").show();
      
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
              $("#m-1698936951434").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1698936951434").show();
          }
        }
      });


    }
  });

})( window.GemQuery || jQuery );




(function( jQuery ){
  // repeated JS for variant change
  var $module = jQuery('#m-1698936951347').children('.module');
  var swatchText = $module.attr('data-swatch-text') !== undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {
      document.dispatchEvent(new CustomEvent('variant:change', {
        detail : {
          variant: variant
        }
      }));

    // dynamic Preorder text ATC & By Now button.  impacts chassis & handles change  - am
      var variantsMetafields = jQuery.parseJSON($("#hidden-variant-metafields").html());
      var today = $("#hidden-today").html();
          var variantInventoryObject2 = window.inventories2[variant.id];
          var variantQuantity = variantInventoryObject2.quantity;
          console.log('log 102) variantQuantity ='+ variantQuantity );

      $("#hidden-current-variant-metafield").hide(); // delete the field 1st. If item "coming soon" no variant shows. So start with hidden field b/c can't delete later based on variant.id
      $("#hidden-current-variant-message").hide();
      $(".gf_p-dynamic-checkout-button").show();     // show the dynamic button 1st before possibly hiding
      $("#m-1698936951434").show();     // show the dynamic button 1st before possibly hiding
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1698936951434").show();
      
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
              $("#m-1698936951434").hide();
            } else {
              // $(".AddToCartText").html("ADD TO CART");
              $(".gf_p-dynamic-checkout-button").show();
              $("#m-1698936951434").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1698936951434").show();
          }
        }
      });

    }
  });
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1698936951441').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698936951374').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1698936951454').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698936951410').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function(jQuery) {
  var $module = jQuery('#m-1698936951347').children('.module');
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
    (function(jQuery) {
    var $module = jQuery('#m-1698936951425').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698936951432').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1698936951461').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693914775188').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1693914781559').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1693914775237').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1693914775163').children('.module');
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
  var $module = jQuery('#m-1693914775225').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693914775220').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1693914775236').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1702891899490').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1695723444778').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1695723444715').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1695723444731').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1695725453153').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1715250233713').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698137876852').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698137876809').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#m-1698936951374"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763325","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1682498763325"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1693914775188"},"events":[{"key":"click"}],"targets":[{"id":"#e-1686063777164","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1686063777164"},{"id":"#m-1686063777085","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":50}}],"rename":"Liquid: #m-1686063777085"}],"disableOn":["md","xs"]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693914775304","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1697026526738","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1697027005324","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1715160274238","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1715160007770","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693914775158","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1715250293763","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]); window.__gfV1FlowActions.init();