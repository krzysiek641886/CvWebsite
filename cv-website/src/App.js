import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import WorkExperience from "./Pages/WorkExperience"
import VoluntaryWork from './Pages/VoluntaryWork';
import PageNotFound404 from "./Pages/PageNotFound404"
import Contact from './Pages/Contact';
import Navbar from "./Components/Navbar"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<WorkExperience />} />
          <Route path="/Home" element={<WorkExperience />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/VoluntaryWork" element={<VoluntaryWork />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
