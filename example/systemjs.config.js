/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  var routerVer = '@3.3.0'; // lock router version

  //map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    '@angular':                   'https://unpkg.com/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'https://unpkg.com/@angular/router' + routerVer,
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       'https://unpkg.com/rxjs@5.0.0-rc.4',
    'ts':                         'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'https://unpkg.com/typescript@2.1.4/lib/typescript.js',

 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'lib':                        { defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
  ];

  // Add package entries for angular packages
  ngPackageNames.concat(['router']).forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/