import { useState } from "react";

export default function MobileVerification() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <label className="block mb-2 text-gray-700 font-semibold">
        Mobile Number
      </label>

      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your mobile number"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <button className="mt-4 w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
        Send OTP
      </button>
    </div>
  );
}