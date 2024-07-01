import '../styles/Case0.css';
import { useState, useEffect } from 'react';

function Country() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            const result = await response.json();
            
            const sortedData = result.sort((a, b) => b.cases - a.cases);

            setData(sortedData.slice(0, 10));
        };
        fetchData();
    }, []);

    return (
        <div className="country">
            <h3>Top 10 Countries</h3>
            <ul>
                {data.map((country, index) => (
                    <li key={index}>
                        <img src={country.countryInfo.flag} alt={`Flag of ${country.country}`} className="flag" />
                        <span className="cases">{country.country}: {country.cases} cases</span>, 
                        <span className="active"> {country.active} active</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Country;

