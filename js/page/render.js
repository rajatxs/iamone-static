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
               el.removeAttribute('data-page-icon');
            }
         });
   }

   if (window['icons']) {
      _renderPageIcons();
   }

   window['pageAction'] = function (actionName = 'NONE') {
      switch(actionName) {
         case 'RENDER_SOCIAL_ICONS':
            _renderPageIcons();
            break;
      }
   }
})();
