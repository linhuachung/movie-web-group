import React from "react";
import Footer from "../components/ClientComponents/Footer/Footer";
import Header from "../components/ClientComponents/Header/Header";

function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="bg-black">
        <Component />
      </main>
      <footer className="p-0">
        <Footer />
      </footer>
    </div>
  );
}

export default TemplateClient;
