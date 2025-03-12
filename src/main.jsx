import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import ContactPage from './pages/ContactPage.jsx';
import Continents from './pages/ContinentsPage.jsx';
import Home from './pages/Home.jsx';
import CountryDetails from './components/Countrydetails.jsx';
import Currencies from './components/Currencies.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <NavBar />
            <h1 style={{ color: '#999' }}>
                http://localhost:5173/country/South%20Georgia
            </h1>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/country/:name" element={<CountryDetails />} />

                <Route path="/continents" element={<Continents />} />
                <Route path="/currecnies" element={<Currencies />} />

                <Route
                    path="*"
                    element={<h1 style={{ color: 'blueviolet' }}>NOT FOUND</h1>}
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
