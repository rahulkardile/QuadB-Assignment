import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Register from './page/register';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
