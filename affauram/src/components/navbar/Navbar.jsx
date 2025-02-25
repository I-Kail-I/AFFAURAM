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

export default function Navbar() {
  return (
    <BootstrapNavbar
      bg="transparent"
      expand="lg"
      className="w-100 z-3"
      fixed="top"
    >
      <Container>
        <NavbarToggle aria-controls="" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink href="#explore" className="text-black mx-4">
              Explore
            </NavLink>

            <NavLink href="#visit" className="text-black mx-4">
              Visit
            </NavLink>

            <NavLink href="#support" className="text-black mx-4">
              Support
            </NavLink>

            <Button variant="warning" className="ms-3">
              Search
            </Button>
          </Nav>
        </NavbarCollapse>
      </Container>
    </BootstrapNavbar>
  );
}
