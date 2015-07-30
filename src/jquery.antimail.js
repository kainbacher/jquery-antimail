(function($){

    $.fn.antimail = function(options) {

        var mailto = '.antimail'
        var options = $.extend({
            domain: 'mydomain.com',
            email: 'email',
            attribute: 'href' // 'href', 'inline', 'title'
        }, options);


        return $(mailto).each(function(){

            domain = $(this).attr('data-antimail-domain');
            if(!domain){
                domain = options.domain;
            };

            var email = $(this).attr('data-antimail-email');
            if(!email){
                email = options.email;
            };

            var attribute = $(this).attr('data-antimail-attr');
            if(!attribute){
                attribute = options.attribute;
            };

            if (attribute == 'inline') {
                var link = email + '@' + domain;
                $(this).replaceWith(link);
            } else {

                if (attribute == 'href') {
                    var link = 'mailto:' + email + '@' + domain;
                } else {
                    var link = email + '@' + domain;
                }
                $(this).attr(attribute, link);
            }

        });

    };
})(jQuery);