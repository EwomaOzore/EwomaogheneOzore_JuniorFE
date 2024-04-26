import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v3';

interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    missions: { name: string; flight: number }[];
    landings: number;
    type: string;
    details: string | null;
    reuse_count: number;
}

export const fetchCapsules = async (): Promise<Capsule[]> => {
    try {
        const response = await axios.get<Capsule[]>(`${API_BASE_URL}/capsules`);
        return response.data;
    } catch (error) {
        console.error('Error fetching capsules:', error);
        return [];
    }
};