angular.module("calcApp", []);
angular.module("calcApp").controller("calcCtrl", function() {
	console.log("calcCtrl is alive!");
	// one option = $scope.inputName = 'World'; 
	this.inputName = 'Universe!'; 
});