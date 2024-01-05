"use client";
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Competitions, ICompetitions } from "@/types";
import logo from "@/public/logo.png";

export default function Nav() {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-12'>
      <nav>
        <ul className='flex flex-row items-center py-4 w-2/3 mx-auto'>
          <li className='mr-8'>
            <Link href='/'>
              <Image alt='Foothub Logo' src={logo} className='h-8 w-auto' />
            </Link>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fixtures</NavigationMenuTrigger>

                  <NavigationMenuContent className='top-0 left-0 w-full sm:w-auto bg-card'>
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
                      {Competitions.filter(
                        (obj: ICompetitions) => obj.href !== ""
                      ).map((obj: ICompetitions) => (
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
          className={`flex flex-col justify-end p-5 rounded-md w-40 h-24 hover:brightness-50 relative cursor-pointer ease-linear transition-all duration-150 bg-primary`}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='text-sm leading-[1.2] text-white'>{title}</div>
        </NavigationMenuLink>
      </Link>
    </li>
  </li>
);
