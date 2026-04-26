import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './frontend/components/Home';
import FindLawyers from './frontend/components/FindLawyer';
import AIAssistant from './frontend/components/AIAssistant';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-lawyers" element={<FindLawyers />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;