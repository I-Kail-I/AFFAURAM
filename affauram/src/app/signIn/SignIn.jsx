// Importing image assets
import LoginPict from "../../../public/assets/images/login-assets/Login Pict.jpg";

// Importing needed components
import {
  Col,
  Row,
  FormControl,
  FormCheck,
  FormLabel,
  Form,
  Container,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <div>
      <div
        className="vh-100 d-flex justify-content-center align-items-center bg-light text-dark"
        fixed="bottom"
      >
        <Row className="w-100 vh-100">
          {/* Left Side */}
          <Col lg="4" className="d-flex flex-column">
            <Container className="border shadow rounded pb-3 h-100">
              {/* Upper Row */}
              <Row className="text-center mb-4" id="login-row">
                <h2 className="fw-normal fs-1" id={styles.loginText}>
                  Login
                </h2>

                <p>
                  Just want to see?{" "}
                  <Link
                    className="link-warning"
                    href="../home"
                    id={styles.guestEnter}
                  >
                    See as a guest
                  </Link>
                </p>
              </Row>

              {/* Input Row */}
              <Row>
                <Form className="d-flex flex-column">
                  <div className="form-group" id={styles.usernameInput}>
                    <FormLabel className="fw-normal fs-4">Username</FormLabel>

                    <FormControl className="fs-5 fw-light" type="text" />
                  </div>

                  <div className="form-group mt-4" id={styles.passwordInput}>
                    <FormLabel className="fw-normal fs-4">Password</FormLabel>

                    <FormControl className="fs-5 fw-light" type="password" />
                  </div>

                  <div className="form-group mt-3 ms-3">
                    <FormCheck label="Remember Me" />
                  </div>

                  <Link
                    className="mt-4 fs-4 fw-light btn btn-dark d-flex align-items-center justify-content-center"
                    href="../home/"
                    style={{ height: "55px" }}
                  >
                    Log In
                  </Link>
                </Form>
              </Row>

              {/* Lower Section */}
              <Row className="mt-4 text-center">
                <Link
                  href="/forgotPassword"
                  className="fs-5 link-warning"
                  id={styles.resetLink}
                >
                  Forgot your password
                </Link>

                <p className="text-muted mt-5">
                  Dibuat oleh Mikail Arianos untuk web kenang-kenangan <br />
                  dan juga sebagai tempat ditaroh foto-foto bersama disini
                </p>
              </Row>
            </Container>
          </Col>

          {/* Right Side */}
          <Col className="position-relative p-0" xs={0}>
            <Image
              src={LoginPict}
              id={styles.loginPict}
              alt="Login Background"
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
