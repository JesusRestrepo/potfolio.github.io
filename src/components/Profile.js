import React from 'react';
import { Button } from 'reactstrap';

import img from './img.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img5 from './img5.png';

const Profile = ()=> {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols">
                    <div className="col">
                        <div className="about">
                            <img className="program" src="https://www.gamerslance.com/images/posts/e8e474184007d9979fb228abc4b935f1-0.jpg" alt="img"/>
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
                                <div className="edit2">60%</div>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">REACT</p>
                            </div>
                            <div className="col1">
                                <div className="edit2">60%</div>
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
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">Node.js</p>
                            </div>
                            <div className="col1">
                                <div className="edit5">50%</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="front mt-5">DATABASES</h4>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols mt-3">
                            <div className="col4">
                                <p className="info">Mongo DB</p>
                            </div>
                            <div className="col1">
                                <div className="edit5">50%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about">
                            <img className="program" src="https://www.wallpapertip.com/wmimgs/24-246645_programming-languages-wallpaper-hd.jpg" alt="img"/>
                        </div>
                        <h2 className="title">ABOUT</h2>
                        <div>
                            <p className="description">
                            I consider myself a responsible person, capable of adapting to any environment, communicative. I like to be a person who 
                            likes to face challenges that appear throughout my life, for which, I like to always be preparing
                            myself to be able to give my all at the time it is required, I like to put my knowledge to the service of others, 
                            to achieve progress.
                            </p>
                            <p className="description">
                                In the professional field, I work as a web developer (Junior), with knowledge in HTML, CSS, JAVASCRIPT and REACT.JS
                                In the Front end part, and in the Back end part, I have knowledge of Python, using the Flask framework, 
                                and currently getting to know Node.js with Express.
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
                                    <Button href="https://jesusrestrepo.github.io/" color="primary" target="_blank" className="button">Ir al proyecto</Button>
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
                                    <Button href="https://jesusrestrepo.github.io/game.github.io/" color="primary" target="_blank" className="button">Ir al proyecto</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col7">
                            <div className="card">
                                <img src={img5} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Sitio web de ventas online (en construcción).</h5>
                                    <p className="card-text">Pequeño sitio web de una pequeña compañía para vender productos como gadgets tecnólogicos
                                    por medio online, con medio de pago, etc.</p>
                                    <Button href="https://thawing-inlet-43435.herokuapp.com/" color="primary" target="_blank" className="button">Ir al proyecto</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col7">
                            <div className="card">
                                <img src={img3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Sitio web de ventas online (en construcción).</h5>
                                    <p className="card-text">Pequeño sitio web de una pequeña compañía para vender productos como gadgets tecnólogicos
                                    por medio online, con medio de pago, etc.</p>
                                    <Button href="https://jesusrestrepo.github.io/shop/" color="primary" target="_blank" className="button">Ir al proyecto</Button>
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