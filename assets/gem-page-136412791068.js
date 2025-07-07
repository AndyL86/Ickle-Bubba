

    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1718350627485').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
  var $module = jQuery('#m-1718350627485-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1718350627485-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1718351589939').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589925').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function(jQuery) {
    var $module = jQuery('#m-1718351589963').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589929').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1718351589958').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589878').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589889').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589874').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589901').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1718351589936').children('.module');
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
  var $module = jQuery('#m-1718351589862').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589971').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1718351589849').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1718351589893').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );(function( jQuery ){
  // var $module = jQuery('#m-1718351589903').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589836').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589913').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1718351589931').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#e-1718351589933","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589927","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589947","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589850","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589861","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589905","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589875","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1718351589935","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1682498763347","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":300}}],"rename":"Text Block: #e-1682498763347"}]}]); window.__gfV1FlowActions.init();