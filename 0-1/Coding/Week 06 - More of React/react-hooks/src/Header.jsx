import React from "react";

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default Header;
