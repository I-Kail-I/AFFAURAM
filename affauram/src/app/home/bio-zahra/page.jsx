"use client";

// Importing needed component
import { useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Importing needed assets
import ZaharaBioPict from "../../../../public/assets/images/foto-bio/zahra/ZahraBio.jpg";

export default function ZahraBio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      <Container className="py-4 shadow-lg">
        <Row className="align-items-start">
          {/* Left Column - Content */}
          <Col md={6} className="pe-md-5 order-1 order-md-0">
            <h1 className="display-5 mb-4 text-uppercase fw-bold">
              Fatimah Az-Zahra
            </h1>

            <h2 className="mb-4 fs-3">
              <Badge bg="dark" className="me-2">
                Tinggal
              </Badge>
              Galesong
            </h2>

            <h3>Pro peler ML na X RPL 2</h3>

            <p className="lead mb-4 fs-5">
              Paling batu di anatara semua, jadi paling dongo biasana <br />
              paling sering sakit diantara semua, nda tau kenapa <br />
            </p>

            <div className="mb-4">
              <h3 className="h2 mb-3">Personal Background</h3>
              <ul className="list-unstyled fs-5">
                <li>📚 SMK Telkom</li>
                <li>🎮 Jago main MLBB</li>
                <li>🦐 Suka udang keju</li>
              </ul>
            </div>

            <div className="mb-1">
              <h3 className="h5 mb-2 mt-2">Professional Journey</h3>
              <p>
                Lumayan lah tawwa main ML na, dan kalo di nasehati{" "}
                <br />
                tidak batu-batu sekali ji tawwa
              </p>
            </div>

            <Row className="mt-4 ms-4">
              <p className="fw-bold fs-5" style={{ fontFamily: "sans-serif" }}>
                Info kontak
              </p>

              <Button variant="outline-dark" className="px-4 w-25">
                Kontak
              </Button>
            </Row>
          </Col>

          {/* Right Column - Image */}
          <Col
            md={6}
            className="order-0 order-md-1 vh-100 d-flex align-items-center"
          >
            <div
              className="bg-light rounded-3 position-relative overflow-hidden w-100 h-100"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ cursor: "default" }}
            >
              {/* Overlay */}
              {isHovered && (
                <Container
                  className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white bg-light"
                  style={{ zIndex: 3, transition: "opacity 0.5s ease" }}
                >
                  <p className="fs-4 fw-bold" style={{ fontFamily: "cursive" }}>
                    Sukses ko nanti!
                  </p>
                </Container>
              )}

              {/* Star Elements */}
              <div
                className="position-absolute z-2"
                style={{
                  top: "5%",
                  left: "5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="fs-3">⭐</span>
              </div>

              <div
                className="position-absolute z-2"
                style={{
                  top: "5%",
                  right: "5%",
                  transform: "translate(50%, -50%)",
                }}
              >
                <span className="fs-4">🌟</span>
              </div>

              <div
                className="position-absolute z-2"
                style={{
                  top: "5%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="fs-5">✨</span>
              </div>

              <Image
                src={ZaharaBioPict}
                alt="Aurinka Foto"
                className="img-fluid rounded-3 position-relative z-1"
                style={{
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "transform 0.5s ease",
                }}
                sizes="(max-width: 768px) 100%"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
