import './App.css';

import { Routes, Route} from "react-router-dom";
import Beranda from './components/Beranda/Beranda.jsx';
import ListTempat from './components/ListTempat/ListTempat.jsx';
import DetailTempat from './components/DetailTempat/DetailTempat.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Beranda/>}/>
      <Route path="/beranda" element={<Beranda/>}/>
      <Route path="/list-tempat" element={<ListTempat/>}/>
      <Route path="/detail-tempat" element={<DetailTempat/>}/>
    </Routes>
  );
}

export default App;
