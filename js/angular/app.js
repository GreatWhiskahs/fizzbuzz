"use strict";

var module = angular.module('fizzBuzz', []);

module.service('FizzBuzzService', function(){
	this.fizzBuzz = function(number){
		var out = number % 3 === 0 ? "Fizz" : "";
		out += number % 5 === 0 ? "Buzz" : "";
		return out !== "" ?  out : number;
	}
});

module.controller('FizzBuzzController', function($scope){
	$scope.update = function (number){
		var out = [];
		for(var i=0; i < number; i++){
			out.push({ number: Math.floor(Math.random() * 100000) });
		}
		$scope.numbers = out;
	};
});

module.filter('NumberToFizzBuzz', function(FizzBuzzService){
	return function(input){
		return FizzBuzzService.fizzBuzz(input);
	}
});