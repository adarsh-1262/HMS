import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold mb-16">Welcome to Hospital Management System</h1>
            <div className="flex space-x-4">
                <Link to="/add-doctor">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Doctor</button>
                </Link>
                <Link to="/add-patient">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Patient</button>
                </Link>
                <Link to="/generate-report">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Generate Report</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
