
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './frontend/components/Home';
import FindLawyers from './frontend/components/FindLawyer';
import AIAssistant from './frontend/components/AIAssistant';
import Chat from './frontend/components/Chat';
import Login from './frontend/pages/Login';
import LawyerProfile from './frontend/pages/LawyerProfile';
import MyCases from './frontend/pages/MyCases';
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
