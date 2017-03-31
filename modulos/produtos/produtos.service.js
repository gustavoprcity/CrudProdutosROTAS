angular
	.module('produto')
	.service('produtoService',produtoService)

	function produtoService(){
		var listaProdutos = [];
		var service ={
                cadastrarProduto : cadastrarProduto,
                listarProdutos : listarProdutos,
                deletarProduto : deletarProduto,
                editarProduto : editarProduto
                obterPorId : obterPorId
           	}
		function cadastrarProduto(produto){
			console.log(produto)
			listaProdutos.push(angular.copy(produto));
		}

		function listarProdutos(){
			return listaProdutos;
		}

		function deletarProduto(produto){
			var indice = listaProdutos.indexOf(produto);
			listaProdutos.splice(indice,1)
		}

		function editarProduto(produto, produtoNovo){
			var pos = listaProdutos.indexOf(produto)
			listarProdutos[pos] = angular.copy(produto);
		}
		function obterPorId(codigo){
			for (produto in listarProdutos){
				if(produto.codigo === codigo){
					return produto
				}
			}
		}
		return service;
	}
