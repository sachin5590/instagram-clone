import React from "react";
import { Route, Routes } from 'react-router-dom';

import Footer from './Footer';
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Accounts = () => {
    const getPageBasedOnRoute = () => {
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
        );
    }

    return (
        <>
            <div className="flex flex-col mx-auto max-w-sm p-6 border border-gray-300">
                <div className="font-mono text-center text-4xl">Instagram</div>
                {getPageBasedOnRoute()}
            </div>
            <Footer />
        </>
    );
};

export default Accounts;
