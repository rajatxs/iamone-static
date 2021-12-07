(window.onload = function() {
   function _renderPageIcons() {
      let name = '', source = '';
      
      Array
         .from(document.querySelectorAll('[data-page-icon]'))
         .forEach(function(el) {
            name = el.getAttribute('data-page-icon');
            source = window['icons'][name];
      
            if (typeof source === 'string') {
               el.innerHTML = source;
            }
         });
   }

   if (window['icons']) {
      _renderPageIcons();
   }
})();
