import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchRockets } from '../api/api';
import { Rocket } from '../api/rocket';

interface RocketsState {
    rockets: Rocket[];
    loading: boolean;
    error: string | null;
}

const initialState: RocketsState = {
    rockets: [],
    loading: false,
    error: null,
};

export const rocketSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {
        fetchRocketsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchRocketsSuccess: (state, action: PayloadAction<Rocket[]>) => {
            state.loading = false;
            state.rockets = action.payload;
        },
        fetchRocketsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchRocketsStart, fetchRocketsSuccess, fetchRocketsFailure } = rocketSlice.actions;

export const selectRockets = (state: RootState) => state.rockets.rockets;
export const selectLoading = (state: RootState) => state.rockets.loading;
export const selectError = (state: RootState) => state.rockets.error;

export const fetchRocketsAsync = () => async (dispatch: any) => {
    dispatch(fetchRocketsStart());
    try {
        const rockets = await fetchRockets();
        dispatch(fetchRocketsSuccess(rockets));
    } catch (error: any) {
        dispatch(fetchRocketsFailure((error as Error).message));
    }
};

export default rocketSlice.reducer;