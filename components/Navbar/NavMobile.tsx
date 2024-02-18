"use client";

import { INavItem } from "@/types";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

interface INavMobileProps {
  navItems: INavItem[];
  handleItemClick: (id: number) => void;
  setMenuActive: (state: any) => void;
  menuActive: boolean;
  activeItem: number | undefined;
}

const NavMobile: React.FC<INavMobileProps> = ({
  navItems,
  handleItemClick,
  setMenuActive,
  activeItem,
  menuActive,
}) => {
  return (
    <>
      {menuActive ? (
        <X
          className='cursor-pointer md:hidden'
          onClick={() => setMenuActive((prevState: boolean) => !prevState)}
        />
      ) : (
        <Menu
          className='cursor-pointer md:hidden'
          onClick={() => setMenuActive((prevState: boolean) => !prevState)}
        />
      )}
      <div
        className='fixed flex flex-col w-full top-[49px] left-0 h-[100vh] p-4 bg-transparent backdrop-blur-lg  transition md:hidden'
        style={
          menuActive
            ? { opacity: 1, pointerEvents: "all" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        {navItems.map((item) => (
          <>
            <div
              className='flex gap-2 justify-start items-center select-none py-4 px-4 md:hidden'
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <p>{item.name}</p>
              {activeItem === item.id ? (
                <ChevronUp size={15} />
              ) : (
                <ChevronDown size={15} />
              )}
            </div>
            <div
              className='flex flex-col gap-4 transiation-all duration-200'
              style={
                activeItem === item.id
                  ? { opacity: "1", maxHeight: "30rem" }
                  : { opacity: "0", maxHeight: 0 }
              }
            >
              {item.subItems.map((subItem) => (
                <Link
                  href={
                    item.type === "table"
                      ? `/tables/${subItem.href}`
                      : `/fixtures/${subItem.href}`
                  }
                  className='hover:text-primary transition px-8'
                  style={
                    activeItem === item.id
                      ? { pointerEvents: "all" }
                      : { pointerEvents: "none" }
                  }
                  onClick={() => setMenuActive(false)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default NavMobile;
