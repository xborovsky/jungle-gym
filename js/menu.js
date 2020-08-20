var menuDisplayHandler = (function() {
    var $navbarContainer = $('#navbar').parent();

    var init = function() {
        if ($(window).width() < 768) {
            showMobileMenu();

            $('.navbar-toggler, .nav-link').click(function() {
                var $toggler = $('.navbar-toggler');
                setTimeout(function() {
                    if ($toggler.hasClass('collapsed')) {
                        $('#navbar-container').addClass('transparent');
                        $('.navbar-brand').addClass('hidden');
                    } else {
                        $('#navbar-container').removeClass('transparent');
                        $('.navbar-brand').removeClass('hidden');
                    }
                }, 5);
            });
        }
    };

    var showMobileMenu = function() {
        $navbarContainer.addClass('navbar-fixed-top');
    };

    return {
        init : init
    };
})();