// Importando o React
import React, { Component } from 'react';
// Importando o Component Navbar
import Menu from './pages/home/components/navbar/navbar';        
// Importando o component Main
import Main from './main';
// Importando o component Footer
import Footer from './pages/home/components/footer/footer';   

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <header>
          <Menu />
        </header>
        <Main />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;