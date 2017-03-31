angular
	.module('produto')
	.controller('produtoController',produtoController)
	function produtoController($scope, produtoService){
		$scope.produtos = [];
	    $scope.produtos = produtoService.listarProdutos();
	    console.log('opa', $scope.produtos);


	$scope.deletarProduto = function(produto){
		produtoService.deletarProduto(produto);
	}

	$scope.editarProduto = function(produto){
		produtoService.editarProduto(produto);
	}
	}