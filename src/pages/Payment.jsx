import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const ride = state;

  if (!ride) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">
          No booking data found
        </h1>
      </div>
    );
  }

  // Default fare if not passed
  const fare = ride.fare || 499;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-5">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            🚖 Payment Summary
          </h1>
          <p className="text-gray-500 mt-2">
            Review your booking details before payment
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4">

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">
              👤 Customer Name
            </span>
            <span className="font-bold text-gray-900">
              {ride.name}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">
              📱 Mobile Number
            </span>
            <span className="font-bold text-gray-900">
              {ride.mobile}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
            <span className="text-blue-700 font-medium">
              📍 Pickup Location
            </span>
            <span className="font-semibold text-right">
              {ride.pickup}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
            <span className="text-yellow-700 font-medium">
              🚏 Stop Location
            </span>
            <span className="font-semibold text-right">
              {ride.stop || "No Stop Added"}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
            <span className="text-green-700 font-medium">
              🏁 Destination
            </span>
            <span className="font-semibold text-right">
              {ride.destination}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
            <span className="text-purple-700 text-xl font-bold">
              💰 Total Fare
            </span>
            <span className="text-2xl font-extrabold text-purple-700">
              ₹{fare}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/paynow", { state: ride })}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold transition duration-300"
        >
          Continue to Pay →
        </button>
      </div>
    </div>
  );
}