angular
	.module('produto')
	.controller('produtoController',produtoController)

	 function produtoController($scope){
	 	$scope.produto{};
        $scope.produtos=[];
        $scope.app="Cadastro de Produtos";

	$scope.cadastrarProduto = function(produto){		
     	$scope.produtos.push(angular.copy(produto))
	}
}