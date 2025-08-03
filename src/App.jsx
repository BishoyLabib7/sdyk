import { lazy, useState } from "react";
import Loading from "./pages/Loading";
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return <>{isLoading ? <Loading /> : <Home />}</>;
}

export default App;
