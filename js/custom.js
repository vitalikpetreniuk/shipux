$(function() {
    var weight_label;
    var price_label;
    var weight_qua;
    var price_qua;

    $('.header-lang').find('.lang').on('click', function () {
        $('.header-lang').toggleClass('open');
        $('.header-lang').find('ul').fadeToggle('fast');
    });

    $('.content .settings-form .section:nth-child(1) .change').on('click', function () {
        $('.content .settings-form .section:nth-child(1)').find('.section-change').slideToggle('fast');
    });

    $('.content .settings-form .section.input-line .change').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().find('.line.edit').slideToggle('fast');
    });


    $('.expected-top .top-right a').on('click', function (e) {
        e.preventDefault();
        $('.expected-add').addClass('open');
    });
    $('.expected-add .cancel').on('click', function (e) {
        e.preventDefault();
        $('.expected-add').removeClass('open');
    });

    $('.names .content-top a').on('click', function (e) {
        e.preventDefault();
        $('.names-add').addClass('open');
    });
    $('.names-add .cancel').on('click', function (e) {
        e.preventDefault();
        $('.names-add').removeClass('open');
    });

    $('.address .content-top a').on('click', function (e) {
        e.preventDefault();
        $('.address-add').addClass('open');
    });
    $('.address-add .cancel').on('click', function (e) {
        e.preventDefault();
        $('.address-add').removeClass('open');
    });

    if($('#fullpage').length && $(window).width()>1279)
    {
        $('#fullpage').fullpage();
    }
    if($('.qa-list').length)
    {
        $('.qa-list').find('li .question').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).siblings('.answer').slideToggle();
            $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
        });
    }

	if($('.sidebar').length)
    {
        $('ul.acc-nav > li').eq(1).find('a').on('click', function (e) {
            e.preventDefault();
            $(this).siblings().slideToggle();
        });
    }
	if($('.calculate-body').length)
    {
        weight_label = $('.weight label');
        var slider_weight = $('<div id="slider_weight" class="slider"></div>').insertAfter(weight_label).slider({
            min: 1,
            max: 100,
            range: "min",
            value: 1,
            slide: function( event, ui ) {
                $('#weight').val(ui.value);
            }
        });
        $('#weight').on('change', function() {
            weight_qua = parseInt($(this).val());
            slider_weight.slider('value', weight_qua);
        });

        price_label = $('.price label');
        var slider_price = $('<div id="slider_price" class="slider"></div>').insertAfter(price_label).slider({
            min: 1,
            max: 1000,
            range: "min",
            value: 1,
            slide: function( event, ui ) {
                $('#price').val(ui.value);
            }
        });
        $('#price').on('change', function() {
            price_qua = parseInt($(this).val());
            slider_price.slider('value', price_qua);
        });
    }

    if($('.dashboard-tabs').length)
    {
        $('#dash-tabs').tabs();
        $('#accordion').accordion({
            collapsible: true,
            heightStyle: "content"
        });

        $('.parcel-drop').on('click', function () {
           $(this).parent().parent().toggleClass('open');
           $(this).parent().parent().find('.parcel-body').slideToggle();
        });
    }

    if($('.shipux-acc').length)
    {
        $('.acc-name').on('click', function () {
           $(this).parent().toggleClass('open');
           $(this).parent().find('.acc-drop').fadeToggle('fast');
        });
    }

    if($('.shipux-notifications').length)
    {
        $('.fa-bell').on('click', function () {
           $(this).parent().toggleClass('open');
           $(this).parent().find('.notifications-drop').fadeToggle('fast');
        });
        $('.note_qua').on('click', function () {
           $(this).parent().toggleClass('open');
           $(this).parent().find('.notifications-drop').fadeToggle('fast');
        });
    }

    if($('.stock-body').length)
    {
        $('.stock-body .drop').on('click', function () {
           $(this).parent().parent().toggleClass('open');
           $(this).parent().parent().find('.line-body').slideToggle();
        });
        $('.photo-gal a').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().find('ul').slideToggle();
        });
    }

    if($('.sent-body').length)
    {
        $('.sent-body .drop').on('click', function () {
           $(this).parent().parent().toggleClass('open');
           $(this).parent().parent().find('.line-body').slideToggle();
        });
    }

    if($('.chat').length)
    {
        $('.chat-header .drop').on('click', function () {
           $(this).parent().parent().toggleClass('open');
           $(this).parent().parent().find('.chat-body').slideToggle();
        });
        $('.ticket-header .drop').on('click', function () {
           $(this).parent().parent().toggleClass('open');
           $(this).parent().parent().find('.ticket-body').slideToggle();
        });
    }

    if($('input[type="checkbox"]').length && !$('.settings-form').length)
    {
        setTimeout(function() {
            $('input').styler();
        }, 100);
    }
    if($('input[type="radio"]').length && !$('.settings-form').length)
    {
        setTimeout(function() {
            $('input').styler();
        }, 100);
    }

    if($('select').length)
    {
        setTimeout(function() {
            $('select').styler();
        }, 100);
    }

    $('#reasons').find('.reason h3').on('click', function () {
        $(this).parent().find('.reason-info').slideToggle();
        $(this).parent().parent().toggleClass('active');
    });

    $(window).on('resize', function () {
        if($('#fullpage').length && $(window).width()>1279)
        {
            $('#fullpage').fullpage();
            $.fn.fullpage.setAutoScrolling(true);
        }else
        {
            $.fn.fullpage.setAutoScrolling(false);
        }
    });

});