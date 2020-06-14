import React from 'react'
import imagem from '../../imgs/img.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import imagem2 from '../../imgs/img2.png';
import imagem3 from '../../imgs/img3.png';
import imagem4 from '../../imgs/img4.png';
import imagem5 from '../../imgs/img5.png';
import imagem6 from '../../imgs/img6.png';
function ListarProdutos(props){
    const produtos=[
        {
            id: 1,
            name: 'Camiseta Cinza e rosa',
            description: 'Camiseta feminina tamanho unico. ',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 20.00,
            stock: 5,
            img: imagem
           
        }, {
            id: 2,
            name: 'camiseta amarela',
            description: 'Camiseta feminina tamanho P e pp. ',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 69.9,
            stock: 2,
            img: imagem3
        }, {
            id: 3,
            name: 'camiseta amarela com listra',
            description: 'Camiseta feminina tamanho M. ',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 9.9,
            stock: 1,
            img: imagem2
        },

        {
            id: 4,
            name: 'camiseta cinza com listra',
            description: 'camiseta feminina tamanho M .',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 50.0,
            stock: 5,
            img: imagem4
           
        },

        {
            id: 5,
            name: 'camiseta amarela escura',
            description: 'Feminina, disponivel em todos os tamanhos',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 25.5,
            stock: 8,
            img: imagem5
           
        },

        {
            id: 6,
            name: 'camiseta branca',
            description: 'Feminina, disponivel em todos os tamanhos',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto velit sed, veniam ea hic esse amet ducimus aliquid eos temporibus repellat possimus tenetur laudantium dolores, minus at vitae rem.',
            price: 19.9,
            stock: 5,
            img: imagem6
           
        },

        

    ];

    function handleComprar(event, produto){
        event.preventDefault();
        props.adicionarProduto(produto);
        props.exibirMensagem(produto);
        
    }
    function render(){
        let key = 1;
        const cards = produtos.map(produto =>
            <Card 
            key={key}
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
                    variant='dark'
                    style={{width: '100%'}}
                    onClick={(event)=> handleComprar(event,produto)}>Adicionar no carrinho </Button>
                </Card.Body>
            </Card>
        );
        return cards;
    }
    return render();
}
ListarProdutos.propTypes={
    adicionarProduto : PropTypes.func.isRequired,
    exibirMensagem : PropTypes.func.isRequired
}

export default ListarProdutos;