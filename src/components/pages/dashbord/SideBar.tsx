
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";

const sidebar = [
  {
    icon: <IoHome />,
    name: "home",
    link: "",
  },
  {
    icon: <IoSettings />,
    name: "settings",
    link: "/dashboard/setting",
  },
  {
    icon: <FaCalendarAlt />,
    name: "calendar",
    link: "/dashboard/calendar",
  },
  {
    icon: <FaProductHunt />,
    name: "Produits",
    link: "/dashboard/produits",
  },
];
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-blue-50 flex">
      <div>
        {" "}
        <nav
          className={`h-screen  p-2 bg-blue-200 flex flex-col duration-500 ${
            open ? "w-60" : "w-16"
          }`}
        >
          <div className="border rounded-3xl px-3 py-2 h-20 flex justify-between items-center">
            <h1 className={` ${open ? "text-2xl" : "hidden"}`}>Mariama</h1>
            <RiMenuUnfold4Line
              className="text-blue-400 size-10 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="flex-1">
            <ul className="">
              {sidebar.map((element, index) => (
                <li
                  key={index}
                  className="px-3 py-2 my-3 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex items-center gap-5 relative"
                >
                  <NavLink title={element.name} to={element.link} className="flex items-center justify-center gap-6">
                    <div className="">{element.icon}</div>

                    <div
                      className={`${
                        !open && "w-0 translate-x-24"
                      }duration-500 overflow-hidden` }
                    >
                      {element.name}
                    </div>

                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* footer */}

          <div className="flex gap-5 items-center px-3 py-2">
            <div>
              <FaUserAlt />
            </div>
            <h2
              className={`${
                !open && "w-0 translate-x-24"
              }duration-500 overflow-hidden`}
            >
              Mariama
            </h2>
          </div>
        </nav>
      </div>
      <div className={` p-12 ${open ? "w-full" : ""}  duration-500 `}>
        <Outlet />
      </div>
    </div>
  );
}
