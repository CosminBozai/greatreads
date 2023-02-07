import React, { useEffect } from "react";

function Sidebar() {
  useEffect(() => {
    const addActiveClass = () => {
      const sidebarList = document.querySelector("#sidebar-list");
      const listEl = sidebarList.querySelectorAll("li");
      sidebarList.addEventListener("click", (e) => {
        listEl.forEach((li) => li.classList.remove("bg-amber-200"));
        if (e.target.nodeName === "LI") e.target.classList.add("bg-amber-200");
      });
    };
    addActiveClass();
  }, []);

  return (
    <ul id="sidebar-list" className="w-full">
      <div className="mb-4 text-lg font-medium">Bookshelves</div>
      <li className="sidebar-li bg-amber-200">All books</li>
      <li className="sidebar-li">Read</li>
      <li className="sidebar-li">Currently reading</li>
      <li className="sidebar-li">To read</li>
      <li className="sidebar-li">Dropped</li>
      <li className="sidebar-li">On hold</li>
    </ul>
  );
}

export default Sidebar;
