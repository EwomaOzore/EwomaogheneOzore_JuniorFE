import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v3';

export const fetchRockets = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rockets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rockets:', error);
        throw error;
    }
};