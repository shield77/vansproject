import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import SalesPage from "./components/SalesPage/SalesPage";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
