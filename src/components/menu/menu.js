import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCashRegister, faShoppingCart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ItensCarrinhoMenu from './carrinho';
import Button from 'react-bootstrap/Button';
function Menu(props){
    function calcularTotal(){
        if(props.produtos.length === 0){
            return '0.00';
        }
        let total = 0;
        props.produtos.forEach(produto => {
            let preco = produto.price;
            total += parseFloat(preco) * produto.quantidade;
        });
        return total.toFixed(2).toString().replace('.',',');
    }
  

    return(
        <div className = 'container'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">E-commerce</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <NavDropdown
                        title={
                            <div style={{display: 'inline-block'}}>
                                <FontAwesomeIcon icon = {faShoppingCart}/>
                                &nbsp;
                                Carrinho
                            </div>
                        }
                        drop='left'>
                            <NavDropdown.Item href=""
                            onClick={props.handleExibirProdutos}>
                                <FontAwesomeIcon icon ={faShoppingBasket}/>
                                &nbsp;
                                <strong>Produtos</strong>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <ItensCarrinhoMenu produtos={props.produtos}/>
                            &nbsp;
                            <Button  variant="light" onClick={props.handleLimparCarrinho} >Limpar Carrinho</Button>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="">
                                Total: R${calcularTotal()}
                            </NavDropdown.Item>
                          
                            
                        
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

Menu.proTypes = {
    produtos: PropTypes.array.isRequired,
    handleExibirProdutos: PropTypes.func.isRequired,
    handleExibirCheckout: PropTypes.func.isRequired
}

export default Menu; 