import React from 'react';

const Contact = ()=> {

    return(
        
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
    )
}



export default Contact;