import React from "react";
import Header from "../components/ClientComponents/Header/Header";

function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default TemplateClient;
