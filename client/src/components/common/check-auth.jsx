// src/components/CheckAuth.js

import { useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();
  console.log("Location:", location.pathname);

  // Allow everyone to access all routes
  return <>{children}</>;
}

export default CheckAuth;
