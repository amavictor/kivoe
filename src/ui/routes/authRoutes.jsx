/* eslint-disable no-unused-vars */
import { Suspense } from "react";
import { authRoutes } from "./authRouteData";
import { AuthLayout } from "../layout";
import { Routes, Route} from "react-router-dom";



export const AuthRoutes = () => {
    return (
      <Routes>
        {authRoutes.map(({ path, element: Element }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Suspense>
                <AuthLayout>
                  <Element />
                </AuthLayout>
              </Suspense>
            }
          />
        ))}
      </Routes>
    );
  };
  