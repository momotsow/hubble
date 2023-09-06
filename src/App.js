import { createBrowserRouter } from "react-router-dom";
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Banner  from './component/Banner/Banner';
import AccordionSection from './component/Accordion/Accordion';

const App  = createBrowserRouter([ 
  {
    path: "/",
    element: <Banner />,
  },
  {
    path: "/banner",
    element: <Banner />,
  },
  {
    path: "/accordion",
    element: <AccordionSection />,
  },
]);

export default App;

