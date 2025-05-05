import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/login";
import { RegisterForm } from "./pages/register";
import AuthLayout from "./components/layouts/authLayout";
import ProtectedRoute from "./components/layouts/productedRoute";
import AppLayout from "./components/layouts/appLayout";
import { ToastContainer } from 'react-toastify';
import { HomePage } from "./pages/homePage";
import { PostsPage } from "./pages/postsPage";
import { PhotosPage } from "./pages/photospage";

function App() {
  return (
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        {/* Protected App Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage/>} />
            <Route path="/photos" element={<PhotosPage/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
