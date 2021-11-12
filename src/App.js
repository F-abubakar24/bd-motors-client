import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Switch>

            
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>


          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
