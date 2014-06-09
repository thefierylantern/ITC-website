requirejs.config({
    baseUrl: './scripts',
    paths: {
        'modernizr': '../bower_components/modernizr/modernizr',
        'jquery': '../bower_components/jquery/dist/jquery',
        'slick': '../bower_components/slick.js/slick/slick',
        'skrollr': '../bower_components/skrollr/src/skrollr',
        'skrollrmenu': '../bower_components/skrollr-menu/src/skrollr.menu',
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap'
    },
    shim: {
        'skrollr': {
            exports: 'skrollr',
            deps: ['jquery']
        },
        'skrollrmenu':['skrollr'],
        'slick':['jquery'],
        'bootstrap': ['jquery']
    }
});
