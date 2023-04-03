import { Fragment, useContext, useState } from "react";
import styles from "./App.module.scss";
import CountriesProvider from "./store/CountriesProvider";
import CountriesContext from "./store/countries-context";
import Header from "./components/Header/Header";
import Form from "./components/SearchForm/Form";
import Wrapper from "./components/UI/Wrapper";

import CountryDetails from "./components/Countries/CountryDetails";

const App = () => {
  return (
    <Fragment>
      <Header />
      <CountriesProvider>
        <Wrapper class={styles.container}>
          <Form />
          <CountryDetails />
        </Wrapper>
      </CountriesProvider>
    </Fragment>
  );
};

export default App;
