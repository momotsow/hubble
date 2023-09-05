import './App.css';
import { Routes, Route } from 'react-router-dom';
import Banner  from './component/Banner/Banner';
import AccordionSection from './component/Accordion/Accordion';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/huble/banner" element={<Banner />} />
        <Route path="/huble/accordion" element={<AccordionSection />} />
      </Routes>
    </div>
  );
}

export default App;

