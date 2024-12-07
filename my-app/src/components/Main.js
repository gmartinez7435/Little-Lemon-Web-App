import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

const Main = () => {
  const seedRandom = function(seed) {
    let m = 2**35 - 31;
    let a = 185852;
    let s = seed % m;
    return function() {
     return (s = s * a % m) / m;
    };
  };

  const fetchAPI = function(date) {
    let result = [];
    let randomValue = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (randomValue < 0.5) {
        result.push(i + ":00");
      }
      if (randomValue > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);

  function updateTime(state, date) {
    return { availableTime: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    } else {
      // Handle form submission failure
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTime={state} // Correctly pass the availableTime prop
              dispatch={dispatch}
              submitForm={submitForm}/>}/>
        <Route path="/" element={<Header />} />
      </Routes>
    </main>
  );
};

export default Main;
