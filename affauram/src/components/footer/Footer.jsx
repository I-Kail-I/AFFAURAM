import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import Link from "next/link";

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto" id="support">
      <Container className="py-5">
        <div className="row g-4 mb-4">
          {/* Support Us Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="h6 mb-3">Support Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="#"
                  className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                  aria-label="Our OVO Accounts"
                >
                  OVO Accounts
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#"
                  className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                  aria-label="Our DANA Account"
                >
                  DANA Account
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#"
                  className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                  aria-label="Our Gopay Account"
                >
                  Gopay Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="h6 mb-3">Explore</h5>

            <ul className="list-unstyled">
              <li>
                <Link
                  href="#"
                  className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                  aria-label="View our events"
                >
                  Our Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="h6 mb-3">Location</h5>
            <address className="text-white-50 mb-0">
              SMK Telkom Makassar
              <br />
              Jl. Pettarani
              <br />
              Makassar, Indonesia
            </address>
          </div>

          {/* Social Media Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="h6 mb-3">Connect With Us</h5>

            <div className="d-flex gap-3">
              <Link
                href="#"
                className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="#"
                className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className={`link-warning text-decoration-none ${styles.hoverUnderline}`}
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-top pt-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
              <p className="text-white-50 small mb-0">
                © {getCurrentYear()} Mikail Arianos. All photos used with
                permission.
              </p>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0 text-center text-md-end">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                {/* Icon section */}
                <Link
                  href="#"
                  aria-label="Facebook"
                  className={styles.linkFocus}
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="#"
                  aria-label="Twitter"
                  className={styles.linkFocus}
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="#"
                  aria-label="Instagram"
                  className={styles.linkFocus}
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="#"
                  aria-label="YouTube"
                  className={styles.linkFocus}
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
