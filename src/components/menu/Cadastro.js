import React from 'react'
import './cart.css'
import {Formik, Form , Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Menu from './menu'

const validations = yup.object().shape({
    nome:yup.string().required(),
    email:yup.string().email().required(),
    cep:yup.string().min(8).required(),
    cidade:yup.string().required(),
    bairro:yup.string().required(),
    rua:yup.string().required(),
})
const Cadastro = ({handleSubmit, initialValues})=>(
    <>
       <Menu/>
            <Formik initialValues={initialValues}
            onSubmit={handleSubmit} validationSchema={validations}>
                {({handleChange, handleBlur, handleSubmit, values})=>(
            <Form onsubmit={handleSubmit} className="container cadastroUser">
                <h4 className="text-center mt-2 mb-2">Cadastro de usuario</h4>
                <div className='form-group'>
                    <label>Informe seu nome:</label>
                    <Field
                    type="text"
                    name="nome"
                    id="nome"
                     className="form-control"
                     />
                     <ErrorMessage className="Form-Error" component="span"  name="nome"/>
                </div>

                <div className='form-group'>
                    <label>Informe seu e-mail:</label>
                    <Field type="email" 
                    name="email"
                    id="email"
                    className="form-control"
                   />
                   <ErrorMessage className="Form-Error" component="span"  name="email"/>
                </div>
                    <h4 className="text-center">dados endereço</h4>
                <div className='col-md-6'>
                    <div className="form-group">
                        <label>CEP</label>
                        <Field className="form-control"
                        name="cep"
                        id="cep"
                         />
                         <ErrorMessage className="Form-Error" component="span"  name="cep"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <label>rua</label>
                        <Field className="form-control"
                        name="rua"
                        id="rua"
                         />
                         <ErrorMessage className="Form-Error" component="span"  name="rua"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <label>bairro</label>
                        <Field className="form-control"
                        name="bairro"
                        id="bairro"
                        />
                        <ErrorMessage className="Form-Error" component="span"  name="bairro"/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="form-group">
                        <label>cidade</label>
                        <Field className="form-control"
                        name="cidade"
                        id="cidade"/>
                        <ErrorMessage className="Form-Error" component="span"  name="cidade"/>
                    </div>
                </div>
                <button className='cadastrarBtn' type="submit">Enviar informações</button>

            </Form>
            )}
            </Formik>
            </>
        
)


export default Cadastro