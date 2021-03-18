import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './item.css'

function ListarProdutos(){
    const products = useSelector((state)=>state.products)
    const dispatch = useDispatch();
    
    return(
        <>
         {products.map(produto =>(
            <Card 
            style={{width:'15rem', margin: '60px', float:'left'}}>
                <Card.Img variant = 'top' src={produto.img}/>
                <Card.Body className = 'text-center'>
                    <Card.Title style={{heigth:'40px'}}>
                    {produto.name}
                    </Card.Title>
                    <Card.Text>
                    {produto.description}
                    {produto.price}
                    </Card.Text>
                    <Button
                    onClick={() => dispatch({type:'ADD_CART', id:produto.id})}
                    >Adicionar no carrinho </Button>
                   <Link to={"/item/"+ produto.id }>Ver mais detalhes do item</Link>
                </Card.Body>
            </Card>
        ))}
        </>
       )       
    
    
}


export default ListarProdutos;