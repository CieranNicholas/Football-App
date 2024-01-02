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
}: {
  href: string;
  title: string;
  description: string;
}) => (
  <li>
    <li>
      <Link
        href={href}
        legacyBehavior
        passHref
        // className='hover:bg-muted block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none'
      >
        <NavigationMenuLink
          className={`flex flex-col p-5 hover:bg-primary-foreground rounded-md`}
        >
          <div className='mb-[5px] font-medium leading-[1.2]'>{title}</div>
          <p className='leading-[1.4]'>{description}</p>
        </NavigationMenuLink>
      </Link>
    </li>
  </li>
);
