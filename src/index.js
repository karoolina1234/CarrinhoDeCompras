import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ecomerce from './ecomerce';
import ItensCarrinhoMenu from './components/menu/carrinho'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider} from 'react-redux'
import store from '../src/redux/store'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastro from '../src/components/menu/Cadastro'
import Detalhe from './components/produtos/detalhe';
const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}
ReactDOM.render(
  
  <Provider store={store}>
  <>
  <BrowserRouter>
  <Route exact path="/cart" component={ItensCarrinhoMenu} />
  <Route exact path="/" component={Ecomerce} />
  <Route exact path="/cadastro" >
    <Cadastro  handleSubmit={handleSubmit} initialValues={initialValues}/>
  </Route>
  <Route  path="/item/:id" >
    <Detalhe/>
  </Route>
</BrowserRouter>
  </>
</Provider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
