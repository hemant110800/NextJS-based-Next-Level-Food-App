// 'use client' --> shifted to NavLink
//With this whole header component will render on client side, becuase we want to add active class to active path
//i.e. why we will shft Link to a new component.
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import NavLink from "./navlink";

export default function MealHeader() {

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        {/* <img src={logoImg.src} alt="A plate with food on it" ></img> */}
        {/* Optimized way for Image in NextJS */}
        <Image src={logoImg} alt="A plate with food on it" priority></Image>
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              href="/meals"
            >
              Browse Meals
            </NavLink>
          </li>
          {/* <li>
            <Link href="/meals/share">Meals Share</Link>
          </li> */}
          <li>
            <NavLink href="/community" >Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
