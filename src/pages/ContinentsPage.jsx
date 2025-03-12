import { useEffect, useState } from 'react';

const Continents = () => {
    const [regions, setRegions] = useState([]);
    const regionFlags = {
        Africa: 'https://flagcdn.com/w320/za.png', // South Africa
        Americas: 'https://flagcdn.com/w320/us.png', // USA
        Asia: 'https://flagcdn.com/w320/jp.png', // Japan
        Europe: 'https://flagcdn.com/w320/fr.png', // France
        Oceania: 'https://flagcdn.com/w320/au.png', // Australia
        Antarctic:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Antarctica.svg/320px-Flag_of_Antarctica.svg.png',
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                const uniqueRegions = Array.from(
                    new Set(
                        data.map((country) => country.region).filter(Boolean)
                    )
                );
                setRegions(uniqueRegions);
            });
    }, []);

    return (
        <div className="container">
            <h1>Continents</h1>
            <div className="grid">
                {regions.map((region) => (
                    <div key={region} className="card">
                        <h2>{region}</h2>
                        <img src={regionFlags[region]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Continents;
