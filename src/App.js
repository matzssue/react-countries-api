import CountriesProvider from "./store/CountriesProvider";

import Header from "./components/Header/Header";

import CountryDisplay from "./components/Countries/CountryDisplay";

const App = () => {
  return (
    <CountriesProvider>
      <Header />
      <CountryDisplay />
    </CountriesProvider>
  );
};

export default App;
