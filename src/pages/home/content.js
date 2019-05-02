// Importando o React
import React, { Component } from 'react';
// Importando components
import SectionServicos from './components/section-servicos/section-servicos';
import SectionEmpresa from './components/section-empresa/section-empresa';
import SectionBeneficios from './components/section-beneficios/section-beneficios';
import SectionClientes from './components/section-clientes/section-clientes';
import SectionContato from './components/section-contato/section-contato';
import SectionHeader from './components/section-header/section-header';

class Content extends Component {
  render() {
    return (
        <div id="content-container">
            <SectionHeader />
            <SectionServicos />
            <SectionEmpresa />
            <SectionBeneficios />
            <SectionClientes />
            <SectionContato />
        </div>
    );
  }
}

export default Content;