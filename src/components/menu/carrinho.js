import React from 'react';
import PropTypes from 'prop-types';

import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';
function ItensCarrinhoMenu (props){
    function render(){
        if(props.produtos.length === 0){
            return (<NavDropdown.Item href="">
                    <FontAwesomeIcon icon={faSadTear}/>
                    &nbsp;
                    carrinho vazio!
                    </NavDropdown.Item>
                    );
        }
            const itens = props.produtos.map(produto=>
                <NavDropdown.Item href="" key={produto.id} >
                    {produto.name} - {produto.quantidade} X {produto.price}
                </NavDropdown.Item>
            )
            return itens;
        }

    
    return render();
}

ItensCarrinhoMenu.protoTypes ={
    produtos : PropTypes.array.isRequired
}
export default ItensCarrinhoMenu;