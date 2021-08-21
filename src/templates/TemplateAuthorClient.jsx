import React from "react";
import HeaderForAuth from "../components/ClientComponents/Header/HeaderForAuth";

function TemplateAuthorClient(props) {
  const { Component } = props;
  return (
    <div>
      <header>
        <HeaderForAuth />
      </header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default TemplateAuthorClient;
