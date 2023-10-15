import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className="flex flex-col scroll-smooth overflow-auto  px-[20rem] bg-grey  text-sky">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
