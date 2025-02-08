import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link href={`/${link}`}>
      <a>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          {text}
        </button>
      </a>
    </Link>
  );
};

export default Button;
