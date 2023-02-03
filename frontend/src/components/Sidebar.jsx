import React, { useEffect } from "react";

function Sidebar() {
  useEffect(() => {
    const addActiveClass = () => {
      const sidebarList = document.querySelector("#sidebar-list");
      const listEl = sidebarList.querySelectorAll("li");
      sidebarList.addEventListener("click", (e) => {
        listEl.forEach((li) => li.classList.remove("bg-crem"));
        if (e.target.nodeName === "LI") e.target.classList.add("bg-crem");
      });
    };
    addActiveClass();
  }, []);

  return (
    <ul id="sidebar-list" className="w-full px-3 py-4">
      <div className="font-medium">Bookshelves</div>
      <li className="sidebar-li">Read</li>
      <li className="sidebar-li">Currently reading</li>
      <li className="sidebar-li">To read</li>
      <li className="sidebar-li">Dropped</li>
      <li className="sidebar-li">On hold</li>
    </ul>
  );
}

export default Sidebar;
