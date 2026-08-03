import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import PortfolioWorkspace from "./components/workspace/PortfolioWorkspace";

function App() {
  return (
    <>
      <PortfolioWorkspace />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
