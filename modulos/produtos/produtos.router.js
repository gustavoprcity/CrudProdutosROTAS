angular
	.module('produto')
	.config(config)

	function config($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('produto', {
				url: '/produto',
				controller: 'produtoController',
				templateUrl: '/modulos/produtos/produto.html'
			})
	}