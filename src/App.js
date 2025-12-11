
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MarketingPage from './pages/marketing/MarketingPage';


function App() {
  return (
     
    <Router>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
        </Routes>
      </Router>
  );
}

export default App;
