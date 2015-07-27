/*
    written by Roland Kainbacher
*/

(function($){


    $.fn.antimail = function(options) {

        var mailto = '.antimail'
        var options = $.extend({
            domain: 'mydomain.com',
            email: 'email'
        }, options);


        return $(mailto).each(function(){

            domain = $(this).attr('data-domain');
            if(!domain){
                domain = options.domain;
            };

            var email = $(this).attr('data-mail');
            if(!email){
                email = options.email;
            };

            if ( $(this).is('a')  ) {
                var link = 'mailto:' + email + '@' + domain;
                $(this).attr('href', link);
            } else {
                var link = email + '@' + domain;
                $(this).replaceWith(link);
            }

        });

    };
})(jQuery);