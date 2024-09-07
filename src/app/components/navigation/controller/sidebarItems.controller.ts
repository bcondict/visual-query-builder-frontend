import { SidebarItems } from "../module/sidebarItems.module";

import { FaHouse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

export const sidebarItems: SidebarItems[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
  },
  {
    name: "Saved Queries",
    href: "/savedQueries",
    icon: FaHeart,
  },
  {
    name: "Public Queries",
    href: "/publicQueries",
    icon: FaEarthAmericas,
  },
];
