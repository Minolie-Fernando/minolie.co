import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage'

import {Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Row type="flex" align="middle">
        {/* <Col>
        <LandingPageProfile />
        </Col> */}
      </Row>
      <Row type="flex" align="middle">
        <Col>
        <LandingPage />
        </Col>
        {/* <Col>
        <LandingDescription />
        </Col> */}
      </Row>
      {/* <Row>
        <Col>
        <LandingPageLinks />
        </Col>
      </Row>
      <Row>
        <Col>
        <LandingPageProjectButtons />
        </Col>
      </Row> */}
      </header>
    </div>
  );
}

export default App;
