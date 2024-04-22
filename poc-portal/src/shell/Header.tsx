import { ReactNode } from "react";

import { NavLink, To } from "react-router-dom";

import useStoreSelector from "../hooks/useStoreSelector";

type NavItemProps = {
  children?: ReactNode;
  to: To;
};

function NavItem(p: NavItemProps) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={p.to}>
        {p.children}
      </NavLink>
    </li>
  );
}

function Header() {
  const user = useStoreSelector("user");

  const name = user?.name;

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10_000 }}>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{ position: "static" }}>
        <div className="container">
          <div className="d-flex align-items-center" style={{ flex: "1 1 0", gap: "2rem" }}>
            <NavLink className="navbar-brand d-flex" to="/" style={{ gap: ".5rem" }}>
              <img src="/vite.svg" />
              POC Portal
            </NavLink>

            <ul className="navbar-nav">
              <NavItem to="/">🏠 Home</NavItem>
              <NavItem to="/information">🛈 Information</NavItem>
              <NavItem to="/resource-library">📖 Resources</NavItem>
            </ul>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "2rem" }}>
            <ul className="navbar-nav">
              <NavItem to="inbox">
                <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
                  <div>✉️ Inbox</div>
                  <poc-message-badge name={name}></poc-message-badge>
                </div>
              </NavItem>
            </ul>

            <div>{name || "Anonymous"}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
