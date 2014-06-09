requirejs.config({
    baseUrl: './scripts',
    paths: {
        'modernizr': '../bower_components/modernizr/modernizr',
        'jquery': '../bower_components/jquery/dist/jquery',
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
        'bootstrap': ['jquery']
    }
});
