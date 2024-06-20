import '../styles/Tracker0.css';


const Tracker0 = () => {
    return (
        <div className="left-sidebar content-scroll" tabIndex="1" style="overflow: hidden; outline: none;">
        <div className="sidebar active" id="CoronaData">
            <div className="text-left mb-2 mt-3">
                <h2 className="title-text">COVID-19 Tracker</h2>
            </div>
            <ul className="profile-detail list-inline pt-2">
                <li className="list-block-item text-left">
                    <h6 className="mb-0">Total Case</h6>
                    <small className="text-danger mb-0 dz-g-confirmed">581511314</small>
                    <b className="dz-g-today-confirmed">+607496</b>
                </li>
                <li className="list-block-item text-left">
                    <h6 className="mb-0">Active Case</h6>
                    <small className="text-warning mb-0 dz-g-active">575101133</small>

                </li>
                <li className="list-block-item text-left">
                    <h6 className="mb-0">Recovered  Case</h6>
                    <small className="text-success mb-0 dz-g-recovered">0</small>
                    <b className="dz-g-today-recovered">+0</b>
                </li>
                <li className="list-block-item text-left">
                    <h6 className="mb-0">Deaths Case</h6>
                    <small className="text-primary mb-0 dz-g-deaths">6410181</small>
                    <b className="dz-g-today-deaths">+2143</b>
                </li>
            </ul>
            <h4 className="dz-title">Top 10 Country</h4>
            <ul className="country-list list-inline">
                <li className="list-block-item" data-country-code="US">
                    <img src="https://disease.sh/assets/img/flags/us.png" alt=""/>
                    <span>USA</span>
                    <h6 className="dz-confirmed">86503057</h6>
                </li>
                <li className="list-block-item" data-country-code="IT">
                    <img src="https://disease.sh/assets/img/flags/it.png" alt=""/>
                    <span>Italy</span>
                    <h6 className="dz-confirmed">17490451</h6>
                </li>
                <li className="list-block-item" data-country-code="GB">
                    <img src="https://disease.sh/assets/img/flags/gb.png" alt=""/>
                    <span>United Kingdom</span>
                    <h6 className="dz-confirmed">22305893</h6>
                </li>
                <li className="list-block-item" data-country-code="ES">
                    <img src="https://disease.sh/assets/img/flags/es.png" alt=""/>
                    <span>Spain</span>
                    <h6 className="dz-confirmed">12403245</h6>
                </li>
                <li className="list-block-item" data-country-code="AF">
                    <img src="https://disease.sh/assets/img/flags/af.png" alt=""/>
                    <span>Afghanistan</span>
                    <h6 className="dz-confirmed">180615</h6>
                </li>
                <li className="list-block-item" data-country-code="AL">
                    <img src="https://disease.sh/assets/img/flags/al.png" alt=""/>
                    <span>Albania</span>
                    <h6 className="dz-confirmed">276342</h6>
                </li>
                <li className="list-block-item" data-country-code="AD">
                    <img src="https://disease.sh/assets/img/flags/ad.png" alt=""/>
                    <span>Andorra</span>
                    <h6 className="dz-confirmed">42894</h6>
                </li>
                <li className="list-block-item" data-country-code="AT">
                    <img src="https://disease.sh/assets/img/flags/at.png" alt=""/>
                    <span>Austria</span>
                    <h6 className="dz-confirmed">4264738</h6>
                </li>
                <li className="list-block-item" data-country-code="BZ">
                    <img src="https://disease.sh/assets/img/flags/bz.png" alt=""/>
                    <span>Belize</span>
                    <h6 className="dz-confirmed">59788</h6>
                </li>
                <li className="list-block-item" data-country-code="BO">
                    <img src="https://disease.sh/assets/img/flags/bo.png" alt=""/>
                    <span>Bolivia</span>
                    <h6 className="dz-confirmed">909919</h6>
                </li>
            </ul>
        </div>
    </div>



    );
};

export default Tracker0;
