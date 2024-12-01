import './App.css';
import DoorPage from './DoorPage';
import Mainpage from './MainPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter>
    <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="*" element={<DoorPage />} />
    </Routes>
  </MemoryRouter>

  );
}

export default App;
