"use client";

// Importing needed component
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FaInstagram } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

// Importing needed assets
import FatimPictBio from "../../../../public/assets/images/foto-bio/fatim/FatimBioPict.jpg";

export default function FatimBio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      <Container className="shadow-lg">
        <Row className="align-items-start">
          {/* Left Column - Content */}
          <Col md={6} className="pe-md-5 order-1 order-md-0">
            <h1
              className="ms-2 fw-bolder mb-5"
              style={{ fontSize: "45px", color: "#ba3da7" }}
            >
              Fathimah Nurul <br />
              Mosthafavi
            </h1>

            <h2 className="text-muted fs-2 mb-4">Depressed Teenager</h2>

            <Link
              href="https://www.instagram.com/yutaaaax/"
              className="text-warning ms-3"
            >
              <FaInstagram /> Her instagram
            </Link>

            <p className="mt-3 mb-4 fs-5">
              Orang paling sinis dari semua, tidak pintar tapi pintar, tapi
              paling realistis dari semua, <br />
              overhating kepada semua hal, listener bagus, dan multitalenta, dan
              motto nya <br />
              adalah,"Hating is my passion"
            </p>

            <Row>
              <Col lg="5">
                <h2 className="text-dark">Talent nya</h2>
                <ul className="list-unstyled fs-5">
                  <li>💃 Hobi Menari</li>
                  <li>🎨 Jago Desain</li>
                  <li>
                    <IoPeopleSharp /> Enak kalo deeptalk
                  </li>
                  <li>🖼 Jago menggambar</li>
                </ul>
              </Col>

              <Col>
                <h2>Personal Background</h2>
                <ul className="list-unstyled fs-5">
                  <li>📚 SMK Telkom</li>
                  <li>👩 Salah satu paling dongo</li>
                  <li>🎨 Suka menggambar</li>
                  <li>💃 Suka menari</li>
                </ul>
              </Col>
            </Row>

            <Button variant="outline-dark" className="mt-3">
              Kontak
            </Button>
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
              style={{ cursor: "pointer",}}
            >
              {isHovered && (
                <Container
                  className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white"
                  style={{ zIndex: 3, transition: "opacity 0.5s ease" }}
                >
                  <p className="fs-4 fw-bold" style={{ fontFamily: "cursive" }}>
                    Stay strong!
                  </p>
                </Container>
              )}

              <Image
                src={FatimPictBio}
                className="img-fluid position-relative z-1"
                alt="Fatim Bio Pict"
                style={{
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "transform 0.5s ease",
                  width: "100%",
                  maxWidth: "300px",
                  margin: "0 auto", 
                }}
                sizes="(max-width: 768px) 100%"
                fill
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
