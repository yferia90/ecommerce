import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';
import Product from './pages/product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/:productId' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>        
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
