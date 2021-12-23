
import './App.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Blog from './pages/Blog';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Resources" element={<Resources />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
      </Routes>
      <div >
      
      </div>
    </Router>
    
    
  );
}

export default App;
