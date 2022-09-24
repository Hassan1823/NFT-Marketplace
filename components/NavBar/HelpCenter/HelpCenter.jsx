import React from "react";
import Link from "next/link";

//INTERNAL IMPORTS
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "Sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
    
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className={Style.helpCenter}>
          <Link href={{ pathname: "${el.link}" }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
