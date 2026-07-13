import { useNavigate } from "react-router-dom";


function Register(){

const navigate = useNavigate();


function handleRegister(){

// later connect backend API here

navigate("/otp");

}



return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-slate-950
via-blue-950
to-indigo-950
text-white
">


<div className="
w-full
max-w-md
bg-white/10
backdrop-blur-xl
border
border-white/20
p-10
rounded-3xl
shadow-2xl
">


<h1 className="
text-4xl
font-bold
text-center
mb-8
">

Create Account 🚖

</h1>



<input

type="text"

placeholder="Full Name"

className="
w-full
p-4
mb-4
rounded-xl
bg-white/20
border
border-white/30
outline-none
placeholder-gray-300
"

/>



<input

type="email"

placeholder="Email Address"

className="
w-full
p-4
mb-4
rounded-xl
bg-white/20
border
border-white/30
outline-none
placeholder-gray-300
"

/>




<input

type="text"

placeholder="Mobile Number"

className="
w-full
p-4
mb-4
rounded-xl
bg-white/20
border
border-white/30
outline-none
placeholder-gray-300
"

/>





<input

type="password"

placeholder="Password"

className="
w-full
p-4
mb-6
rounded-xl
bg-white/20
border
border-white/30
outline-none
placeholder-gray-300
"

/>





<button

onClick={handleRegister}

className="
w-full
bg-yellow-400
text-black
py-4
rounded-xl
font-bold
text-lg
hover:scale-105
transition
">

Register

</button>





<p className="
text-center
mt-6
text-gray-300
">

Already have account?


<span

onClick={()=>navigate("/login")}

className="
text-yellow-400
cursor-pointer
ml-2
">

Login

</span>


</p>



</div>



</div>

)

}


export default Register;