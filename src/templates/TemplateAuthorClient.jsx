import React from "react";

function TemplateAuthorClient(props) {
  const { Component } = props;
  return (
    <div>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default TemplateAuthorClient;
