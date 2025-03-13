import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import CardCountry, { CardCountryTeste } from './CardCountry';
import CurrencyCountryCard from './CurrencyCountryCard';
import ContainerCountriesCurrency from './ContainerCountriesCurrency/ContainerCountriesCurrency';

const CountryDetails = () => {
    const oQueTEmAquiDEntro = useParams({});

    // TODO:
    // 1) fazer rota   ✅
    // 2) compoent page ✅
    // 3) ler pais de onde da ROTA ✅
    // 4) ir buscar dados a API (UseEffect fetch)
    // URL:  https://restcountries.com/v3.1/name/portugal
    // 5) pego na info recebida e imprimo no ecrã

    console.log('O que tem aqui dentro', oQueTEmAquiDEntro);

    const { name } = useParams();

    const [pais, setPais] = useState(null);
    const [currencyForThisCountry, setCurrencyForThisCountry] = useState();

    console.log('currencyForThisCountry', currencyForThisCountry);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => response.json())
            .then((country) => {
                const newCountry = country[0];

                const currency = Object.keys(newCountry.currencies)[0];
                setPais(newCountry);
                setCurrencyForThisCountry(currency);
            });
    }, [name]);

    // if (!country) return <h2>Loading...</h2>;
    !pais && <h1>OLA LOAFING NAO</h1>;
    console.log('country_country', pais);
    return (
        pais && (
            <>
                <CardCountry country={pais} />

                <CardCountryTeste
                    name={pais.name.common}
                    flag={pais.flags.png}
                    capital={pais.capital}
                    population={pais.population}
                    isEurope={true}
                />

                <h1 style={{ color: 'black' }}>Paises com mesma moeda</h1>
                <div
                    style={{
                        color: 'red ',
                        display: 'grid',
                    }}>
                    <ContainerCountriesCurrency
                        currency={currencyForThisCountry}
                    />
                    <h1>SUICA</h1>
                    <ContainerCountriesCurrency currency="CHF" />

                    <h1>USD</h1>
                    <ContainerCountriesCurrency currency="usd" />

                    <h1>CUBANOS</h1>
                    <ContainerCountriesCurrency currency="CUP" />
                </div>
            </>
        )
    );
};

export default CountryDetails;
