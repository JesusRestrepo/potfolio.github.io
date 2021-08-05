import React from 'react';

const Contact = ()=> {

    return(
        <React.Fragment>

            <div className="contenedor-contact">
                <h1 className="contact">Contact Me</h1>
                <h3 className="description-contact">For a better and effective contact,</h3>
                <h3 className="description-contact">please contact me through the following social networks</h3>
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
            </div>
        </React.Fragment>
    )
}



export default Contact;