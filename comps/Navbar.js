import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" width={128} height={77} alt="image" />{" "}
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/ninjas">Ninja listing</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
