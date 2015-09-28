/* ==========================================================================

    Project: job-test
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.galleryColorbox();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    galleryColorbox: function() {
      $(document).ready( function() {

        $('.img-wrapper img').colorbox({
          rel: 'gal',
          href: function() {
            return $(this).attr('src');
          },
          open: true
        });

        var slideshowCounter = 1;
        var slides = $('.img-wrapper img').length;
        $(document).bind('cbox_complete', function(){

          if (slideshowCounter != slides) {
            ++slideshowCounter;
            setTimeout($.colorbox.next, 2000);
          } else {
            setTimeout($.colorbox.close, 2000);
          }

        });
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
