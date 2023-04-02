import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Fragment } from "react";
import Form from "./components/SearchForm/Form";
import Wrapper from "./components/UI/Wrapper";
import CountriesProvider from "./store/CountriesProvider";
import CountriesList from "./components/Countries/CountriesList";
function App() {
  return (
    <Fragment>
      <Header />
      <CountriesProvider>
        <Wrapper class={styles.container}>
          <Form />
          <CountriesList />
        </Wrapper>
      </CountriesProvider>
    </Fragment>
  );
}

export default App;
