import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
  Button,
} from "react-bootstrap";
import "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
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
              <NavLink href="#explore" className="text-white">
                Explore
              </NavLink>

              <NavLink href="#visit" className="text-white">
                Visit
              </NavLink>

              <NavLink href="#support" className="text-white">
                Support
              </NavLink>
              
              <Button variant="light" className="ms-3">
                Search
              </Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
