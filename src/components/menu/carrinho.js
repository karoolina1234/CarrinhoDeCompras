import React from 'react';
import PropTypes from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './cart.css'

function ItensCarrinhoMenu (){
    const dispatch = useDispatch();

    const cart = useSelector(state =>state.products.filter(item=>{
        return item.qtd > 0
    }))
   
    const total = useSelector(state=>state.products.reduce((acc, cur)=>{
        return acc + cur.qtd;
       },0))


       const precoTotal = useSelector(state => state.products.reduce((acc, cur)=>{
        return acc+(cur.price * cur.qtd)
     },0))


     
      return(<div className="container carrinho-compras">
          <h5 className="mt-5">Carrinho de compras</h5>
            <p>Total de itens : {total} </p>
            <p>Valor total: {precoTotal} </p>

           
          {cart.map(produto=>(
                <table className="table">
                    <thead className="thead-table">
                        <th>Item</th>
                        <th>Nome</th>
                        <th>Quantia</th>
                        <th>preço unitario</th>
                        <th>preço total</th>
                    </thead>
                    <tbody>
                        <td><img src={produto.img}/></td>
                        <td>{produto.name}</td>
                        <td>
                        <button className="addCart"
                    onClick={() => dispatch({type:'REMOVE_CART', id:produto.id})}>
                        -</button>
                    {produto.qtd}
                    <button className="addCart"
                    onClick={() => dispatch({type:'ADD_CART', id:produto.id})}>
                        +</button>
                        </td>
                        <td>{produto.price}</td>
                        <td>{produto.price * produto.qtd}</td>
                    </tbody>

                </table>
            )
      )
}
<button className="remov" onClick={()=>dispatch({type:"CLEAR_CART"})}>
                Remover todos os itens
            </button>

            <button className="finalizar"><Link to="/cadastro">
            Finalizar compra</Link></button>
</div>

      )
}


export default ItensCarrinhoMenu;