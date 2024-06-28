import '../styles/Case0.css';
import { useState, useEffect } from 'react';

function Country() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            const result = await response.json();
            setData(result.slice(0, 10));
            console.log(result); 
        };
        fetchData();
    }, []);

    return (
        <div className="country">
            <h3>Top 10 Countries</h3>
            <ul>
                {data.map((country, index) => (
                    <li key={index}>
                        <span className="cases">{country.country}: {country.cases} cases</span>, 
                        <span className="recovered"> {country.recovered} recovered</span>, 
                        <span className="deaths"> {country.deaths} deaths</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Country;