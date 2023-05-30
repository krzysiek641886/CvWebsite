import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from '@mui/material';
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import ProfilePage from "./Pages/ProfilePage";
import PageNotFound404 from "./Pages/PageNotFound404";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SchemaValidator from "./Components/SchemaValidator";

function App() {
    useEffect(() => {
        SchemaValidator();
    }, []);

    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar isMobile={isMobile} />
                <div className="page-content">
                    <Sidebar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={isMobile ? <ProfilePage /> : <WorkExperience />} />
                            <Route path="/Home" element={isMobile ? <ProfilePage /> : <WorkExperience />} />
                            <Route
                                path="/WorkExperience"
                                element={<WorkExperience />}
                            />
                            <Route path="/Education" element={<Education />} />
                            <Route path="/Skills" element={<Skills />} />
                            <Route path="*" element={<PageNotFound404 />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
