angular.module('agencyPortal').directive('sideNavBar', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: './templates/side-nav-bar.html'
    }
});