"use strict";

var module = angular.module('fizzBuzz', []);

module.service('FizzBuzzNumberGenerator', function(){
	this.generateXRandomNumbers = function(number){
		var out = [];
		for(var i=0; i < number; i++){
			out.push(Math.floor(Math.random() * 100000));
		}
		return out;
	}
});

module.controller('FizzBuzzController', ['$scope','FizzBuzzNumberGenerator', function($scope, generator){
	$scope.update = function (number){
		$scope.numbers = generator.generateXRandomNumbers(number);
	};
}]);

module.filter('NumberToFizzBuzz', function(){
	return function(input){
		var out = input % 3 === 0 ? "Fizz" : "";
		out += input % 5 === 0 ? "Buzz" : "";
		return out !== "" ?  out : input;
	}
});

module.filter('NumberToClass', function(){
	return function(input){
		var out = input % 3 === 0 ? "fizz" : "";
		out += input % 5 === 0 ? "buzz" : "";
		return out;
	}
});