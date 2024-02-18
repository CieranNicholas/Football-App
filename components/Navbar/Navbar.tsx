"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Competitions } from "@/types";
import NavItem from "./NavItem";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);
  const [menuActive, setMenuActive] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const activeItemRef = useRef(activeItem);

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
    // <header className='fixed w-full bg-card z-50'>
    <header
      className='fixed w-full bg-transparent z-50 backdrop-blur-lg  border-b border-border'
      style={menuActive ? { border: "none" } : {}}
    >
      <nav
        className='relative w-full flex items-center gap-4 justify-end px-8 md:px-48 py-3  md:justify-start'
        ref={navRef}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        ))}
        <NavMobile
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          menuActive={menuActive}
          navItems={navItems}
          setMenuActive={setMenuActive}
        />
      </nav>
    </header>
  );
};

export default Navbar;
