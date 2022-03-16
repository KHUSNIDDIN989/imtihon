import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Selected from "./components/selected/Selected";
import Ordered from "./components/ordered/Ordered";
import Selected1 from "./components/selected1/Selected1";
import "./App.css";
import ServiceRequirements from "./components/servicerequirements/ServiceRequirements";
import Contacts from "./components/contacts/Contacts";
import Ordering from "./components/ordering/Ordering";
import Ready from "./components/ready/Ready";
import Karzinka from "./components/karzinka/Karzinka";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selected" element={<Selected />} />
          <Route path="/Ordered" element={<Ordered />} />
          <Route path="/Selected1" element={<Selected1 />} />
          <Route
            path="/rervicerequirements"
            element={<ServiceRequirements />}
          />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="/karzinka" element={<Karzinka />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
