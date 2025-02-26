"use client";

// Importing needed component
import styles from "./AurinkaBio.module.css"
import React, { useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Importing needed assets
import AurinkaBioPhoto from "../../../../public/assets/images/foto-bio/aurinka/AurinkaBioPict.jpg";

export default function AurinkaBio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      <Container className="py-4 shadow-lg min-vh-100">
        <Row className="align-items-center h-100">
          {/* Left Column - Content */}
          <Col md={6} className="pe-md-5 order-2 order-md-1">
            <h1
              className="display-5 mb-4 text-uppercase fw-bold"
              style={{ color: "red" }}
            >
              Aurinka Medina
            </h1>

            <h2 className="mb-4 fs-3">
              <Badge bg="dark" className="me-2">
                Tinggal
              </Badge>
              Indonesia, Makassar, Adiyaksa
            </h2>

            <h3>Titan na X RPL 2</h3>

            <p className="lead mb-4 fs-5">
              Paling tinggi dari semua, dan juga paling soft spoken <br />
              di antara semua, freaky dan suka jomok, dan juga kek arab <br />
              tapi padahal bukan arab
            </p>

            <div className="mb-4">
              <h3 className="h2 mb-3">Talent nya</h3>
              <ul className="list-unstyled fs-5">
                <li>👩🏼‍🤝‍👩🏻 Soft spoken</li>
                <li>📚 Salah satu paling pintar</li>
                <li>🎨 Jago menggambar</li>
                <li>🎸 Jago musik</li>
              </ul>
            </div>

            <div className="mb-1">
              <h3 className="h5 mb-2 mt-2">Professional Journey</h3>
              <p>
                Suka menggambar jadi kemungkinan bisa jadi nya ke web desaigner
                <br />
                dan juga suka orang kek orang bodok iyya, tapi lowkey chill
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
          <Col md={6} className="order-1 order-md-2 mb-5 mb-md-0" 
              id={styles.imageCol}>
            <div
              className="bg-light rounded-3 position-relative overflow-hidden" 
              style={{ minHeight: "500px", cursor: "default" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={AurinkaBioPhoto}
                alt="Aurinka Foto"
                className="object-fit-cover position-relative rounded"
                style={{
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "transform 0.5s ease",
                }}
                fill
              />

              {isHovered && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white"
                  style={{ zIndex: 2 }}
                >
                  <p
                    className="fs-4 fw-bold m-0"
                    style={{ fontFamily: "cursive" }}
                  >
                    Sukses ko nanti!
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
