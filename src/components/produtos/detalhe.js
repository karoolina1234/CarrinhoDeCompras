import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Menu from '../menu/menu'

function Detalhe(){
    const products = useSelector((state)=>state.products)
    var url = window.location.href;
    url = url.split('item/');
    url = url[1];
    console.log(url)
    const dispatch = useDispatch();
    return(
       <>
       <Menu/>
       {products.map(produto =>{
          if(produto.id==url){
           return (
                <div className="container detalhesItem">
                    <h2 className="text-center mb-2 mt-2">Detalhes do item</h2>
                    <div className="col-md-6">
                        <img src={produto.img}/>
                    </div>
                    <div className="col-md-6">
                    <h4>Nome do produto:{produto.name}</h4>
                    <p>Id do item:{produto.id}</p>
                    <h5>Valor do item R${produto.price}</h5>

                    <button
                    className="addItemCart"
                    onClick={() => dispatch({type:'ADD_CART', id:produto.id})}
                    >Adicionar no carrinho </button>
                    </div>
                    
                </div>
            )
          }
                
           
        })}
       </>
    )
}

export default Detalhe