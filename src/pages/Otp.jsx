import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);

  // Send OTP
  const sendOtp = async () => {
    if (!mobile) {
      alert("Please enter your mobile number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();

      if (data.success) {
        alert("OTP Sent Successfully");
        setShowOtpBox(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile,
          otp,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("OTP Verified Successfully");
        navigate("/bookride");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">
            Mobile Verification
          </h1>
          <p className="text-gray-500 mt-2">
            Verify your mobile number using OTP
          </p>
        </div>

        <div className="space-y-5">

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={sendOtp}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition"
          >
            Send OTP
          </button>

          {showOtpBox && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={verifyOtp}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Verify OTP
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}