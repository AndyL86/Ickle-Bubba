

    (function( jQuery ){
  var $module = jQuery('#m-1698936232833').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  (function( jQuery ){
  
  //set initial ATC & Buy Now button - am
  const defer = (fn, ...args) => setTimeout(fn, 1000, ...args);
  
  function atc() {
    var dateText = document.getElementById('hidden-current-variant-message').innerHTML;
  
    if (dateText) {
      $('.AddToCartText').html("PRE ORDER");
      $(".gf_p-dynamic-checkout-button").hide();
      $("#m-1698936232844").hide();
    } else {
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1698936232844").show();
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
      $("#m-1698936232844").show();
      
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
              $("#m-1698936232844").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1698936232844").show();
          }
        }
      });


    }
  });

})( window.GemQuery || jQuery );




(function( jQuery ){
  // repeated JS for variant change
  var $module = jQuery('#m-1698936232837').children('.module');
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
      $("#m-1698936232844").show();     // show the dynamic button 1st before possibly hiding
      $(".gf_p-dynamic-checkout-button").show();
      $("#m-1698936232844").show();
      
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
              $("#m-1698936232844").hide();
            } else {
              // $(".AddToCartText").html("ADD TO CART");
              $(".gf_p-dynamic-checkout-button").show();
              $("#m-1698936232844").show();
            }
          } else {
            // $(".AddToCartText").html("ADD TO CART");
            $(".gf_p-dynamic-checkout-button").show();
            $("#m-1698936232844").show();
          }
        }
      });

    }
  });
})( window.GemQuery || jQuery );
    (function( jQuery ){
  var $module = jQuery('#m-1698936232880').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1698936232839').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1698936232863').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698936232915').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function(jQuery) {
  var $module = jQuery('#m-1698936232837').children('.module');
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
})(window.GemQuery || jQuery);(function( jQuery ){
  // var $module = jQuery('#m-1715338364366').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );


    (function( jQuery ){
  // var $module = jQuery('#m-1698936232865').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1707207973248').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1698936232794').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1705506050279').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705506039359').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1705506039391').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1711098460036').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1705506039416').children('.module');
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
  var $module = jQuery('#m-1705506039360').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705506039406').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1705506039484').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1705506039327').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1705506039390').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1705506039457').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705506039386').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705506039334').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1706031885130').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1682501084243').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1686063466291').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#e-1706612639056","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1705506039380","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1705506039420","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1707164599780","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1706031808980","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1712232592831","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#m-1707207973248","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":250,"marginTop":30}}],"rename":"Liquid: #m-1707207973248"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1705506039468","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]); window.__gfV1FlowActions.init();