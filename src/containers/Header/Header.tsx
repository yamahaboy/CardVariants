import { HeaderStyled, NavLinkCustom } from "./styles";

import { ROUTES } from "../../Router/Pages/Routes/Routes";

export const Header = () => {
  const links = [
    {
      id: 1,
      href: ROUTES.HOME,
      children: "Home",
    },
    {
      id: 2,
      href: ROUTES.Featured,
      children: "Featured",
    },
  ];

  return (
    <HeaderStyled>
      {links.map(({ id, href, children }) => (
        <NavLinkCustom key={id} to={href}>
          {children}
        </NavLinkCustom>
      ))}
    </HeaderStyled>
  );
};
