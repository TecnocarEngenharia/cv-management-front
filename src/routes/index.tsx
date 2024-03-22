import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Candidate } from "../pages/candidates";
import { App } from "../App";
import Curriculum from "../pages/curriculum";
import { Register } from "../pages/register";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { PrivateRoute } from "./privateRoute";
import { TelaAdmin } from "../pages/admin";

import { PageStarts } from "../pages/pageStarts";

import { CandidatesEvaluated } from "../pages/candidatesEvaluated";
import { Technique } from "../pages/technique";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/candidates"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment"]}>
              <Candidate />
            </PrivateRoute>
          }
        />
        <Route
          path="/curriculum/:id"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment", "technique"]}>
              <Curriculum />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/technique"
          element={
            <PrivateRoute>
              <Technique />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <TelaAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/tutorial"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment", "technique"]}>
              <PageStarts />
            </PrivateRoute>
          }
        />
        <Route
          path="/Lista"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment"]}>
              <CandidatesEvaluated />
            </PrivateRoute>
          }
        />

        <Route
          path="/tech"
          element={
            <PrivateRoute allowedRoles={["admin", "technique"]}>
              <Technique />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
