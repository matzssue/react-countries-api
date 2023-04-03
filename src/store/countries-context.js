import React from "react";

const CountriesContext = React.createContext({
  countries: {},
  isLoading: null,
  filteredCountries: {},
  filters: [],
  addNameFilter: () => {},
  addRegionFilter: () => {},
});

export default CountriesContext;
