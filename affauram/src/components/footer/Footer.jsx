import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.component.css";

const space = "";

const date = () => {
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  {
    /* Adding all that to one var */
  }
  let combineDate = `${currentMonth} - ${currentDay} - ${currentYear}`;
  return combineDate;
};

export default function Footer() {
  const currentDate = date();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <div className="row justify-content-between d-flex text-center">
          <div className="col-md-3">
            <h5>Support Us</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50">
                  Our OVO Accounts
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50">
                  Our DANA Account
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50">
                  Our Gopay Account
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Explore</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white-50">
                  Our Events
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Location</h5>

            <p className="text-white-50">
              Indonesia, Makassar, JL Pettarani <br />
              SMK Telkom Makassar
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
              // In Footer.jsx
              <small className="text-white-50">
                © {currentDate} Made by Mikail Arianos. All photos used with
                permission.
              </small>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
