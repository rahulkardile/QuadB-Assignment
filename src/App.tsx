import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Register from './page/register';
import Header from './components/Header';
import NotFound from './page/NotFound';
import Edit from './page/Edit';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/edit' element={<Edit />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
