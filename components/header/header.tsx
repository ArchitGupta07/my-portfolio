"use client";

import React from "react";
import "@/components/header/header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import { getSession, logout } from "@/utils/actions";
// import { SessionData } from "@/utils/lib";

// type NavbarProps = {
//   session: SessionData;
// };

const Header = () => {
  const path = usePathname();
  // console.log(path);

  return (
    <header className="container header">
      <div className="logo-part">
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
        <h2>&lt; Archit Gupta /&gt;</h2>
      </div>
      <nav>
        <ul>
          <li
            className={
              path === "/dashboard"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard">Home</Link>
          </li>

          <li
            className={
              path === "/dashboard/exams"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/exams">About</Link>
          </li>
          <li
            className={
              path === "/dashboard/blog"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/blogs">Projects</Link>
          </li>
          <li
            className={
              path === "/dashboard/code"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <Link href="/dashboard/code">Contact</Link>
          </li>
          <li
            className={
              path === "/dashboard/about"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            {/* <Link href="/dashboard/about"></Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
