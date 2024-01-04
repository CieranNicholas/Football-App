"use client";
import React from "react";
import { ModeToggle } from "./ui/toggle-mode";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Competitions, ICompetitions } from "@/types";

export default function Nav() {
  const router = useRouter();
  return (
    <header>
      <nav>
        <ul className='flex flex-row items-center p-8'>
          <li className='mr-8'>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fixtures</NavigationMenuTrigger>
                  <NavigationMenuContent className='top-0 left-0 w-full sm:w-auto'>
                    <ul className='m-0 grid list-none gap-5 p-5 grid-flow-col grid-rows-3'>
                      {Competitions.map((obj: ICompetitions) => (
                        <NavItem
                          href={`/fixtures/${obj.href}`}
                          title={obj.name}
                          description={obj.description}
                          icon={obj.icon}
                          key={obj.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tables</NavigationMenuTrigger>
                  <NavigationMenuContent className='top-0 left-0 w-full sm:w-auto'>
                    <ul className='m-0 grid list-none gap-5 p-5 grid-flow-col grid-rows-3'>
                      {Competitions.map((obj: ICompetitions) => (
                        <NavItem
                          href={`/tables/${obj.href}`}
                          title={obj.name}
                          description={obj.description}
                          icon={obj.icon}
                          key={obj.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>

          <li className='ml-auto'>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

const NavItem = ({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) => (
  <li>
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`flex flex-col justify-end p-5 rounded-md w-48 h-24 bg-opacity-70 relative`}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='font-medium leading-[1.2] text-white'>{title}</div>
        </NavigationMenuLink>
      </Link>
    </li>
  </li>
);
