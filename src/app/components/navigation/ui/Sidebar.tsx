"use client";
import styles from "./Sidebar.module.css";
import { useState } from "react";

// import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

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

      <aside></aside>
    </section>
  );
  // return (
  //   <div className={styles.sidebarWrapper}>
  //     {/* Button */}
  //     <button
  //       className={`${styles.sidebarButton} ${isCollapsed ? styles.collapsed : ""}`}
  //       onClick={toggleSidebar}
  //     >
  //       {/* {isCollapsed ? ( */}
  //       {/*   <ChevronRight className={styles.arrow} /> */}
  //       {/* ) : ( */}
  //       {/*   <ChevronLeft className={styles.arrow} /> */}
  //       {/* )} */}
  //     </button>
  //
  //     {/* Sidebar */}
  //     <aside className={styles.sidebar} data-collapse={isCollapsed}>
  //       {/* logo */}
  //       <div className={styles.sidebarTop}>
  //         <Image
  //           // src="/Logo.png"
  //           src={isCollapsed ? "/LogoSmall.png" : "/Logo.png"}
  //           height={100}
  //           width={137}
  //           alt="Logo"
  //           className={styles.sidebarLogo}
  //         />
  //       </div>
  //       {/* elements */}
  //       <ul className={styles.sidebarList}>
  //         {sidebarItems.map(({ name, href, icon: Icon }, index) => {
  //           return (
  //             <Link key={index} href={href}>
  //               <li className={styles.sidebarItem}>
  //                 <Icon className={styles.sidebarIcon} />
  //                 <span className={styles.sidebarName}>{name}</span>
  //               </li>
  //             </Link>
  //           );
  //         })}
  //       </ul>
  //
  //       {user ? (
  //         <Link className={styles.user} href="/profile">
  //           <button className={styles.userButton}>
  //             {/* <Person className={styles.userIcon} /> */}
  //             <span className={styles.userName}>{user.userName}</span>
  //           </button>
  //         </Link>
  //       ) : (
  //         <Link className={styles.user} href="/login">
  //           <button className={styles.userButton}>
  //             {/* <Person className={styles.userIcon} /> */}
  //             <span className={styles.userName}>Sign In</span>
  //           </button>
  //         </Link>
  //       )}
  //     </aside>
  //   </div>
  // );
};
