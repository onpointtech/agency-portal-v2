var app = angular.module('agencyPortal');

app.controller('agencyPortalController', function ($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;

    if(id != null){
        $http.get(`http://localhost:8082/api/claimant/getClaimantById/${id}`).then(function (response) {
            $scope.claimantSO = response.data;
            console.log($scope.claimantSO);
        });
    }

    $scope.goToProfile = function(path) {
        $location.path(`${path}/${id}`);
    };

    $scope.go = function(path) {
        $location.path(path);
    };
});