import { lazy, useState } from "react";
import Loading from "./pages/Loading";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import AppLayout from "./components/AppLayout.jsx";
import Experiences from "./pages/Experiences.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Experiences />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
