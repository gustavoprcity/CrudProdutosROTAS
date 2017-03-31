angular
	.module('produto')
	.config(config)

	function config($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('produto', {
				url: '/produto',
				controller: 'produtoController',
				templateUrl: '/modulos/produtos/produto.listar.html'
			})
			.state('produtoCadastrar',{
				url: '/produto/cadastrar',
				controller: 'produtoCadastrarController',
				templateUrl: '/modulos/produtos/produto.cadastrar.html'
			})
	}