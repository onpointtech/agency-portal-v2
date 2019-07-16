
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
            .when("/angular-claimant-profile", {
                template: '<app-simple-claimant-profile firstName = "JM" lastName = "Ibardaloza" phone = "9999999999" address = "Somewhere in QC" ></app-simple-claimant-profile>'
            })
            .otherwise({
                template: "<h1>NONE</h1>"
            });
    });