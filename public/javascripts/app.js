


// Angular module, defining routes for the app
var App =angular.module('polls', ['pollServices']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/polls',
  {
    templateUrl: 'partials/list.html',
    controller:'PollListController'
  }).
when('/poll/:pollId',
  { templateUrl: 'partials/item.html',
    controller:'PollItemController'
  }).
when('/new',
  {
    templateUrl: 'partials/new.html',
    controller:'PollNewController'
  }).
otherwise({ redirectTo: '/polls' });
}]);


// Angular module, defining routes for the app
/*angular.module('polls', ['pollServices']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
  when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
  when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
  // If invalid route, just redirect to the main list view
  otherwise({ redirectTo: '/polls' });
}]);*/


