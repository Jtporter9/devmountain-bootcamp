angular.module('portfolioApp')


.directive('dirMainHead', function () {
		return {
			templateUrl: 'js/Directives/dirMainHead/dirMainHead.html',
			controller: function($scope){
				
				$scope.navToggle = function(){
					$scope.showNav = !$scope.showNav;
				}
				
			}
		}
})
	
// .controller('dirMainHeadCtrl', function($scope){
	
// 	var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');
	
// 	};
	
// })