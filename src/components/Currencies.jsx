import { useEffect, useState } from 'react';

const Currencies = () => {
    const [countries, setCountries] = useState([]);
    const currencies = {};

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    countries.forEach((country) => {
        if (country.currencies) {
            Object.entries(country.currencies).forEach(([code, currency]) => {
                if (!currencies[code]) {
                    currencies[code] = { name: currency.name, countries: [] };
                }
                currencies[code].countries.push(country.name.common);
            });
        }
    });

    return (
        <div className="container">
            <h1>Currencies</h1>
            {Object.keys(currencies).map((code) => (
                <div key={code} className="currency-section">
                    <h2>
                        {currencies[code].name} ({code})
                    </h2>
                    <p>Used in: {currencies[code].countries.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default Currencies;
