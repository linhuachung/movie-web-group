import React from "react";
import HeaderDashboardAdmin from "../components/AdminComponent/HeaderDashboardAdmin/HeaderDashboardAdmin";
import SideBarAdmin from "../components/AdminComponent/SideBarAdmin/SideBarAdmin";

function TemplateAdmin(props) {
  const { Component } = props;
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <header>
        <HeaderDashboardAdmin />
      </header>
      <main className="flex flex-col md:flex-row">
        <SideBarAdmin />
        <Component />
      </main>
    </div>
  );
}

export default TemplateAdmin;
