import { Routes, Route } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import Home from './pages/Home';
import About from './pages/About';
import Modulo01 from './pages/Modulo01';
import Modulo02 from './pages/Modulo02';
import Modulo03 from './pages/Modulo03';
import Modulo04 from './pages/Modulo04';
import Modulo05 from './pages/Modulo05';
import Modulo06 from './pages/Modulo06';
import Modulo07 from './pages/Modulo07';
import Modulo08 from './pages/Modulo08';

function App() {
  return (
    <CourseProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/modulo-01" element={<Modulo01 />} />
        <Route path="/modulo-02" element={<Modulo02 />} />
        <Route path="/modulo-03" element={<Modulo03 />} />
        <Route path="/modulo-04" element={<Modulo04 />} />
        <Route path="/modulo-05" element={<Modulo05 />} />
        <Route path="/modulo-06" element={<Modulo06 />} />
        <Route path="/modulo-07" element={<Modulo07 />} />
        <Route path="/modulo-08" element={<Modulo08 />} />
      </Routes>
    </CourseProvider>
  );
}

export default App;
