import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import KYD from './pages/KYD';
import HerbalStore from './pages/HerbalStore';
import Hub from './pages/Hub';
import NatureScan from './pages/NatureScan'
import PricingPage from './pages/PricingPage';
import Heatmap from './pages/HeatMap';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyd" element={<KYD />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/store" element={<HerbalStore />} />
        <Route path="/scan" element={<NatureScan />} />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/heat" element={<Heatmap />} />
    </Routes>
  );
}

export default App;
