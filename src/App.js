// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Counter from './components/Counter'
import Students from './components/Students'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to='/students'>Students</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/counter' element= { <Counter/> }/>
        <Route path='/students' element={ <Students/> } />
        <Route path='/about' element= { <About/> }/>
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
