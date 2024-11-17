import logo from './logo.svg';
import './App.css';
import Litwears from './Litwears';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wears from './Wears';

function App() {
  return (
    
<div className="at">
<Router>
  <Routes>
  <Route path="/" element={<Litwears />} />
  <Route path="/wears" element={<Wears />} />

  </Routes>
</Router>
</div>
  );
}

export default App;
