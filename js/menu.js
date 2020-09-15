var menuDisplayHandler = (function() {
    var $navbarContainer = $('#navbar').parent();

    var init = function(e) {
        $('.navbar-toggler, .nav-link').off('click');
        var width = e ? e.target.screen.width : $(window).width();
        if (width < 992) {
            showMobileMenu();

            $('.navbar-toggler, .nav-link').click(function() {
                if ($('#navbarSupportedContent').hasClass('show')) {
                    $('#navbar-container').addClass('transparent');
                    $('.navbar-brand').addClass('hidden');
                } else {
                    $('#navbar-container').removeClass('transparent');
                    $('.navbar-brand').removeClass('hidden');
                }
            });
        } else {
            hideMobileMenu();

            $('#navbarSupportedContent').removeClass('transparent')
            $('#navbar-container').addClass('show');
        }
    };

    var showMobileMenu = function() {
        $navbarContainer.addClass('navbar-fixed-top');
    };

    var hideMobileMenu = function() {
        $navbarContainer.removeClass('navbar-fixed-top');
    };

    return {
        init : init
    };
})();