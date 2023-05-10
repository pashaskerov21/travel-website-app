import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
