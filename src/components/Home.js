import React from 'react';

import Perfil from './perfil.jpg';

/*practica con pipe
const Home = (props)=> {

    const [saludo, setsaludo]= React.useState('hola')

    const cambiarSaludo = ()=>{
        setsaludo('prueba de estados')
    }

    const reset = ()=>{
        setsaludo('hola')
    }

    return(
        <React.Fragment>
            <div>
                {props.title}
                { saludo }
                <button onClick={ cambiarSaludo }>cambio saludo</button>
            </div>

            <div>
                {saludo !== 'hola' && (
                    <button onClick={ reset }>Resetear</button>
                )}
                
            </div>
        </React.Fragment>
    )
}
*/

const Home = (props) => {
    return(
        <React.Fragment>
            <div className="container mt-2">
                <div className="row row-cols-1 row-cols-sm-2 row-cols">
                    <div className="colname">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols">
                            <div className="colinformacion">
                                <h1 className="name">JESUS DAVID</h1>
                                <h1 className="surname">RESTREPO DIAZ</h1>
                                <h4>WEB DEVELOPER ( junior )</h4>
                                <p>Back end and front end</p>
                                <a className="btn btn-primary mt-2 mb-3" onClick={props.onClick} role="button">Contact me</a>
                            </div>
                            <div className="colinformacion mb-2 mt-2">
                                <img className="perfil" src={Perfil} />
                            </div>
                        </div>
                    </div>
                    <div className="coll">
                        <img className="img" src="https://www.duna.cl/media/2018/07/cursos-sobre-programacion.jpg" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;