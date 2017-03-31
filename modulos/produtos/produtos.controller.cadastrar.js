angular
    .module('produto')
    .controller('produtoCadastrarController',produtoCadastrarController )
    
    function produtoCadastrarController($scope, produtoService){
        $scope.produto={}

        $scope.cadastrar = function(produto){
           produtoService.cadastrarProduto(produto)
        }
    }