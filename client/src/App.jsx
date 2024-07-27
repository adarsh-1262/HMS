import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import GenerateReport from './components/GenerateReport';
import AddDoctor from './components/AddDoctor';
import ReportCard from './components/ReportCard';
import image from './assets/BLW.jpg'

const App = () => {
    return (
        <div className="min-h-screen" style={{ position: 'relative' }}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${image})`,
                    opacity: 0.3,
                    zIndex: -1, 
                }}
            ></div>
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/add-patient" element={<AddPatient />} />
                <Route path="/generate-report" element={<GenerateReport />} />
                <Route path="/report-card" element={<ReportCard />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;
