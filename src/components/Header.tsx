import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-blue-700 py-2">
      <div className="container">
        <div className="flex">
          <Link href="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
