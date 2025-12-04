import { NavLink } from "react-router-dom";
import Button from "./buttons";
import type { MenuItem } from "./typage/types";

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Career", link: "/Career" },
  { name: "Blogs", link: "/Blog" },
  { name: "About Us", link: "/About Us" },
];
export default function Header() {
  return (
    <>
      <section className=" bg-[#FFF2E1] ">
        <div className="flex items-center justify-between py-8 container ">
          <h1 className="text-4xl font-bold ">SKILINE</h1>
          <nav className="hidden lg:flex gap-8 items-center">
            <ul className=" flex gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink title={item.name} to={item.link} className={
                    ({isActive}) => isActive ? "text-purple-700 font-bold underline " : "text-black"}
                    >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              className="px-8 py-3 bg-white rounded-full cursor-pointer hover:scale-125 transition duration-700 "
              text="Login"
            />
            <Button
              className="bg-[#F48C06] rounded-full px-5 py-3 cursor-pointer hover:scale-125 transition duration-700"
              text=" Sign Up"
            />
          </nav>
        </div>
      </section>
    </>
  );
}
