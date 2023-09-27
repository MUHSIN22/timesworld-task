import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import CountryCard from "../../../../components/Cards/CountryCard/CountryCard";
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { getCountriesList } from "../../../../features/countries/countriesAction";
import CountryCardSkeleton from "../../../../components/skeletons/CountryCardSkeleton";
import { ICountry } from "../../../../types/features/countries/countries.types";

export default function CardsContainer() {
  const dispatch = useAppDispatch();

  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);

  const { status, countries, filterKey } = useAppSelector(
    (state) => state.countriesData
  );

  useMemo(() => {
    dispatch(getCountriesList());
  }, []);

  useEffect(() => {
    if (countries) {
      let pipelineCountries: ICountry[] = countries;

      if (filterKey !== "All") {
        pipelineCountries = countries?.filter(
          (country) => country.region === filterKey
        );
      }

      setFilteredCountries(pipelineCountries);
    }
  }, [filterKey, countries]);

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2 }}
      p={4}
      gap={{ base: 4, sm: 6, md: 8 }}
      w="100%"
    >
      {filteredCountries?.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
      {status === "loading" && (
        <>
          {[...Array(30)].map((_, index) => (
            <CountryCardSkeleton key={index} />
          ))}
        </>
      )}
    </SimpleGrid>
  );
}
