import React from "react";

function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <header></header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default TemplateClient;
