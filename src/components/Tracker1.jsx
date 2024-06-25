import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Tracker1.css';

const Tracker1 = () => {
  const [countryStats, setCountryStats] = useState([]);
  const [topCases, setTopCases] = useState([]);
  const [activeTab, setActiveTab] = useState('USA');

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        console.log("Country Stats Data:", response.data); 
        setCountryStats(response.data);
      })
      .catch(error => console.log(error));

    axios.get('https://disease.sh/v3/covid-19/countries?sort=cases&limit=10')
      .then(response => {
        console.log("Top Cases Data:", response.data); 
        setTopCases(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="tracker">
      <div className="chat-content" id="table">
        <div className="widget-area">
          <div className="widget-head">
            <h1 className="dez-title">Ajax Data Table - Covid-19 Country Wise State</h1>
          </div>
          <div className="widget-body">
            <table id="CountryStatsDataTable" className="display" width="100%">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Total Cases</th>
                  <th>Total Deaths</th>
                  <th>Total Recovered</th>
                  <th>Total Active</th>
                </tr>
              </thead>
              <tbody>
                {countryStats.map(country => (
                  <tr key={country.countryInfo._id}>
                    <td>{country.country}</td>
                    <td>{country.cases}</td>
                    <td>{country.deaths}</td>
                    <td>{country.recovered}</td>
                    <td>{country.active}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="chat-content" id="tiles">
        <h1 className="stat-head">Top 10 Country wise Covid-19 Updates - Tiles</h1>
        <div className="row" id="TopCountryStats">
          {topCases.map((country, index) => (
            <div key={index} className="col-md-4 col-lg-2 col-6">
              <h4>{country.country}</h4>
              <p>Cases: {country.cases}</p>
              <p>Today Cases: {country.todayCases}</p>
              <p>Deaths: {country.deaths}</p>
              <p>Today Deaths: {country.todayDeaths}</p>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-content" id="country-wise">
        <h1 className="stat-head">Covid-19 Country Wise - Tabs</h1>
        <div className="corona-update-in-tab">
          <ul className="nav nav-tabs">
            {topCases.map(country => (
              <li key={country.countryInfo.iso2} className="nav-item">
                <a
                  className={`nav-link ${activeTab === country.countryInfo.iso2 ? 'active' : ''}`}
                  onClick={() => setActiveTab(country.countryInfo.iso2)}
                >
                  <img alt="" src={country.countryInfo.flag} width="30" />{country.country}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {topCases.map(country => (
              <div
                key={country.countryInfo.iso2}
                id={country.countryInfo.iso2}
                className={`tab-pane ${activeTab === country.countryInfo.iso2 ? 'active' : ''}`}
              >
                <p>Country: {country.country}</p>
                <p>Cases: {country.cases}</p>
                <p>Today Cases: {country.todayCases}</p>
                <p>Deaths: {country.deaths}</p>
                <p>Today Deaths: {country.todayDeaths}</p>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker1;

