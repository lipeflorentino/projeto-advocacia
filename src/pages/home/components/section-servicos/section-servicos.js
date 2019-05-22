// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css
import './css/section-servicos.scss';
import '../geral.scss';

//Content
const SectionServicos = () => (
    <section>
        <div className="section-servicos padding">
            <h2>Áreas de Atuação</h2>
            <Row>
                <Col m={6} s={12}>
                    <div className="ss-content">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>First</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Forth</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col m={6} s={12}>
                    <div className="ss-content">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>First</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">add</i>Forth</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    </section>    
);

export default SectionServicos;