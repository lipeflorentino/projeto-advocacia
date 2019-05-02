// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Import stylesheet
import './css/section-header.scss';
// Importando img
import logo from './img/nologo.png';
//Content
const SectionHeader = () => (
    <section>
        <div className="section-header">
            <Row>
                <Col s={12} m={6}>
                    <div className="sh-title">
                        <h1>Título do header em h1</h1>
                        <p>Texto do header em paragraph, não é um texto longo é curto e objetivo que procura passar a ideia da empresa.</p>
                    </div>
                </Col>
                <Col s={12} m={6}>
                    <div className="sh-logo-title">
                        <img src={logo} title="logo-da-empresa" alt="Logo" />
                    </div>
                </Col>
            </Row>
        </div>
    </section>    
);

export default SectionHeader;