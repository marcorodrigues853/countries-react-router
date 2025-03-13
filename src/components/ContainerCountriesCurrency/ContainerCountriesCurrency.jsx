import { useEffect, useState } from 'react';
import CurrencyCountryCard from '../CurrencyCountryCard';
import { Link } from 'react-router';

function ContainerCountriesCurrency({ currency = 'eur' }) {
    // defenir o que vou receber de props ✅
    const [paises, setPaises] = useState();
    // ir buscar todos os países de acordo com a moeda que vem das props

    // renderizar os paises

    console.log('paises 873t4723', paises);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/currency/${currency}`)
            .then((response) => response.json())
            .then((countries) => {
                const newCountries = countries;
                setPaises(newCountries);
            });
    }, []);
    return (
        <div className="grid">
            {/* map */}
            {paises &&
                paises.map((pais) => (
                    <Link to={`/country/${pais.name.common}`}>
                        <CurrencyCountryCard
                            flag={pais.flags.png}
                            name={pais.name.common}
                        />
                    </Link>
                ))}
        </div>
    );
}

export default ContainerCountriesCurrency;
