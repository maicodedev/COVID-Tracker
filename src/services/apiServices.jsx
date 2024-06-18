import axios from 'axios';


export const fetchData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data;
};

