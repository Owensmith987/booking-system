// src/components/BookingForm.jsx
import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [partySize, setPartySize] = useState("");

  const handleSearch = () => {
    // This might just show available times/tables
    console.log(`Searching for ${partySize} people on ${date}`);
  };

  const handleBook = async () => {
    // This calls your POST /api/bookings route
    try {
      const response = await axios.post("http://localhost:4000/api/bookings", {
        date,
        time: "19:00", // or a time the user selected
        partySize: Number(partySize),
        name: "Sample Name", // ideally collected from the user
        email: "sample@example.com",
      });
      alert("Booking created!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error creating booking");
    }
  };

  return (
    <div className="form-container">
      <label className="block mb-2">Date:</label>
      <input
        type="date"
        className="border rounded-md p-2 mb-4 w-full"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block mb-2">Party Size:</label>
      <select
        className="border rounded-md p-2 mb-4 w-full"
        value={partySize}
        onChange={(e) => setPartySize(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="1">1 Person</option>
        <option value="2">2 People</option>
        <option value="3">3 People</option>
        <option value="4">4 People</option>
      </select>

      {/* Button to search availability */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
      >
        Search Availability
      </button>

      {/* New button to finalize booking */}
      <button
        onClick={handleBook}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Book
      </button>
    </div>
  );
};

export default BookingForm;
