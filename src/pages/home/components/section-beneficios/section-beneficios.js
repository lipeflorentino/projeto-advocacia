// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css
import './css/section-beneficios.scss';
import '../geral.scss';
// Importando imagens
import img from './img/adv1.jpg';
import img2 from './img/adv2.jpg';
import img3 from './img/adv3.jpg';

//Content
const SectionBeneficios = () => (
    <section>
        <div className="section-beneficios padding">
            <h2>Nossos Advogados</h2>
            <div className="sb-container">
                <Row>
                    <Col m={4} s={12}>
                        <div className="sb-content">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                  <img alt="" className="activator" src={img} title=""></img>
                                </div>
                                <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                  <p><a href="/">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                              </div>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="sb-content">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                  <img alt="" className="activator" src={img2} title=""></img>
                                </div>
                                <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                  <p><a href="/">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                              </div>
                        </div>
                    </Col>
                    <Col m={4} s={12}>
                        <div className="sb-content">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                  <img alt="" className="activator" src={img3} title=""></img>
                                </div>
                                <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                  <p><a href="/">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                              </div>
                        </div>
                    </Col>
                </Row>
            </div>    
        </div>
    </section>    
);

export default SectionBeneficios;