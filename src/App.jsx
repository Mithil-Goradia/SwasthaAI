import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import KYD from './pages/KYD';
import HerbalStore from './pages/HerbalStore';
import "./styles/HerbalStore.css"
import Hub from './pages/Hub';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyd" element={<KYD />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/store" element={<HerbalStore />} />
    </Routes>
  );
}

export default App;
