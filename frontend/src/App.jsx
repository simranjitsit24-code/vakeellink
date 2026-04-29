
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FindLawyers from './components/FindLawyer';
import AIAssistant from './components/AIAssistant';
import Chat from './components/Chat';
import Login from './pages/Login';
import LawyerProfile from './pages/LawyerProfile';
import MyCases from './pages/MyCases';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawyer-profile" element={<LawyerProfile />} />
        <Route path="/my-cases" element={<MyCases />} />
        <Route path="/find-lawyers" element={<FindLawyers />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
