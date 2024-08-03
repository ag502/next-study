"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

export default function NavLink(props: { href: string; children: React.ReactNode }) {
  const path = usePathname();
  return (
    <Link
      className={path.startsWith(props.href) ? `${classes.link} ${classes.active}` : classes.link}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
