

    (function( jQuery ){
  var $module = jQuery('#m-1729539109748').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109622').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729539109707').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539138804').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729539138926').children('.module');
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


  var $module = jQuery('#m-1744017189143').children('.module');

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
  var $module = jQuery('#m-1729539109708').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109649').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1686640113860').children('.module');
  // You can add custom Javascript code right here.
console.log("before clicking button");

$(".form-desktop").click(function(e){
  exponea.showBanner('673c78565dd099c147953e0f');
  console.log("after clicking button");
});
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109729').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1686640113860').children('.module');
  // You can add custom Javascript code right here.
console.log("before clicking button");

$(".form-desktop").click(function(e){
  exponea.showBanner('673c78565dd099c147953e0f');
  console.log("after clicking button");
});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109709').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function(jQuery) {
  var $module = jQuery('#m-1729539109691').children('.module');
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
  // var $module = jQuery('#m-1729539109751').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function( jQuery ){
  // var $module = jQuery('#m-1729539109634').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109651').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693913900777').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1693913900750').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109661').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1729539109632').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693913900701').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1719233823407').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1719233809799').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705676892407').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1693913900809').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1693913900732').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1722501491826').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1693913900773').children('.module');
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
  var $module = jQuery('#m-1693913900676').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1693913900682').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  (function( jQuery ){
  // var $module = jQuery('#m-1743004328054').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1693913900817').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1705676898543').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1729539109721').children('.module');
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
  (function( jQuery ){
  // var $module = jQuery('#m-1734354020420').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  var $module = jQuery('#m-1740050401400').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1740050401400";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1740050401400") {
      window.getPopup1740050401400 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
document.addEventListener("DOMContentLoaded", function () {
    // Select the close button
    const closeButton = document.querySelector(".gf-closePopup");
    
    // Select the module
    const module = document.querySelector(".module");

    // Add a click event listener to the close button
    if (closeButton && module) {
        closeButton.addEventListener("click", function () {
            module.style.display = "none"; // Hide the module
        });
    }
});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1740050401428').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#m-1729539109649"},"events":[{"key":"click"}],"targets":[{"id":"#m-1729539109723","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":150,"marginTop":30}}],"rename":"Accordion: #m-1729539109723"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1740050399389"},"events":[{"key":"click"}],"targets":[{"id":"#m-1740050401400","actions":[{"key":"showPopup","type":3,"data":{"delay":0}}],"rename":"Popup: #m-1740050401400"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1729539109729"},"events":[{"key":"click"}],"targets":[{"id":"#m-1729539109723","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":150,"marginTop":30}}],"rename":"Accordion: #m-1729539109723"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1740050398175"},"events":[{"key":"click"}],"targets":[{"id":"#m-1740050401400","actions":[{"key":"showPopup","type":3,"data":{"delay":0}}],"rename":"Popup: #m-1740050401400"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900763","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900842","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1719233823407"},"events":[{"key":"click"}],"targets":[{"id":"#m-1693913900773","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Accordion: #m-1693913900773"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1719233809799"},"events":[{"key":"click"}],"targets":[{"id":"#m-1693913900773","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Accordion: #m-1693913900773"}],"disableOn":["md","xs"]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1705676892407"},"events":[{"key":"click"}],"targets":[{"id":"#m-1705676892407","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":100}}],"rename":"Liquid: #m-1705676892407"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900722","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900845","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900820","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900785","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1722501491826"},"events":[{"key":"click"}],"targets":[{"id":"#m-1722501491826","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":100}}],"rename":"Liquid: #m-1722501491826"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900743","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1693913900832","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]); window.__gfV1FlowActions.init();