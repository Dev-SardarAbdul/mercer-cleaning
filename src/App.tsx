import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div className="flex-1">
        <Toaster />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
