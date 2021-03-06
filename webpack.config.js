var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/backToTop', './assets/js/backToTop.js')
    .addEntry('js/pokedex', './assets/js/pokedex.js')
    .addEntry('js/upload', './assets/js/upload.js')
    .addEntry('js/pills', './assets/js/pills.js')
    .addStyleEntry('css/main', './assets/scss/main.scss')
    .addStyleEntry('css/backToTop', './assets/scss/backToTop.scss')
    .addStyleEntry('css/card', './assets/scss/card.scss')
    .addStyleEntry('css/searchBar', './assets/scss/searchBar.scss')
    .addStyleEntry('css/pagination', './assets/scss/pagination.scss')
    .addStyleEntry('css/pills', './assets/scss/pills.scss')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
