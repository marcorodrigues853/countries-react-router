import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Card from '../components/Card/Card';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <div className="container">
            <h1>Countries List</h1>

            <div className="grid">
                {countries.map((country, index) => (
                    <Link
                        key={country.cca3}
                        to={`/country/${country.name.common}`}>
                        <Card color={index % 2 === 0 ? 'red' : 'blue'}>
                            <img
                                src={country.flags.svg}
                                alt={country.name.common}
                            />
                            <h2>{country.name.common}</h2>
                        </Card>
                        {/* <Card layout="circle" color="pink">
                            <img
                                src={country.flags.svg}
                                alt={country.name.common}
                            />
                            <h2>{country.name.common}</h2>
                        </Card> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
