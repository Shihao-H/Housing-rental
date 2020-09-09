import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {appConstants} from "./constants/constant";
import FloorPlans from "./navbar/FloorPlans";
import Locations from "./navbar/Location/Locations";
import QuickLook from "./navbar/QuickLook";
import FAQ from "./navbar/FAQ";
import Login from "./navbar/Login";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise';
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root.reducer";
import Register from "./navbar/Register";
import UserPage from "./user-page/UserPage";
import AdminPage from "./admin-page/AdminPage";
import Login2 from "./navbar/Login2";
import Review from "./navbar/Reviews";

ReactDOM.render(
    <Provider store={ applyMiddleware(reduxPromise)(createStore)(rootReducer) }>
        <BrowserRouter>
              <App>
                  <Switch>
                      <Route path={appConstants.floorPlanRoute} component={FloorPlans} />
                      <Route path={appConstants.locationsRoute} component={Locations} />
                      <Route path={appConstants.quickLookRoute} component={QuickLook} />
                      <Route path={appConstants.login2Route} component={Login2} />
                      <Route path={appConstants.loginRoute} component={Login} />
                      <Route path={appConstants.FAQRoute} component={FAQ} />
                      <Route path={appConstants.reviewRoute} component={Review} />
                      <Route path={appConstants.registerRoute} component={Register} />
                      <Route path={appConstants.userPageRoute} component={UserPage}/>
                      <Route path={appConstants.adminPageRoute} component={AdminPage}/>
                      <Route path="*">
                          <Redirect to={appConstants.floorPlanRoute}/>
                      </Route>
                  </Switch>
              </App>
          </BrowserRouter>
    </Provider>
          ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
