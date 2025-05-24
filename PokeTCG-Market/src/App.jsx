import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Stage2 from './pages/Stage2';
import Stage1 from './pages/Stage1';
import Login from './components/Login'; 
import Footer from './components/Footer';
import Search from './pages/Search';
import Basics from './pages/Basics'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/stage2" element={<Stage2 />} />
        <Route path="/stage1" element={<Stage1 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/basics" element={<Basics />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
