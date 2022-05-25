import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";



export default function ClientLayout() {

    return (
        <main className='min-h-screen overflow-hidden  bg-bg-1 text-white'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}