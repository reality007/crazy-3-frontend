
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/user' element = {<Welcome/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App;
