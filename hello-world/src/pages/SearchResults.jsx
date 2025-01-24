import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Example: fetch all bookings
    axios
      .get("http://localhost:4000/api/bookings")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="results-container">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <ul>
        {bookings.map((b) => (
          <li key={b._id}>
            {b.date} | {b.time} | {b.partySize} | {b.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
