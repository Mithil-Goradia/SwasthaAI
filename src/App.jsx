import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import KYD from './pages/KYD';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyd" element={<KYD />} />
    </Routes>
  );
}

export default App;
