import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CokiesNotification from "components/CokiesNotification";
import "../../styles/global.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [displayCookies, setDisplayCookies] = useState(true);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {displayCookies && (
        <CokiesNotification
          setDisplayCookies={setDisplayCookies}
        />
      )}
    </>
  );
}

export default Layout;
