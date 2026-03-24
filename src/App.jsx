import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ✅ 不要导入 BrowserRouter
import Home from './pages/Home.jsx';
import Intro from './pages/Intro.jsx';
import Components from './pages/Components.jsx';
import History from './pages/History.jsx';
import ManageTeam from './pages/ManageTeam.jsx';
import BoardMember from './pages/BoardMember.jsx';
import Comite from './pages/Comite.jsx';
import Plot from './pages/Plot.jsx';
import DiviDendos from './pages/DiviDendos.jsx';
import Analistas from './pages/Analistas.jsx';
import Social from './pages/Social.jsx';

const App = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/corporativa/historia" element={<History />} />
      <Route path="/gobierno/equipo-directivo" element={<ManageTeam />} />
      <Route path="/corporativa/perfil" element={<Intro />} />
      <Route path="/accion/grafica-historica" element={<Plot />} />
      <Route path="/accion/precios-historicos" element={<DiviDendos />} />
      <Route path="/accion/analistas" element={<Analistas />} />
      <Route path="/responsabilidad-social" element={<Social />} />
    </Routes>
  );
};

export default App;