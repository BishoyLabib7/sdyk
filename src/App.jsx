import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home.jsx"));
import AppLayout from "./components/AppLayout.jsx";
import Experiences from "./pages/Experiences.jsx";
import Friends from "./pages/Friends.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./feathers/shop/Product.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./feathers/shop/Products.jsx";
import Favourite from "./pages/Favourite.jsx";
import Accout from "./pages/Accout.jsx";
import Payment from "./feathers/shop/Payment.jsx";
import Consultation from "./feathers/shop/Consultation.jsx";
import MyProducts from "./feathers/shop/MyProducts.jsx";

function App() {
  const { isLoading, authUser } = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  if (isLoading) return <PageLoader />;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<AppLayout />}>
          <Route path="/services" element={<Experiences />} />

          <Route path="account" element={<Accout />}>
            <Route path="payment" element={<Payment />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="myProducts" element={<MyProducts />} />
          </Route>

          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/categories/:name" element={<Products />} />
          <Route path="/shop/product/:id" element={<Product />} />
          <Route path="/shop/favourite" element={<Favourite />} />
          <Route path="/shop/Cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<CheckOut />} />

          <Route
            path="/friends"
            element={
              isAuthenticated && isOnboarded ? (
                <Friends />
              ) : (
                <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
              )
            }
          />
        </Route>
        <Route
          path="/home"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUpPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/call/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <CallPage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={false}>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#333448",
          },
        }}
      />
    </BrowserRouter>
  );
}
export default App;
