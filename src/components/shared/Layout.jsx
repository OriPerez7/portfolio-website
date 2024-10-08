import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export const Divider = () => {
  return (
    <div className="md:xl-mx-20 my-20">
      <div className="w-full h-[0.5px] bg-gray"></div>
    </div>
  );
};

export const SectionLayout = ({ title, subtitle, children }) => {
  return (
    <div>
      <Divider />

      <div className="flex flex-col justify-center items-start md:items-center">
        <div className="md:text-center md:mb-10 md:px-40 mb-5">
          <h2 className="mb-5">{title}</h2>
          <p>{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen mx-10 my-2">
      <Navbar />
      {children}
      <Divider />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
