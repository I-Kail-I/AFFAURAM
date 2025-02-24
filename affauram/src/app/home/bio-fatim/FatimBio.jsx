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

      <div className="vh-100 d-flex">
        <Container className="bg-white p-4 rounded shadow-lg">
          <Row className="d-flex h-100">
            <Col md={4} lg={3} className="h-100 z-3">
              <div
                className="bg-light rounded-3 position-relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ cursor: "pointer" }}
              >
                {isHovered && (
                  <Container
                    className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white"
                    style={{ zIndex: 3, transition: "opacity 0.5s ease" }}
                  >
                    <p
                      className="fs-4 fw-bold"
                      style={{ fontFamily: "cursive" }}
                    >
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
                  }}
                />
              </div>
            </Col>

            <Col md={8} lg={9}>
              <div className="mt-5">
                <h1
                  className="ms-2 fw-bolder mb-5"
                  style={{ fontSize: "45px", color: "#ba3da7" }}
                >
                  Fathimah Nurul <br />
                  Mosthafavi
                </h1>

                <h1 className="text-muted fs-2 mb-4">Depressed Teenager</h1>

                <Link
                  href="https://www.instagram.com/yutaaaax/"
                  className="text-warning ms-3"
                >
                  <FaInstagram /> Her instagram
                </Link>

                <p className="mt-3 mb-4">
                  Orang paling sinis dari semua, tidak pintar tapi pintar, tapi
                  paling realistis dari semua, <br />
                  overhated kepada semua hal, listener bagus, dan multitalenta
                </p>

                <h2 className="text-dark">Talent nya</h2>
                <ul className="list-unstyled">
                  <li>💃 Hobi Menari</li>
                  <li>🎨 Jago Desain</li>
                  <li>
                    <IoPeopleSharp /> Enak kalo deeptalk
                  </li>
                </ul>

                <Button variant="outline-dark" className="mt-3">
                  Kontak
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
