var Hide = {

    init: function() {

        this.hidden();

    },

    hidden: function() {

        var right = $('#right');

        var left = $('#left');

        var footer = $('#footer');

        right.click(function() {

            footer.animate({ 'right': 0 }, 500);

        });

        left.click(function() {

            footer.animate({ 'right': '-100%' }, 500);


        });
    }


}

var Tap={
    init:function () {
        this.getDom();
        this.changgetab();
    },
    getDom:function () {
        this.tap=$('footer a');
    },
    changgetab:function () {
        this.tap.click(function () {
            if ($(this).index()==0) {
                $(function(){
                    var mySwiper = new Swiper('.swiper-container', {
                        loop:true,
                        pagination: '.swiper-pagination'
                        });
                })
            } 
            $(this).addClass('active').siblings('a').removeClass('active');
        })
    }
}

$(function() {

     var mySwiper = new Swiper('.swiper-container', {
        loop:true,
        pagination: '.swiper-pagination'
    });

    Hide.init();

    Tap.init();

});

(function(doc, win) {
    var main = $('#main');
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            console.log(clientWidth)
            if (clientWidth <= 640) {
                clientWidth = 640;
                docEl.style.fontSize = '64px';
            } else if (clientWidth <= 750) {
                clientWidth = 750;
                docEl.style.fontSize = '75px';
            }else if (clientWidth <= 828) {
                clientWidth = 828;
                docEl.style.fontSize = '82.8px';
            }else if(clientWidth >= 1536){
            	
                docEl.style.fontSize = '108px';

            }


            console.log(clientWidth);
            // docEl.style.fontSize = 64 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
