import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import '../App.css';

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Contact = ()=> {

    const[habilitar, setHabilitar] = useState(false)

    const [datos, setDatos] = useState({
        name:'',
        surname:'',
        email:''
    })

    React.useEffect(() => {
        const validarNombre = datos.name.trim() === ''? false:true
        const validarApellido = datos.surname.trim() === ''? false:true
        const validarEmail = datos.email.trim() === ''? false:true
        const validarTodos = validarNombre && validarEmail && validarApellido
        setHabilitar(validarTodos)
    }, [datos])


    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("nombre: "+ datos.name+" "+"apellido: "+datos.surname+" "+"Email: "+datos.email);
    }

    return(
        <React.Fragment>
            <div className="contenedor-contact">
                <div className="informacion">
                    <h1 className="contact">Contact Me</h1>
                    <h3 className="description-contact">For a better and effective contact,</h3>
                    <h3 className="description-contact">please contact me through the following social networks</h3>
                </div>
            </div>

            <div className="contRedes mt-5">
                <h3 className="redes">Ubicación: Medellin, Antioquia, Colombia.</h3>
                <h3 className="redes">WhatsApp:<a href="https://api.whatsapp.com/send?phone=573173617622">+57(317)-361-7622</a> </h3>
            </div>

            <div className="separador mt-5">
            </div>

            <div className="contenedor mt-5">
                    <Form onSubmit={handleSubmit}>
                    <FormGroup className="form">
                        <Label for="name">Nombre</Label>
                        <Input type="text" name="name" onChange={handleInputChange} id="form" placeholder="Nombre" />
                    </FormGroup>
                    <FormGroup className="form">
                        <Label for="surname">Apellido</Label>
                        <Input type="text" name="surname" onChange={handleInputChange} id="form" placeholder="Apellido" />
                    </FormGroup>
                    <FormGroup className="form">
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" onChange={handleInputChange} id="form" placeholder="Email" />
                    </FormGroup>
                    {habilitar ? (
                        <Button className="button mt-5" type="Submit" color="primary" role="button">Submit</Button>
                    ):(
                        <Button className="button mt-5" disabled type="Submit" color="primary" role="button">Submit</Button>
                    )}
                    
                </Form>
                </div>
            
        </React.Fragment>
    );
}



export default Contact;