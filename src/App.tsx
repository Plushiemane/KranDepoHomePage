import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import DlaDzieciPage from './pages/food/DlaDzieciPage';
import NapojePage from './pages/food/NapojePage';
import NapojeCieplePage from './pages/food/NapojeCieplePage';
import PrzekaskiPage from './pages/food/PrzekaskiPage';
import DodatkiPage from './pages/food/DodatkiPage';
import SalatkiPage from './pages/food/SalatkiPage';
import DaniaGlownePage from './pages/food/DaniaGlownePage';
import AlkoholePage from './pages/food/AlkoholePage';
import ZupyPage from './pages/food/ZupyPage';
import DeseryPage from './pages/food/DeseryPage';
import NotFoundPage from './pages/NotFoundPage';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <MenuProvider>
      {/* Removed the Router component since it's likely already in index.js */}
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Food category pages */}
        <Route path="/potrawy/dladzieci" element={<DlaDzieciPage />} />
        <Route path="/potrawy/napoje" element={<NapojePage />} />
        <Route path="/potrawy/napojecieple" element={<NapojeCieplePage />} />
        <Route path="/potrawy/przekaski" element={<PrzekaskiPage />} />
        <Route path="/potrawy/dodatki" element={<DodatkiPage />} />
        <Route path="/potrawy/salatki" element={<SalatkiPage />} />
        <Route path="/potrawy/daniaglowne" element={<DaniaGlownePage />} />
        <Route path="/potrawy/alkohole" element={<AlkoholePage />} />
        <Route path="/potrawy/zupy" element={<ZupyPage />} />
        <Route path="/potrawy/desery" element={<DeseryPage />} />
        
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MenuProvider>
  );
}

export default App;
