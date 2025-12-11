import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthAPI from "../../../api/endpoints/auth";
import Swal from "sweetalert2";
import backIcon from '/icons/back_arrow.png';
import Eye from '/icons/eye.svg'
import EyeSlash from '/icons/eye-slash.svg'
import { validateLogin } from "../../../utils/validation";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfrimPassword] = useState("");


    const navigate = useNavigate()

    const handleLogin = async () => {
        const error = validateLogin({email, password})

        if (error) {
            return Swal.fire({
                icon: "warning",
                title: error.message
            })
        }

        Swal.fire({
            title: "Logging in...",
            text: "Please wait",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        try {
            const res = await AuthAPI.login({ email, password });
            const user = res.data.data;
            localStorage.setItem("user", JSON.stringify(user));
            Swal.close();
            
            Swal.fire({
                icon: "success",
                title: "Login Berhasil!",
                text: `Welcome back, ${user.fullname}!`,
                timer: 1400,
                showConfirmButton: false,
            });

            if (user.role === "Tenant") navigate("/tenant");
            if (user.role === "Property Owner") navigate("/owner");

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Login gagal!",
                text: "Email atau password salah!",
            });
        }
    };


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
                    <div className="relative flex items-center justify-center mb-8">
                        <img
                            src={backIcon}
                            alt="Back"
                            className="w-6 h-6 absolute left-0 cursor-pointer"
                            onClick={() => navigate("/")}
                        />

                        <h2 className="text-2xl font-bold text-center">
                            Login Now
                        </h2>
                    </div>

                    <div className="mb-5">
                        <label className="text-sm font-semibold">Email</label>
                        <input 
                            type="email"
                            placeholder="yourname@gmail.com"
                            className="w-full border border-soft_gray p-3 rounded-lg mt-1 focus:ring-2 bg-soft_orange focus:ring-soft_orange outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-5 relative">
                        <label className="text-sm font-semibold">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="*************"
                            className="w-full border border-soft_gray p-3 rounded-lg mt-1 focus:ring-2 bg-soft_orange focus:ring-soft_orange outline-none pr-10" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="absolute right-3 top-[35%] translate-y-1/2 text-main cursor-pointer select-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <img src={Eye}/> : <img src={EyeSlash} />}
                        </span>
                    </div>


                    <div className="mb-5 relative">
                        <label className="text-sm font-semibold">Confirm Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="*************"
                            onChange={(e) => setConfrimPassword(e.target.value)}
                            value={confirmPassword}
                            className="w-full border border-soft_gray bg-soft_orange p-3 rounded-lg mt-1 focus:ring-2 focus:ring-soft_orange outline-none"
                        />
                        <span
                            className="absolute right-3 top-[35%] translate-y-1/2 text-main cursor-pointer select-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <img src={Eye}/> : <img src={EyeSlash} />}
                        </span>
                    </div>

                    <div className="mt-3 flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="agree"
                            className="mt-1 w-4 h-4 text-main border-gray-300 rounded focus:ring-main accent-main"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />

                        <label htmlFor="agree" className="text-xs text-gray-600 leading-5">
                            By registering, I agree to{" "}
                            <span className="text-main font-semibold cursor-pointer">
                                Rentverse Terms & Conditions
                            </span>{" "}
                            and{" "}
                            <span className="text-main font-semibold cursor-pointer">
                                Privacy Policy
                            </span>.
                        </label>
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full bg-main text-white font-semibold py-3 rounded-lg mt-5 hover:opacity-90">
                        Next
                    </button>

                    <p className="text-center text-sm mt-4 text-gray-600">
                        Don't have a Rentverse account yet?
                        <NavLink to={"/register"}>
                            <span className="text-main font-semibold ml-1 cursor-pointer">Register</span>
                        </NavLink>
                    </p>

                </div>
            </div>
        </div>
    );
}
