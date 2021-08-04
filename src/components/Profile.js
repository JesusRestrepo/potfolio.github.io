import React from 'react';

import img from './img.png';
import img2 from './img2.png';

const Profile = ()=> {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols">
                    <div className="col">
                        <div className="about">
                            <img className="program" src="https://www.gamerslance.com/images/posts/e8e474184007d9979fb228abc4b935f1-0.jpg" />
                        </div>
                        <h2 className="title">SKILLS</h2>
                        <div>
                            <h4 className="front">FRONT-END</h4>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">HTML</p>
                            </div>
                            <div className="col1">
                                <div className="edit">80%</div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">CSS3</p>
                            </div>
                            <div className="col1">
                                <div className="edit">80%</div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">JAVASCRIPT</p>
                            </div>
                            <div className="col1">
                                <div className="edit2">50%</div>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">REACT</p>
                            </div>
                            <div className="col1">
                                <div className="edit2">50%</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="front mt-5">BACK-END</h4>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">FLASK ( Python )</p>
                            </div>
                            <div className="col1">
                                <div className="edit3">65%</div>
                            </div>
                        </div>    
                    </div>
                    <div className="col">
                        <div className="about">
                            <img className="program" src="https://www.wallpapertip.com/wmimgs/24-246645_programming-languages-wallpaper-hd.jpg" />
                        </div>
                        <h2 className="title">ABOUT</h2>
                        <div>
                            <p className="description">
                                Me considero una persona responsable, capaz de adaptarme en cualquier entorno, comunicativo. Me gusta ser una persona a la
                                cual le gusta afrontar retos que aparezcan a lo largo de mi vida, por lo cual, me gusta estar preparandome siempre para
                                poder dar el todo de mí en el momento que sea requerido, me gusta poner mi conocimiento al servicio de los demás, para 
                                lograr un progreso.
                            </p>
                            <p className="description">
                                En el ámbito profesional, me desempeño como desarrollador web (Junior), con conocimientos en HTML, CSS, JAVASCRIPT y REACT.JS 
                                en la parte de Front end, y en la parte del Back end, tengo conocimientos en Python, usando el framework Flask.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="proyectos">
                    <h2 className="title">PROJECTS</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols">
                        <div className="col7">
                            <div className="card">
                                <img src={img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Calculadora IMC</h5>
                                    <p className="card-text">Aplicación para conocer el Indice de Masa Corporal de las personas, clasificando resultados en tabla y dando una breve 
                                    definición de lo que quiere decir el rango en el que se ubica.</p>
                                    <a href="#" className="btn btn-primary">Ir al proyecto</a>
                                </div>
                            </div>
                        </div>
                        <div className="col7">
                            <div className="card">
                                <img src={img2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Juego infantil piedra, papel o tijera</h5>
                                    <p className="card-text">Pequeño juego infantil en el cual, se juega contra la computadora, tiene 3 opciones, piedra, papel o tijera, de acuerdo 
                                    a lo que escojas y escoja la com, te dice si ganaste o perdiste.</p>
                                    <a href="#" className="btn btn-primary">Ir al proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}



export default Profile;