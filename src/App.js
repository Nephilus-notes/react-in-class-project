// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Counter from './components/Counter'
import Students from './components/Students'
import About from './components/About'
import Contact from './components/Contact'
import Pokemon from './components/Pokemon';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle'
import { AuthContext } from './contexts/AuthProvider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    const { login, user, logout } = useContext(AuthContext)

  return (
    <div className="App">
      <h2>Loggedin User : { user.username }</h2>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to='/students'>Students</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/pokemon'>pokemon</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          {
            (user.loggedIn) ?
          <li><button onClick={ logout }>Log Out</button></li> :
          <li><button onClick={ login }>Login</button></li>
          }
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/counter' element= { <Counter/> }/>
        <Route path='/students' element={ <Students/> } />
        <Route path='/about' element= { <About/> }/>
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/pokemon' element={ <Pokemon/> } />
        {/* <Route path='/blog' element={ <Blog/> } /> */}
        {/* nested Routes */}
        <Route path='/blog'>
          <Route path=":uid">
            <Route path=":id" element= { <BlogSingle/>} />
          </Route>
          <Route path="" element={ <Blog/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
