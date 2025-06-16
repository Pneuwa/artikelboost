import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const admin = localStorage.getItem("artikel-boost");
  const isAdmin = admin === "admin";

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return element;
}

export default ProtectedRoute;
