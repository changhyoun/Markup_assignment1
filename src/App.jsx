import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Container from './components/Container';

function App() {
  return (
    <Router basename="/Markup_assignment1">
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;