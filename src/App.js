import { createBrowserRouter } from "react-router-dom";
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Banner  from './component/Banner/Banner';
import AccordionSection from './component/Accordion/Accordion';

const App  = createBrowserRouter([ 
  {
    path: "/huble/",
    element: <div><Banner /></div>,
  },
  {
    path: "/huble/accordion",
    element: <div><AccordionSection /></div>,
  },
]);

export default App;

