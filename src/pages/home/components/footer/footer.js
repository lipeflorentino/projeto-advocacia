// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
import './css/footer.scss';
import '../geral.scss';
// Importando js files
import "./js/click-to-nav.js";

//Content
const Footer = () => (
    <div>
        <div className="page-footer padding">
            <Row>
                <Col s={12} m={4}>
                    <div className="pf-infos info-local">
                        
                    </div>
                </Col>
                <Col s={12} m={4}>
                    <div className="pf-infos info-socials">
                        <a href="/"><i className="fa fa-facebook-square"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="pf-menu">
                        <ul>
                            <li id="upToHome"><a href="#upToHome">Home</a></li>
                            <li id="upToAtuacao"><a href="#upToAtuacao">Atuação</a></li>
                            <li id="upToEscritorio"><a href="#upToEscritorio">Escritório</a></li>
                            <li id="upToAdvogado"><a href="#upToAdvogado">Advogados</a></li>
                            <li id="upToContato"><a href="#upToContato">Contato</a></li>
                        </ul>
                    </div>
                </Col>
                <Col s={12} m={4}>
                    <div className="pf-infos info-links">
                    </div>
                </Col>
            </Row>
        </div>
        <div className="pf-copyright">
            Copyright@ 2019 Pedrosa & Cunha Advocacia | site desenvolvido por 
            <a href="http://www.bigempreendimentos.com.br" className="pf-logo">
                BIG Soluções Digitais
            </a>
        </div>
    </div>    
);

export default Footer;