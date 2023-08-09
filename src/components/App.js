import React from 'react';
import { Route, Routes} from 'react-router-dom';
import '../styles/App.scss'
import Works from '../pages/Works';
import Landing from '../pages/Landing';
import Contact from '../pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes> 
          <Route path="/" element={
              <>
                <Landing />
              </>
              }  /> 
            <Route path="/works" element={
              <>
                <Works />
              </>
              }  /> 
            <Route path="/contact" element={
              <>
                <Contact />
              </>
              }  /> 
          </Routes>
    </div>
  );
}

export default App;

