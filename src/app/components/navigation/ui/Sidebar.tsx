"use client";
import { useState } from "react";

import styles from "./Sidebar.module.css";

import { IoIosArrowBack } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

import { sidebarItems } from "../controller/sidebarItems.controller";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={styles.sidebarWrapper}>
      {/* to hide/show button */}
      <button
        className={`${styles.sidebarButton} ${isCollapsed ? styles.collapsed : ""}`}
        onClick={toggleSidebar}
      >
        <IoIosArrowBack
          className={`${styles.arrow} ${isCollapsed ? styles.buttonCollapsed : ""}`}
        />
      </button>

      {/* Sidebar */}
      <aside className={styles.sidebar} data-collapse={isCollapsed}>
        {/* logo */}
        <div className={styles.sidebarTop}>
          <Image
            src={isCollapsed ? "/LogoSmall.png" : "/Logo.png"}
            height={100}
            width={137}
            alt="Logo"
            className={styles.sidebarLogo}
          />
        </div>
        {/* elements */}
        <ul className={styles.sidebarList}>
          {sidebarItems.map(({ name, href, icon: Icon }, index) => {
            return (
              <Link key={index} href={href}>
                <li className={styles.sidebarItem}>
                  <Icon className={styles.sidebarIcon} />
                  <span className={styles.sidebarName}>{name}</span>
                </li>
              </Link>
            );
          })}
        </ul>

        {/* {user ? ( */}
        {/*    <Link className={styles.user} href="/profile"> */}
        {/*      <button className={styles.userButton}> */}
        {/*        <Person className={styles.userIcon} /> */}
        {/*        <span className={styles.userName}>{user.userName}</span> */}
        {/*      </button> */}
        {/*    </Link> */}
        {/*  ) : ( */}
        {/*    <Link className={styles.user} href="/login"> */}
        {/*      <button className={styles.userButton}> */}
        {/*        <Person className={styles.userIcon} /> */}
        {/*        <span className={styles.userName}>Sign In</span> */}
        {/*      </button> */}
        {/*    </Link> */}
        {/*  )} */}
      </aside>
    </section>
  );
};
