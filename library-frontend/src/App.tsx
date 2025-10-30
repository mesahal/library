import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/HomePage/components/Footer";
import { HomePage } from "./layouts/NavbarAndFooter/HomePage/HomePage";

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
