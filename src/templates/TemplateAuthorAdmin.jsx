import React from "react";

function TemplateAuthorAdmin(props) {
  const { Component } = props;

  return (
    <div>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default TemplateAuthorAdmin;
