export type ICountriesState = {
    status: 'idle' | 'loading' | 'success' | 'error';
    countries: ICountry[];
    filterKey: string;
}

export type ICountry = {
    name: string;
    region: string;
    flag: string;
}