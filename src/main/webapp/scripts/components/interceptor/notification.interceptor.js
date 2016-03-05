 'use strict';

angular.module('brainzplatformApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-brainzplatformApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-brainzplatformApp-params')});
                }
                return response;
            }
        };
    });
