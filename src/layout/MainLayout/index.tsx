import Navbar from "@/src/components/Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};
export default MainLayout;
