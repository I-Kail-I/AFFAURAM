import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
  Button,
} from "react-bootstrap";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <BootstrapNavbar bg="transparent" expand="lg" className="w-100 z-3" fixed="top">
      <Container>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { href: "/home#explore", label: "Explore" },
              { href: "/home#visit", label: "Visit" },
              { href: "/home#support", label: "Support" },
              { href: "/home", label: "Home" },
            ].map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                className={`text-black mx-4 ${router.pathname === href ? styles.active : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </BootstrapNavbar>
  );
}
