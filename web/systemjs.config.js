/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'lib:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'lib:@angular/core/bundles/core.umd.js',
            '@angular/common': 'lib:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'lib:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib:@angular/http/bundles/http.umd.js',
            '@angular/router': 'lib:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib:@angular/forms/bundles/forms.umd.js',

            // angular testing umd bundles
            '@angular/core/testing': 'lib:@angular/core/bundles/core-testing.umd.js',
            '@angular/common/testing': 'lib:@angular/common/bundles/common-testing.umd.js',
            '@angular/compiler/testing': 'lib:@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/platform-browser/testing': 'lib:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic/testing': 'lib:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http/testing': 'lib:@angular/http/bundles/http-testing.umd.js',
            '@angular/router/testing': 'lib:@angular/router/bundles/router-testing.umd.js',
            '@angular/forms/testing': 'lib:@angular/forms/bundles/forms-testing.umd.js',

            // other libraries
            'rxjs': 'lib:rxjs',
            "angular2-jwt": "lib:angular2-jwt",
            "moment": 'lib:moment/moment.js',
            "ng2-bootstrap": 'lib:ng2-bootstrap',
            "angular2-text-mask": 'lib:angular2-text-mask/dist/angular2TextMask.js'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {main: './main.js', defaultExtension: 'js'},
            rxjs: {defaultExtension: 'js'},
            "angular2-jwt": {defaultExtension: "js"},
            "ng2-bootstrap": {defaultExtension: "js"}
        }
    });
})(this);