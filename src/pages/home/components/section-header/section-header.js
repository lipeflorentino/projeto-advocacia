// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Import stylesheet
import './css/section-header.scss';
import '../geral.scss';
// Importando img
import logo from './img/logo.png';
//Content
const SectionHeader = () => (
    <section>
        <div className="section-header">
            <div className="sh-background"></div>
            <Row>
                <Col s={12}>
                    {/*<div className="sh-logo-title logo-mobile">
                         <img src={logo} title="logo-da-empresa" alt="Logo" />
                    </div>*/}
                </Col>
                <Col s={12} m={6}>
                    <div className="sh-title">
                        <h1>Título do header em h1</h1>
                        <p>Texto do header em paragraph, não é um texto longo é curto e objetivo que procura passar a ideia da empresa.</p>
                        <a href="/" className="btn-class">CLIQUE AQUI</a>
                    </div>
                </Col>
                <Col m={6}>
                    {/*<div className="sh-logo-title logo-desktop">
                        <img src={logo} title="logo-da-empresa" alt="Logo" />
                    </div>*/}
                </Col>
            </Row>
        </div>
    </section>    
);

export default SectionHeader;