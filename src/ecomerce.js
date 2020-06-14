import React,{useState} from 'react';
import './ecomerce.css';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import ItensCarrinhoMenu from './components/menu/carrinho'


function Ecomerce() {
  const [carrinho, setCarrinho] = useState({produtos: []});
  const [exibirProdutos, setExibirprodutos] = useState(true);
  const [total, setTotal] = useState('0.00');

  function adicionarProduto(produto){
    const objCarrinho = Object.assign({}, carrinho);

    let novoProduto = true;
    objCarrinho.produtos.forEach((prod, indice)=>{
      if(prod.name === produto.name){
        objCarrinho.produtos[indice].quantidade++;
        novoProduto = false;
      }
    })

    if(novoProduto){
      objCarrinho.produtos.push({
        name: produto.name, price: produto.price, quantidade: 1
      })
    }
    setCarrinho(objCarrinho);
  }

  function handleExibirProdutos(){
    setExibirprodutos(true);
    
  }
  function handleLimparCarrinho() {
    setCarrinho({ produtos: [] });
  }
  
  return (
  <div>
    <Menu 
    produtos={carrinho.produtos}
    handleExibirProdutos={handleExibirProdutos}
    handleLimparCarrinho={handleLimparCarrinho}
     />
  
    <Produtos
    visivel={exibirProdutos}
    adicionarProduto={adicionarProduto}
   />

    
    
  </div>
   
  );
}

export default Ecomerce;
