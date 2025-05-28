import Link from "next/link";
import { headers } from "next/headers";

type NavBarProps = {
  showHomeButton?: boolean;
};

const NavItem = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) => {
  const pathname = headers().get("x-invoke-path") || "";
  const isActive = pathname === href;
  if (isActive)
    return (
      <span
        className={`m-0 px-4 py-2 rounded ${className} transition-opacity duration-200 ease-in-out`}
      >
        {children}
      </span>
    );
  return (
    <Link href={href}>
      <button
        className={`m-0 px-4 py-2 rounded ${className} opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out`}
      >
        {children}
      </button>
    </Link>
  );
};

const NavBar = ({}: NavBarProps) => {
  return (
    <nav className="gap-2 mb-2 flex items-start font-sans pt-2">
      <NavItem href="/" className="bg-red-500">
        Home
      </NavItem>

      <NavItem href="/skills" className="bg-purple-500">
        Skills
      </NavItem>

      <NavItem href="/about" className="bg-blue-500">
        About Dan
      </NavItem>

      <NavItem href="/timeline" className="bg-orange-500">
        20 year timeline
      </NavItem>

      <NavItem href="/cv/perm" className="bg-teal-500">
        Permanent CV
      </NavItem>

      <NavItem href="/cv" className="bg-green-500">
        Contract CV
      </NavItem>
    </nav>
  );
};

export default NavBar;
