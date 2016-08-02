angular.module("calcApp", []);
angular.module("calcApp").controller("calcCtrl", function() {
	console.log("calcCtrl is alive!");
	// one option = $scope.inputName = 'World'; 
	this.value1 = 0;
	this.value2 = 0;
	this.result = 0; 

	this.add = function() {
		this.result = this.value1 + this.value2;
	}
	this.subtract = function() {
		this.result = this.value1 - this.value2;
	}
	this.multiply = function() {
		this.result = this.value1 * this.value2;
	}
	this.divide = function() {
		this.result = this.value1 / this.value2;
	}
	this.reset = function() {
		this.result = 0;
		this.value1 = 0;
		this.value2 = 0; 
	}
});