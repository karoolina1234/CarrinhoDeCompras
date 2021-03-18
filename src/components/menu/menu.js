import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCashRegister, faShoppingCart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

function Menu(){
    
    const cart = useSelector((state) =>state.products.filter(item=>{
        return item.qtd > 0
    }))
    const total = useSelector(state=>state.products.reduce((acc, cur)=>{
        return acc + cur.qtd;
       },0))
    
    return(
        <div className = 'container'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">E-commerce</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <NavDropdown
                        title={
                            <div style={{display: 'inline-block'}}>
                               <Link to="/cart"> <FontAwesomeIcon icon = {faShoppingCart} /></Link> 
                                Carrinho {total}
                            </div>
                        }
                        drop='left'>
                        <NavDropdown.Item >
                        {cart.map(item=>(
                            <>
                            <h1>{item.name}</h1>
                            </>
                        ))}
                        </NavDropdown.Item>
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}


export default Menu; 