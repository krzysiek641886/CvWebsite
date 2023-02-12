import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home"
import PageNotFound404 from "./Pages/PageNotFound404"
import Navbar from "./Components/Navbar"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
