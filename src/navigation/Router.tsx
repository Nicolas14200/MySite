import { Route, Routes } from "react-router";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((item, index) => {
        return <Route path={item.path} key={index} element={item.component} />;
      })}
    </Routes>
  );
};
