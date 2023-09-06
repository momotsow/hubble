import { createBrowserRouter } from "react-router-dom";
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Banner  from './component/Banner/Banner';
import AccordionSection from './component/Accordion/Accordion';

const App  = createBrowserRouter([ 
  {
    path: "/huble/",
    element: <Banner />,
  },
  {
    path: "/huble/banner",
    element: <Banner />,
  },
  {
    path: "/huble/accordion",
    element: <AccordionSection />,
  },
]);

export default App;

