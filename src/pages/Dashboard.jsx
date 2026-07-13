import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-5 flex justify-between">

        <h1 className="text-3xl font-bold">
          CAB BOOKING
        </h1>

        <p className="text-gray-300">
          Choose Your Ride
        </p>

      </nav>


      {/* Main */}
      <div className="flex flex-col items-center justify-center py-20">


        <h1 className="text-5xl font-bold mb-4">
          Select Your Vehicle
        </h1>


        <p className="text-gray-500 text-lg mb-12">
          Choose a ride that suits you
        </p>



        <div className="grid md:grid-cols-2 gap-10">


          {/* Bike Card */}
          <div
            onClick={() => navigate("/bookride")}
            className="
            bg-white
            w-96
            rounded-3xl
            shadow-xl
            overflow-hidden
            cursor-pointer
            hover:scale-105
            transition
            "
          >

            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              className="h-56 w-full object-cover"
            />


            <div className="p-6">

              <h2 className="text-3xl font-bold">
                🏍 Bike Ride
              </h2>


              <p className="text-gray-500 mt-2">
                Fast and affordable ride
              </p>


              <button
                className="
                mt-5
                bg-green-500
                text-white
                px-6
                py-3
                rounded-xl
                w-full
                font-bold
                "
              >
                Book Bike
              </button>

            </div>

          </div>




          {/* Car Card */}

          <div
            onClick={() => navigate("/bookride")}
            className="
            bg-white
            w-96
            rounded-3xl
            shadow-xl
            overflow-hidden
            cursor-pointer
            hover:scale-105
            transition
            "
          >


            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
              className="h-56 w-full object-cover"
            />


            <div className="p-6">

              <h2 className="text-3xl font-bold">
                🚗 Car Ride
              </h2>


              <p className="text-gray-500 mt-2">
                Comfortable and safe travel
              </p>


              <button
                className="
                mt-5
                bg-black
                text-white
                px-6
                py-3
                rounded-xl
                w-full
                font-bold
                "
              >
                Book Car
              </button>


            </div>


          </div>


        </div>


      </div>


    </div>

  );
}