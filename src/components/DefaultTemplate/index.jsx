import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};