// MODULE

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects or libraries.
  $sceProvider.enabled(false);
});


