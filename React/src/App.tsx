import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
    <div className="App">
      <div className="centered-container">
        <Container style={{ border: '1px solid black', height: '60%', width: '80%' }}>
          {/* Add your components here */}
        </Container>
      </div>
    </div>
 );
}

export default App
