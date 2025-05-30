"use client";

import { WithChildren } from "@app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = WithChildren<{
  href: string;
}>;

const NavItem = ({ href, children }: NavItemProps) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  if (isActive)
    return (
      <span
        className={`m-0 px-4 py-2 rounded transition-opacity duration-200 ease-in-out cursor-default`}
      >
        {children}
      </span>
    );
  return (
    <Link href={href}>
      <button
        className={`m-0 px-4 py-2 rounded opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer`}
      >
        {children}
      </button>
    </Link>
  );
};

type NavBarProps = {};

const NavBar = ({}: NavBarProps) => {
  return (
    <nav className="gap-2 flex items-center font-sans print:hidden border-b border-gray-200 border-t">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/skills">Skills</NavItem>
      <NavItem href="/about">About Dan</NavItem>
      <NavItem href="/timeline">20 year timeline</NavItem>
      <NavItem href="/colophon">Colophon</NavItem>
      <NavItem href="/cv/perm">Permanent CV</NavItem>
      <NavItem href="/cv">Contract CV</NavItem>
    </nav>
  );
};

export default NavBar;
