import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer/Footer'
import Landing from './Components/Landing'
import NavBus from './Components/Business/NavBus'
import './styles/App.css';
import FoodMenu from './Components/FoodMenu/FoodMenu';
//import {useDispatch} from 'react-redux';
//import {loadData} from "./store";
import Error404 from './Components/404'
import Order from './Components/Order/Order'
import Success from './Components/FoodMenu/Success'
import SignupBuss from './Components/Business/SignupBusiness'
//import axios from 'axios'
import AuthPage from './Components/AuthPage'
import BusinessLanding from './Components/Business/BusinessLandingPage';
import Resturant from './Components/FoodMenu/Resturants';
import Dashboard from './Components/Business/Dashboard'
import BussAuth from './Components/Business/BussAuth';
import DriverLanding from './Components/Driver/DriverLanding';
import DriverBoard from './Components/Driver/DriverDashboard'

function App() {
  /*useEffect(() => {
    
      const FoodMenuDB = async () => {
        const FoodFetch = await axios({
          method : 'GET',
          url: ''
        }).then( result => dispatch(loadData(result)))
        .catch(err => console.log(err))
      }
      FoodMenuDB()
  })*/
 
  return (

<Router>
  <Switch>
  <Route exact path="/">
    <Navbar/>
     <Header/>
     <Landing/>
     <Footer/>
     <AuthPage/>
      
     </Route>
     <Route exact path="/home">
       <FoodMenu/>
       <AuthPage/>
       <Footer/>
     </Route>
     <Route exact path="/merchant">
     <NavBus nav={true}/>
       <BusinessLanding/>
       <BussAuth label={false}/>
     </Route>
     <Route exact path="/merchant/signup">
     <NavBus nav={true}/>
     <BussAuth label={false}/>
       <SignupBuss/>
     </Route>
  <Route exact path="/orders">
    <Order/>
    <Footer/>
  </Route>
  <Route exact path='/Resturant'>
    <Resturant/>
    <AuthPage/>
      
  </Route>
  <Route exact path="/Success">
<Success/>
  </Route>
  <Route path="/merchant/user">
    <Dashboard/>
    </Route>
    <Route path="/driver/user">
    <DriverBoard/>
  </Route>
 
  <Route exact path="/driver">
    <NavBus/>
    <BussAuth label={true}/>
    <DriverLanding/>
  </Route>
  <Route exact path="/*">
    <Error404/>
    </Route>
     </Switch>

  </Router>
     

    );
}
export default App;
