var app = angular.module('app',['ui.router','produto'])
app.controller = ('appController', appController)
app.config(config)

function appController($scope){

}

function config($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('index',{
			url: '/index',
			controller: 'produtoController',
			templateUrl:'../../index.html' 
		});
}

