import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

import MainHeaderBackground from "../main-header-background";
import NavLink from "../nav-link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image alt="A plate with food on it" priority src={logoImg} />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browser Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
