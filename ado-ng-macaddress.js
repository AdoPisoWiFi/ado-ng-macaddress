
(function () {
'use strict';

  var App = angular.module('ado.macaddress-filter', []);

  App.filter('macaddress', function() {
    return function(mac) {
      try {
        return mac.replace(/(:|\-)/g, '').match(/.{1,2}/g).map(function(c) {
          return c.toUpperCase();
        }).join(':');
      } catch(e) {
        return mac;
      }
    };
  });

})();
