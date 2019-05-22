// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css
import './css/section-empresa.scss';
import '../geral.scss';
import img from './img/escritorio.jpg';
//Content
const SectionEmpresa = () => (
    <section>
        <div className="section-empresa padding">
            <h2>Nosso Escritório</h2>
            <Row>
                <Col m={5} s={12}>
                    <div className="se-img">
                        <img src={img} alt="" title=""></img>
                    </div>
                </Col>
                <Col m={7} s={12}>
                    <div className="se-text">
                        <h3>Um título em H3</h3>
                        <p>Um texto falando sobre o escritório da empresa, não é um texto curto, mas também não é um texto longo. Um texto falando sobre o escritório da empresa, não é um texto curto, mas também não é um texto longo. Um texto falando sobre o escritório da empresa, não é um texto curto, mas também não é um texto longo. </p>
                    </div>
                </Col>
            </Row>
        </div>
    </section>    
);

export default SectionEmpresa;