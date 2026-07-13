import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter your username and password.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue booking your ride
        </p>

        <input
          type="text"
          placeholder="Enter Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-4 mb-5 text-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-4 mb-6 text-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}