import React from "react";

const CountriesContext = React.createContext({
  countries: [],
  isLoading: true,
  filters: [],
  showCountryInfo: false,
  countryInfo: [],
  error: null,
  addNameFilter: () => {},
  addRegionFilter: () => {},
  setShowCountryInfo: () => {},
  setCountryInfo: () => {},
  setIsDarkMode: () => {},
  setError: () => {},
});

export default CountriesContext;
