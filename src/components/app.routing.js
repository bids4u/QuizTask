import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Auth/Login/Login.component';
import Register from './Auth/Register/Register.component';
import Header from './Common/Header/Header.component';
import Footer from './Common/Footer/Footer.component';
import Home from './Quiz/Home/Home.component'
import Start from './Quiz/Start/Start.component'
import Notfound from './Common/NotFound/Notfound';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log(localStorage.getItem('loggedIn'))
    return <Route {...rest} render={routeProps => (
        localStorage.getItem('loggedIn')
            ? <div>
                <Header isLoggedIn={true}></Header>
                {/* <SideBar isLoggedIn={true}></SideBar> */}
                <div className="main">
                    <Component {...routeProps} ></Component>
                </div>
            </div>
            : <Redirect to="/" ></Redirect>
    )}></Route>
}

const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={routeProps => (
        <div>
            <Header isLoggedIn={localStorage.getItem('loggedIn') ? true : false}></Header>
            <div className="main">
                <Component {...routeProps} ></Component>
            </div>
        </div>
    )}></Route>
}
export const AppRouting = () => {
    
    
    return(
        <BrowserRouter>
            <Switch>          
                <ProtectedRoute path="/home" component={Home} ></ProtectedRoute>
                <ProtectedRoute path="/start" component={Start} ></ProtectedRoute>
                <PublicRoute path="/register" component={Register} ></PublicRoute>
                <PublicRoute exact path="/" component={Login}></PublicRoute>
                <PublicRoute path="*" component={Notfound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
