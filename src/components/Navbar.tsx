import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" flex space-x-8 pt-4 items-center justify-center md:justify-end uppercase text-xl ">
      <Link href={"./"}>Home</Link>
      <Link href={"/Create"}>Create</Link>
      <Link href={"/Edit"}>Edit</Link>
    </div>
  );
}

export default Navbar;
