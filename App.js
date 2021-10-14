import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navibar from "./component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Diseasewiki from "./pages/Diseasewiki";
import Team from "./pages/Team";
import News from "./pages/News";
import Shop from "./pages/Shop";
import TermsOfUse from "./pages/TermsOfUse";
import Privacy from "./pages/PrivacyPolicy";
import Technology from "./pages/Technology";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Router basename="/">
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Diseasewiki" component={Shop} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Team" component={Team} />
          <Route path="/news" component={News} />
          <Route path="/technology" component={Technology} />
          <Route path="/termsofuse" component={TermsOfUse} />
          <Route path="/privacypolicy" component={Privacy} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
