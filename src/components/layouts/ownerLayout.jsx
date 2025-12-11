import { Outlet } from "react-router-dom";

export default function OwnerLayout(){
    return(
        <div>
            <div className="min-h-screen w-full flex flex-col">
                <main className="flex-1 h-full overflow-y-auto">
                    <Outlet />
                </main>
        </div>
        </div>
    )
}