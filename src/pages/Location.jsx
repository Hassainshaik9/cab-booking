import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Location() {
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [stop, setStop] = useState("");

  const handleContinue = () => {
    if (!pickup || !destination) {
      alert("Please enter both Pickup and Destination.");
      return;
    }

    navigate("/paynow", {
      state: {
        pickup,
        destination,
        stop,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Ride Details
        </h2>

        <input
          type="text"
          placeholder="Enter Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Stop (Optional)"
          value={stop}
          onChange={(e) => setStop(e.target.value)}
          className="mb-6 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleContinue}
          className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}