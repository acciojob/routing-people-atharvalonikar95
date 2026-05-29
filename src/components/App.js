
import React from "react";
import './../styles/App.css';
import UserList from './UserList';
import UserDetails from './UserDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const users = [
    {
      id: 1,
      username: "john_doe",
      name: "John Doe",
      email: "john.doe@gmail.com",
      website: "www.johndoe.com",
      phone: "+1 9876543210",
    },
    {
      id: 2,
      username: "sarah_smith",
      name: "Sarah Smith",
      email: "sarah.smith@gmail.com",
      website: "www.sarahsmith.dev",
      phone: "+1 9123456780",
    },
    {
      id: 3,
      username: "alex_jones",
      name: "Alex Jones",
      email: "alex.jones@gmail.com",
      website: "www.alexjones.io",
      phone: "+1 9988776655",
    },
    {
      id: 4,
      username: "emma_watson",
      name: "Emma Watson",
      email: "emma.watson@gmail.com",
      website: "www.emmawatson.me",
      phone: "+1 9012345678",
    },
    {
      id: 5,
      username: "michael_brown",
      name: "Michael Brown",
      email: "michael.brown@gmail.com",
      website: "www.michaelbrown.tech",
      phone: "+1 9765432109",
    },
    {
      id: 6,
      username: "olivia_green",
      name: "Olivia Green",
      email: "olivia.green@gmail.com",
      website: "www.oliviagreen.com",
      phone: "+1 9345678901",
    },
    {
      id: 7,
      username: "david_miller",
      name: "David Miller",
      email: "david.miller@gmail.com",
      website: "www.davidmiller.dev",
      phone: "+1 9234567890",
    },
    {
      id: 8,
      username: "sophia_lee",
      name: "Sophia Lee",
      email: "sophia.lee@gmail.com",
      website: "www.sophialee.io",
      phone: "+1 9456123789",
    },
  ];
  return (
    <div>
        {/* Do not remove the main div */}
      <BrowserRouter >
        <Routes>
          <Route path={`/`} element={<UserList users={users} />}></Route>
          <Route path={`/users/:id`} element={<UserDetails users={users} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
