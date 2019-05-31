(function($) {
    $.fn.extend({
        banner: function(options) {
            var main = null,
                that = this,
                init = null,
                stop = null,
                start = null,
                timer = null,
                elems = {},
                li = $('.list-point>li'),
                defaults = {
                    speed: 600,
                    delay: 3000
                };
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1;
                elems.sliderDiv = $('.index-banner-img');
                elems.sliderDiv.append(elems.sliderDiv.children('div').first().clone());

                that.hover(function() {
                    stop();

                }, function() {
                    timer = setInterval(start.bind(null, 1), options.delay + options.speed);
                });
            }
            start = function(fx) {
                var t = "-=1349px";
                if (!fx) {
                    t = "+=1349px";
                    if (elems._index <= 1) {
                        var divLeft = that.offset().left,
                            imgdivLeft = elems.sliderDiv.children('div').last().offset().left;
                        elems._index = 8;
                        elems.sliderDiv.css('left', '-' + (imgdivLeft - divLeft) + 'px');

                    }
                }

                elems.sliderDiv.animate({
                    left: t
                }, options.speed, function() {
                    if (fx) elems._index++;
                    else elems._index--;

                    if (elems._index === 8) {
                        elems._index = 1;
                        elems.sliderDiv.css('left', 0);
                        $(li[0]).addClass('li-active');
                    }
                });
                li.removeClass('li-active');
                $(li[elems._index]).addClass('li-active');
            }
            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timer);
            }
            li.on('click', function() {
                elems.sliderDiv = $('.index-banner-img');
                elems._index = li.index(this) + 1;
                var t = li.index(this) * 1349;
                $('.list-point>li').removeClass('li-active');
                $(this).addClass('li-active');
                elems.sliderDiv.css('left', -t);
            });
            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), options.delay + options.speed);

            }
            main();
        }
    });
})(jQuery);