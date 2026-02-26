import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import MobileExperience from "./components/mobile/MobileExperience";
import WebExperience from "./components/web/WebExperience";

const mobileQuery = "(max-width: 768px)";

const getIsMobile = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia(mobileQuery).matches;
};

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(() => getIsMobile());

  useEffect(() => {
    const query = window.matchMedia(mobileQuery);
    const onChange = ({ matches }: MediaQueryListEvent) => {
      setIsMobile(matches);
    };

    query.addEventListener("change", onChange);
    return () => {
      query.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div className={`page ${isMobile ? "mobile-page" : ""}`}>
      <Toaster position="bottom-center" reverseOrder={false} />
      {isMobile ? <MobileExperience /> : <WebExperience />}
    </div>
  );
}

export default App;
