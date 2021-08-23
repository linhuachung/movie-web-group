import React from "react";
import Footer from "../components/ClientComponents/Footer/Footer";
import HeaderBooking from "../components/ClientComponents/Header/HeaderBooking";

function TemplateBooking(props) {
  const { Component } = props;
  return (
    <div>
      <header>
        <HeaderBooking />
      </header>
      <main>
        <Component />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TemplateBooking;
