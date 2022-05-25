import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersList from "./UserList";
import GetMessages from "./GetMessages";
import AddUser from "./AddUser";
import AddMessage from "./AddMessage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addmessage" element={<AddMessage />} />
          <Route path="/getmessages" element={<GetMessages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
