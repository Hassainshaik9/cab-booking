import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-4xl font-bold tracking-wide">
          CAB BOOKING
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Book a Ride <br />
              in Minutes
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Fast, Safe and Affordable rides.
              Travel anywhere with Bike or Car booking.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-bold transition"
            >
              Book Now
            </button>

            {/* Stats */}
            <div className="flex gap-12 mt-12">

              <div>
                <h2 className="text-4xl font-bold text-green-500">
                  10K+
                </h2>
                <p className="text-gray-400">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-500">
                  500+
                </h2>
                <p className="text-gray-400">
                  Drivers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-500">
                  24/7
                </h2>
                <p className="text-gray-400">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Side Images */}
          <div className="grid grid-cols-2 gap-5">

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
              alt="Car"
              className="rounded-3xl h-[400px] w-full object-cover shadow-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Bike"
              className="rounded-3xl h-[400px] w-full object-cover shadow-2xl mt-12"
            />

          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="bg-gray-950 py-16 mt-10">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-900 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">🚗 Fast Booking</h3>
              <p className="text-gray-400">
                Book a ride within seconds.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">🛡 Safe Travel</h3>
              <p className="text-gray-400">
                Verified drivers and secure rides.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">💰 Affordable</h3>
              <p className="text-gray-400">
                Budget friendly Bike & Car rides.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}