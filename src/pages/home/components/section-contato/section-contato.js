// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
// Importando css
import './css/section-contato.scss';
import '../geral.scss';
// Importando component
import Form from '../form/form.js';

const uniqueTitle = 'endereço-da-empresa';

//Content
const SectionContato = () => (
   
    <section id="section-contato">
        <div className="section-form">
            
            <Form />
        </div>
        <div className="section-contato">
            <h2>Onde Estamos</h2>
            <Row>
                <Col m={12} s={12}>
                    <div className="sc-map">
                        <iframe title={uniqueTitle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58813.29035004594!2d-43.106304!3d-22.8827136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfc89cabc774c121!2sPra%C3%A7a+Arariboia!5e0!3m2!1spt-BR!2sbr!4v1558542649276!5m2!1spt-BR!2sbr" width="100%" height="340px" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="sc-icons">
                        <i class="material-icons">email</i> <p>advocacia.adv.br</p>
                        <i class="material-icons">local_phone</i> <p>(21)99999-8787</p>
                        <i class="material-icons">location_on</i> <p>Rua dos arcos imaginários, n233, Casa Boa - RJ</p>
                    </div>
                </Col>
            </Row>
        </div>
    </section>    
);

export default SectionContato;