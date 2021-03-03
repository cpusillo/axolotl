import React from "react"
import Navbar from "./Navbar"
import Signup from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Search from "../pages/Search"
import Saved from "../pages/Saved"
import Splash from "../pages/Splash"
import Edit from "../pages/Edit"
import {Container} from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Footer from "./footer"

function App() {
  
  return (

        <Router>
        <Navbar />
          <Container className="flexbox align-items-center justify-content-center mt-3" style={{minHeight: "100vh"}}>
          <div className="w-100" width={{maxWidth:"400px"}}>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Splash} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/saved" component={Saved} />
                <PrivateRoute path="/edit" component={Edit} />

                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />


              </Switch>
            </AuthProvider>
            </div>
          </Container>
        </Router>

  );
}

export default App;
