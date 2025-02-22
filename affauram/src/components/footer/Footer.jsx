import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.component.css";

const Footer = ()=> {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <div className="row">
          <div className="col-md-3">
            <h5>Support Us</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50">
                  Become a member
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50">
                  Donate now
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Visit</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50">
                  Plan your visit
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50">
                  Hours
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Explore</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50">
                  Exhibits
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Location & Hours</h5>

            <p className="text-white-50">
              5700 S Lake Shore Dr
              <br />
              Chicago, IL 60637
            </p>

            <p className="text-white-50">
              Open today from 9:30 a.m. to 4:00 p.m.
            </p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-top">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex gap-3">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
            <div className="col-md-8 text-md-end">
              <small className="text-white-50">
                © 2023 Museum of Science and Industry, Chicago
              </small>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer