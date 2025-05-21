import Routespe from "./routes/routes";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        {children}
        {<Routespe />}
    </div>
  );
};

export default Layout;