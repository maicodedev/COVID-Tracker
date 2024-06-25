
import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return response.data;
    } catch (error) {
        console.error("Error fetching data from disease.sh API", error);
        return null;
    }
};

export const Apiurl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"