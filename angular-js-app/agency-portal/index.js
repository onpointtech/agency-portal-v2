
angular.module("agencyPortal", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<home></home>'
            })
            .when("/claimant-overview", {
                template: '<claimant-overview></claimant-overview>'
            })
            .when("/claimant-profile", {
                template: '<claimant-profile></claimant-profile>'
            })
            .otherwise({
                template: "<h1>NONE</h1>"
            });
    });