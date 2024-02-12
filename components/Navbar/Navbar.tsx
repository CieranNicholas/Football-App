"use client";

import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Competitions } from "@/types";
import { redirect } from "next/navigation";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);
  const activeItemRef = useRef(activeItem);

  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    {
      name: "Fixtures",
      id: 0,
      type: "fixture",
      subItems: Competitions,
    },
    {
      name: "Tables",
      id: 1,
      type: "table",
      subItems: Competitions,
    },
  ];

  function handleItemClick(id: number) {
    if (activeItem === id) {
      setActiveItem(undefined);
    } else {
      setActiveItem(id);
    }
  }

  useEffect(() => {
    activeItemRef.current = activeItem;
  }, [activeItem]);

  function handleRedirect(href: string) {
    // setMenuActive(false);
    return redirect("/");
  }

  // Close the dropdown menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveItem(undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className='fixed w-full bg-white text-black z-50'>
      <nav
        className='relative w-full flex items-center gap-4 justify-end px-8 md:px-48 py-4 md:justify-start'
        ref={navRef}
      >
        <>
          {navItems.map((item) => (
            <div
              key={item.id}
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
                className='flex flex-col overflow-hidden absolute top-10 bg-white transition-all ease-in-out duration-100'
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
                    style={
                      activeItem === item.id ? { opacity: 1 } : { opacity: 0 }
                    }
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
          ))}
          <Menu
            className='md:hidden'
            onClick={() => setMenuActive((prevState) => !prevState)}
          />
          <div
            className='fixed flex flex-col w-full top-14 left-0 h-full p-4 bg-white transition md:hidden'
            style={menuActive ? { opacity: 1 } : { opacity: 0 }}
          >
            {navItems.map((item) => (
              <>
                <div
                  className='flex gap-2 justify-start items-center select-none py-4 px-4 md:hidden'
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                  <p>{item.name}</p>
                  <ChevronDown size={15} />
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
      </nav>
    </header>
  );
};

export default Navbar;
