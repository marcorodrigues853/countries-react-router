import CurrencyCard from './CurrencyCard';

function CardCountry({ country }) {
    console.log('country', country);
    return (
        <div className="details-container">
            <h1>{country.name.common}</h1>
            <img src={country.flags.svg} alt={country.name.common} />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Languages: {Object.values(country.languages).join(', ')}</p>
            <CurrencyCard>{Object.keys(country.currencies)[0]}</CurrencyCard>
        </div>
    );
}

export default CardCountry;

export function CardCountryTeste({
    name,
    flag,
    capital,
    population,
    isEurope,
}) {
    return (
        <div className="details-container">
            <h1>{name}</h1>
            <img src={flag} alt={name} />
            <p>Capital: {capital}</p>
            <p>Population: {population.toLocaleString()}</p>
            {isEurope && <h1>EUROPA</h1>}
        </div>
    );
}
