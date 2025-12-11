import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../../api/endpoints/auth";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Email dan password wajib di isi");
            return;
        }

        try {
            const res = await AuthAPI.login({email, password});

            const user = res.data.data;

            localStorage.setItem("user", JSON.stringify(user));
            navigate("/owner")
        }catch(err) {
            console.error(err);
            alert("Login gagal! Periksa email / password kamu.");
        }
    }

    return (
        <div className="w-full h-screen flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 h-96 md:h-screen">
                <div className="left-side w-full h-full flex flex-col items-center justify-center px-10 text-center">
                    <h1 className="text-white font-satoshi text-3xl md:text-4xl font-bold">
                        Welcome to Rentverse
                    </h1>
                    <p className="text-white mt-3 font-satoshi text-sm md:text-lg leading-relaxed">
                        Realize your dream home. We craft spaces that are functional, 
                        inspiring joy, tranquility, and connection.
                    </p>
                </div>
            </div>

            <div
                className="
                    w-full h-full md:w-1/2
                    flex items-center justify-center
                    p-8 md:p-10
                    bg-white
                    md:rounded-none
                    rounded-t-3xl
                    -mt-10 md:mt-0
                    shadow-xl md:shadow-none
                "
            >
                <div className="w-full max-w-full">

                    <h2 className="text-center text-2xl font-bold mb-8">
                        Login Now
                    </h2>

                    <div className="mb-5">
                        <label className="text-sm font-semibold">Email</label>
                        <input 
                            type="email"
                            placeholder="yourname@gmail.com"
                            className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-main outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label className="text-sm font-semibold">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="*************"
                            className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-main outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="text-main text-sm cursor-pointer select-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"} password
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label className="text-sm font-semibold">Confirm Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="*************"
                            className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-main outline-none"
                        />
                    </div>

                    {/* Terms */}
                    <p className="text-xs text-gray-600 mt-2">
                        By registering, I agree to{" "}
                        <span className="text-main font-semibold cursor-pointer">Rentverse Terms & Conditions</span> 
                        {" "}and{" "}
                        <span className="text-main font-semibold cursor-pointer">Privacy Policy</span>.
                    </p>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-main text-white font-semibold py-3 rounded-lg mt-5 hover:opacity-90">
                        Next
                    </button>

                    <p className="text-center text-sm mt-4 text-gray-600">
                        Don't have a Rentverse account yet?
                        <span className="text-main font-semibold ml-1 cursor-pointer">Register</span>
                    </p>

                </div>
            </div>
        </div>
    );
}
