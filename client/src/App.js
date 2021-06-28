import "./App.css";

//import { Route, Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import Display from "./components/Display/Display";
import Navbar from "./components/Navbar/Navbar";
import Create from "./components/Create.js/Create";
import Home2 from "./components/Home2/Home";
import PostDetails from "./components/PostDetails/PostDetals";
import Search from "./components/Search/Search";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/posts" exact component={Home2} />
          <Route path="/posts/search" exact component={Home2} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/" component={Start} exact />
          <Route path="/display" component={Display} exact />
          <Route path="/Home" exact component={() => (!user ? <Home /> : <Redirect to="/display" />)} />
          <Route path="/create" exact component={Create} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
