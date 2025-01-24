import React from "react";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Booking System</h1>
      <BookingForm />
    </div>
  );
};

export default Home;
