if ($window._gaq) {
    $scope.$on('$viewContentLoaded', function(event) {
        var code4hkLink = angular.element(document.querySelector('#code4hk-badge-link'));
        code4hkLink.on('click', function() {
            $window._gaq.push(['_trackEvent', 'link', 'click', 'code4hk-badge-link']);
        });
    });
}