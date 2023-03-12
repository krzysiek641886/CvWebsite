import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import WorkExperience from "./Pages/WorkExperience";
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import PageNotFound404 from "./Pages/PageNotFound404";
import Navbar from "./Components/Navbar";
import SchemaValidator from './Components/SchemaValidator';

function App() {
  useEffect(() => {
    SchemaValidator();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<WorkExperience />} />
          <Route path="/Home" element={<WorkExperience />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
