angular.module("agencyPortal", ['ngRoute', 'toaster', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<home></home>'
            })
            .when("/claimant-overview/:id", {
                template: '<claimant-overview></claimant-overview>'
            })
            .when("/claimant-profile/:id", {
                template: '<claimant-profile></claimant-profile>'
            })
            .otherwise({
                template: "<h1>NONE</h1>"
            });
    });