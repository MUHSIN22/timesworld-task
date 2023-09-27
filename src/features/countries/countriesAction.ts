import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICountry } from "../../types/features/countries/countries.types";

export const getCountriesList = createAsyncThunk('countries/get-countries',
    async(_,{rejectWithValue}) => {
        try{
            const data = await fetch('https://restcountries.com/v2/all?fields=name,region,flag').then(res => res.json());

            const returnFormatter:ICountry[] = data?.map((country:any) => ({
                name: country?.name,
                region: country?.region,
                flag: country?.flag
            }))

            return returnFormatter as ICountry[]
        }catch(error:any){
            rejectWithValue({
                message: error.message
            })
        }
    }
)