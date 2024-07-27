import React, { useEffect, useState } from 'react';
import logo from '../assets/blwLogo.png';

const ReportCard = () => {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const storedPatient = localStorage.getItem('patientReport');
        if (storedPatient) {
            setPatient(JSON.parse(storedPatient));
        }
    }, []);

    const handlePrint = () => {
        window.print();
    };

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8 max-w-4xl mx-auto border border-rose-400 bg-white">
            <header className="text-center mb-8">
                <img src={logo} alt="Hospital Logo" className="mx-auto mb-4 w-24 h-24" />
                <h1 className="text-2xl font-bold">Central Hospital BLW</h1>
                <h2 className="text-lg">Banaras Locomotive Works, Varanasi - 221004</h2>
            </header>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-1">
                    <strong>Patient ID:</strong> {patient.patientId}
                </div>
                <div className="col-span-1">
                    <strong>Name:</strong> {patient.name}
                </div>
                <div className="col-span-1">
                    <strong>Age:</strong> {patient.age}
                </div>
                <div className="col-span-1">
                    <strong>Gender:</strong> {patient.gender}
                </div>
                <div className="col-span-1">
                    <strong>Disease:</strong> {patient.disease}
                </div>
                <div className="col-span-1">
                    <strong>Department:</strong> {patient.department}
                </div>
                <div className="col-span-1">
                    <strong>Phone:</strong> {patient.phone}
                </div>
                <div className="col-span-1">
                    <strong>Date:</strong> {new Date().toLocaleDateString()}
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Doctor's Prescription:</h3>
                <div className="h-80 border border-gray-300 p-4">
                    {/* The doctor's prescription will be written here */}
                </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handlePrint}>
                Print
            </button>
        </div>
    );
};

export default ReportCard;
