import React from "react";

function TemplateAdmin(props) {
  const { Component } = props;
  return (
    <div>
      <header></header>
      <main>
        <Component />
      </main>
      <footer></footer>
    </div>
  );
}

export default TemplateAdmin;
