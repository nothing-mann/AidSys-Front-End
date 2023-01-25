import React from "react";
import AvailableProjects from "../AvailableProjects";
import NotAvailableProjects from "../NotAvailableProjects";

function ExploreWebDev() {
  return (
    <>
      <div>
        <h1 className="mt-12 font-bold font-serif text-2xl ml-16 text-assets-100 mb-8">
          WEB DEVELOPMENT
        </h1>
        <div className="p-4 flex space-x-4 xl:space-x-12 overflow-x-scroll">
          <NotAvailableProjects />
          <NotAvailableProjects />
          <NotAvailableProjects />
          <NotAvailableProjects />
        </div>
      </div>
    </>
  );
}
export default ExploreWebDev;
