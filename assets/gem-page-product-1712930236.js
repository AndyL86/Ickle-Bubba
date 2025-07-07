

    (function( jQuery ){
  var $module = jQuery('#m-1698937804018').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1709027920884').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698937803963').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  (function(jQuery) {
  var $module = jQuery('#m-1698937804005').children('.module');
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
  // var $module = jQuery('#m-1698137693198').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1698137693187').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#m-1698937803963"},"events":[{"key":"click"}],"targets":[{"id":"#e-1698937803975","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1698937803975"},{"id":"#m-1698937803888","actions":[{"key":"show","type":2,"data":{"delay":0,"duration":50}}],"rename":"Accordion: #m-1698937803888"}],"disableOn":["md","xs"]}]); window.__gfV1FlowActions.init();