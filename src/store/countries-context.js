import React from "react";

const CountriesContext = React.createContext({
  countries: {},
  isLoading: true,
  filters: [],
  showCountryInfo: false,
  countryInfo: [],
  addNameFilter: () => {},
  addRegionFilter: () => {},
  setShowCountryInfo: () => {},
  setCountryInfo: () => {},
  isDarkMode: () => {},
});

export default CountriesContext;
