import React from 'react';
import { Navbar } from './components';
import { Home, News, Cryptos } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

const { Footer } = Layout


function App() {
  return (
    <div className="App">
      <Layout>
          <Navbar></Navbar>
        <Layout>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/Cryptos" element={<Cryptos />} />
            <Route exact path="/news" element={ <News />} />
          </Routes>
          <div className="footer">
            <Footer style={{ textAlign: 'center' }}>Crated By Mohamed Andaloussi ©2022</Footer>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
