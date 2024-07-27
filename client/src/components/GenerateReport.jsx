import React, { useState } from 'react';
import axios from 'axios';
import image from '../assets/BLW.jpg';

const GenerateReport = () => {
    const [patientId, setPatientId] = useState('');

    const handleGenerateReport = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/patients/${patientId}`);
            localStorage.setItem('patientReport', JSON.stringify(response.data));
            window.open('/report-card', '_blank');
        } catch (error) {
            console.error('Error generating report:', error);
            alert('An error occurred while generating the report. Please check the patient ID.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${image})` }}>
            <div className="p-8 max-w-md mx-auto bg-white border border-rose-400 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Generate Report</h2>
                <input
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Enter Patient ID"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleGenerateReport}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Generate Report
                </button>
            </div>
        </div>
    );
};

export default GenerateReport;
