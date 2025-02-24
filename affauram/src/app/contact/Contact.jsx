import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";

export default function ContactUs() {
  return (
    <Container className="mt-5 d-flex align-items-center">
      <Row className="w-100">
        <Col md={6} className="p-0">
          <Image
            src="/contact-image.png"
            alt="Contact Us"
            className="img-fluid rounded"
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="mb-4">Contact Us</h1>
          <Form>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Button type="submit" variant="dark">
              Contact Us
            </Button>
          </Form>
          <div className="mt-4">
            <h5>Contact</h5>
            <p>Mikailgames121@gmail.com</p>
            <h5>Based in</h5>
            <p>Indonesia, Makassar</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" aria-label="Facebook" className="text-dark fs-4">
                &#xf09a;
              </a>
              <a href="#" aria-label="Instagram" className="text-dark fs-4">
                &#xf16d;
              </a>
              <a href="#" aria-label="Twitter" className="text-dark fs-4">
                &#xf099;
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
