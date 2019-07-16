(function (angular) {
    angular
        .module('agencyPortal')
        .component('app-routing', {})
        .config(config);

    function config($routeProvider) {
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
    };
})(window.angular);