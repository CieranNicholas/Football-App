"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import Link from "next/link";

import { INavItem } from "@/types";

interface INavItemProps {
  item: INavItem;
  handleItemClick: (id: number) => void;
  activeItem: number | undefined;
}

const NavItem: React.FC<INavItemProps> = ({
  item,
  handleItemClick,
  activeItem,
}) => {
  return (
    <div
      onClick={() => handleItemClick(item.id)}
      className='relative cursor-pointer hidden md:flex'
    >
      <div
        className='flex gap-2 justify-start items-center select-none'
        style={
          activeItem === item.id
            ? {
                borderBottom: "solid hsl(var(--primary))",
                transition: "border-bottom-color .2s",
              }
            : {
                borderBottom: "solid transparent",
                transition: "border-bottom-color .2s",
              }
        }
      >
        <p>{item.name}</p>

        {activeItem === item.id ? (
          <ChevronUp size={15} />
        ) : (
          <ChevronDown size={15} />
        )}
      </div>
      <div
        className='flex flex-col overflow-hidden absolute top-[39px] bg-border transition-all ease-in-out duration-100'
        style={
          activeItem === item.id
            ? { maxHeight: "65rem" }
            : { maxHeight: "0rem" }
        }
      >
        {item.subItems.map((subItem) => (
          <div
            key={subItem.href}
            className='p-4 transition-opacity delay-150 ease-in-out duration-100 min-w-[15rem]'
            style={activeItem === item.id ? { opacity: 1 } : { opacity: 0 }}
          >
            <Link
              href={
                item.type === "table"
                  ? `/tables/${subItem.href}`
                  : `/fixtures/${subItem.href}`
              }
              className='hover:text-primary transition'
            >
              {subItem.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
