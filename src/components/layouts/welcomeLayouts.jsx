import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";

export default function WelcomeLayouts(){
    return(
        <div className="min-h-screen w-full flex flex-col">
            <Navbar/>
            <main className="flex-1 h-full overflow-y-auto">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}