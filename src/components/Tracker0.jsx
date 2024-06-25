import '../styles/Tracker0.css';


const Tracker0 = () => {
  const topCountries = [
    { name: "USA", code: "us", cases: "86503057" },
    { name: "Italy", code: "it", cases: "17490451" },
    { name: "United Kingdom", code: "gb", cases: "22305893" },
    { name: "Spain", code: "es", cases: "12403245" },
    { name: "Afghanistan", code: "af", cases: "180615" },
    { name: "Albania", code: "al", cases: "276342" },
    { name: "Andorra", code: "ad", cases: "42894" },
    { name: "Austria", code: "at", cases: "4264738" },
    { name: "Belize", code: "bz", cases: "59788" },
    { name: "Bolivia", code: "bo", cases: "909919" },
  ];

  return (
    <div className="tracker0-covid-container">
      <h2 className="tracker0-covid-heading">COVID-19 Tracker</h2>
      <ul className="tracker0-covid-list">
        <li className="tracker0-covid-item total-case">
          <h6>Total Case</h6>
          <small>+607496</small>
          <b>581511314</b>
        </li>
        <li className="tracker0-covid-item active-case">
          <h6>Active Case</h6>
          <small>28732901</small>
        </li>
        <li className="tracker0-covid-item recovered-case">
          <h6>Recovered Case</h6>
          <small>0</small>
          <b>+0</b>
        </li>
        <li className="tracker0-covid-item deaths-case">
          <h6>Deaths Case</h6>
          <small>+3631</small>
          <b>6410181</b>
        </li>
      </ul>

      <div>
        <h4 className="dz-title">Top 10 Country</h4>
        <ul className="country-list list-inline">
          {topCountries.map((country) => (
            <li key={country.code} className="list-block-item" data-country-code={country.code.toUpperCase()}>
              <img src={`https://disease.sh/assets/img/flags/${country.code}.png`} alt={`${country.name} flag`} />
              <span>{country.name}</span>
              <h6 className="dz-confirmed">{country.cases}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tracker0;
