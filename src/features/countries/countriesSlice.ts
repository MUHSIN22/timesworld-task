import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICountriesState, ICountry } from "../../types/features/countries/countries.types";
import { getCountriesList } from "./countriesAction";

const initialState: ICountriesState = {
    status: 'idle',
    countries: [],
    filterKey: 'All'
}

const countriesSlice = createSlice({
    name: 'countriesData',
    initialState,
    reducers: {
        setFilterKey : (state:ICountriesState, {payload}: PayloadAction<string>) => {
            state.filterKey = payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCountriesList.pending,(state:ICountriesState) => {
                state.status = 'loading'
            })
            .addCase(getCountriesList.fulfilled,(state: ICountriesState, {payload}: PayloadAction<ICountry[] | undefined>) => {
                state.status = 'success'; 
                state.countries = payload as ICountry[];
            })
            .addCase(getCountriesList.rejected,(state: ICountriesState) => {
                state.status = 'error'
            })
    },
})

export const {setFilterKey} = countriesSlice.actions;

export default countriesSlice.reducer;