import { useNavigate } from "react-router-dom";

export default function DashboardOwner(){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">
                        Welcome, {user?.fullname || "User"}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Role: <span className="font-semibold text-main">{user?.role}</span>
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-600 hover:cursor-pointer"
                >
                    Logout
                </button>
            </header>

            <div className="animate-pulse">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow">
                            <div className="w-32 h-5 bg-gray-200 rounded"></div>
                            <div className="w-20 h-8 bg-gray-300 rounded mt-4"></div>
                            <div className="w-40 h-4 bg-gray-200 rounded mt-3"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 bg-white p-6 rounded-xl shadow">
                    <div className="w-48 h-5 bg-gray-200 rounded mb-6"></div>

                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between border-b pb-4 mb-4">
                            <div className="space-y-2">
                                <div className="w-60 h-4 bg-gray-200 rounded"></div>
                                <div className="w-40 h-3 bg-gray-200 rounded"></div>
                            </div>
                            <div className="w-20 h-4 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}