import { useLocation, useNavigate } from "react-router-dom";

export default function PayNow() {
  const location = useLocation();
  const navigate = useNavigate();

  const pickup = location.state?.pickup || "Not Provided";
  const destination = location.state?.destination || "Not Provided";
  const stop = location.state?.stop || "No Stop";

  const estimatedFare = 499;

  const handlePayment = () => {
    alert("🎉 Payment Successful!\nYour cab has been booked successfully.");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl border border-gray-200">
        {/* Heading */}
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">
          💳 Payment Summary
        </h1>

        {/* Ride Details */}
        <div className="rounded-2xl bg-gray-50 p-6 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-semibold text-gray-800">
              📍 Pickup Location
            </span>
            <span className="text-gray-900 font-medium text-right">
              {pickup}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-semibold text-gray-800">
              🏁 Destination
            </span>
            <span className="text-gray-900 font-medium text-right">
              {destination}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-semibold text-gray-800">
              🛑 Stop
            </span>
            <span className="text-gray-900 font-medium text-right">
              {stop}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-bold text-gray-900">
              💰 Estimated Fare
            </span>
            <span className="text-2xl font-extrabold text-green-600">
              ₹{estimatedFare}
            </span>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="mt-8 w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}