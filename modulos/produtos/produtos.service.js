angular
	.module('produto')
	.service('produtoService',produtoService)

	function produtoService(){
		var listaProdutos = [];
		var service ={
                cadastrarProduto : cadastrarProduto
		}
		function cadastrarProduto(produto){
			listaProdutos.push(angular.copy(produto));
		}
	}
