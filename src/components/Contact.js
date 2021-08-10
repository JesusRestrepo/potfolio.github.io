import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = ()=> {
    const confirmar = () => {

        const refresh = () => {
            alert('send');
            window.location.reload(true);
        }

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
                <div className="nombre mt-4">
                    <p>Nombre</p>
                    <div className="form-group">
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                        />
                    </div>
                </div>

                <div className="apellido mt-4">
                    <p>Apellido</p>
                    <div className="form-group">
                        <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            placeholder="Apellido"
                        />
                    </div>
                </div>

                <div className="correo mt-4">
                    <p>Correo</p>
                    <div className="form-group">
                        <input
                            type="text"
                            name="correo"
                            className="form-control"
                            placeholder="Correo"
                        />
                    </div>
                </div> 
                <a className="btn btn-primary mt-2 mb-3" onClick={confirmar} role="button">Submit</a>
            </div>
            
        </React.Fragment>
    );
}



export default Contact;