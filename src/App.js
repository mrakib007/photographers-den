import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingList from "./components/Customer/BookingList/BookingList";
import BookService from "./components/Customer/BookService/BookService";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Review from "./components/Customer/Review/Review";
import HomePage from "./components/HomePage/HomePage/HomePage";
import NavBar from "./components/HomePage/NavBar/NavBar";
import LogIn from "./components/LogIn/LogIn/LogIn";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import AddService from "./components/Admin/AddService/AddService";
import ManageService from "./components/Admin/ManageService/ManageService";
import Book from "./components/Customer/Book/Book";
import OrderList from "./components/Admin/OrderList/OrderList";
import ManageReview from "./components/Admin/ManageReview/ManageReview";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivatreRoute";
import ShowMore from "./components/Customer/ShowMore/ShowMore";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/showMore/:_id">
            <ShowMore></ShowMore>
          </Route>

          <PrivateRoute path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute path="/book/:_id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking">
            <BookService></BookService>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
        <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/manageReview">
            <ManageReview></ManageReview>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
