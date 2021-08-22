import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Contact = ()=> {

    const confirmar = () => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Sent successfully');
                        window.location.reload(true);
                    }
                },
                  {
                    label: 'No'
                  }
            ]
        });
    };

    return(
        <React.Fragment>
            <div className="contenedor-contact">
                <div className="informacion">
                    <h1 className="contact">Contact Me</h1>
                    <h3 className="description-contact">For a better and effective contact,</h3>
                    <h3 className="description-contact">please contact me through the following social networks</h3>
                </div>
            </div>

            <div className="contenedor mt-5">
                <h3 className="redes">Ubicación: Medellin, Antioquia, Colombia.</h3>
                <h3 className="redes">Facebook</h3>
                <h3 className="redes">WhatsApp: +57 317-3617622</h3>
                <h3 className="redes">github</h3>
                <h3 className="redes">LinkedIn</h3>
            </div>

            <div className="separador mt-5">
            </div>

            <div className="contenedor mt-5">
                <Form>
                    <FormGroup className="form">
                        <Label for="name">Nombre</Label>
                        <Input type="text" name="name" id="form" placeholder="Nombre" />
                    </FormGroup>
                    <FormGroup className="form">
                        <Label for="surname">Apellido</Label>
                        <Input type="text" name="surname" id="form" placeholder="Apellido" />
                    </FormGroup>
                    <FormGroup className="form">
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="form" placeholder="Email" />
                    </FormGroup>
                    <Button className="button mt-5" onClick={confirmar} color="primary" role="button">Submit</Button>
                </Form>
            </div>
            
        </React.Fragment>
    );
}



export default Contact;