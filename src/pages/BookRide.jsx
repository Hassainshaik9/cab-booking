import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookRide() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("");
  const [stop, setStop] = useState("");
  const [destination, setDestination] = useState("");

  const handleBooking = async () => {
    // Validation
    if (!name || !mobile || !pickup || !destination) {
      alert("Please fill all required details");
      return;
    }

    // Booking Data
    const bookingData = {
      name,
      mobile,
      pickup,
      stop: stop || "No Stop Added",
      destination,
    };

    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/bookride", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);

        // Navigate to Payment Page
        navigate("/payment", {
          state: {
            name,
            mobile,
            pickup,
            stop: stop || "No Stop Added",
            destination,
            distance: "Calculating...",
            fare: 499,
          },
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend Connection Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">
            Book Your Ride
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your trip details
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Stop Location (Optional)"
            value={stop}
            onChange={(e) => setStop(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleBooking}
            className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition"
          >
            Confirm Booking
          </button>

        </div>

      </div>
    </div>
  );
}