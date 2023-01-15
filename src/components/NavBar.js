import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBar = links.map(nav => {
    return <a key={"#"+nav} href={'#'+nav}>{nav}</a>
  })

  return <nav>{navBar}</nav>;
}

export default NavBar;
