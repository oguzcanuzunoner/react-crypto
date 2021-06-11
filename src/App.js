import "./App.css";
import Home from "./Component/Home/Home";
import ShowCoin from "./Component/ShowCoin/ShowCoin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CryptoProvider } from "./Context/CryptoContext";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const getCryptoName = (e) => {
    setSearch(e.target.value);
  };

  return (
    <CryptoProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home search={search} getCryptoName={getCryptoName} />
            </Route>
            <Route path="/:id" component={ShowCoin} />
          </Switch>
        </div>
      </Router>
    </CryptoProvider>
  );
};

export default App;
