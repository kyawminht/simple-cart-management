
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'My Shop';
  }, []);
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
