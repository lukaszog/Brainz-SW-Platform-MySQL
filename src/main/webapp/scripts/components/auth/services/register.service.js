'use strict';

angular.module('brainzplatformApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


