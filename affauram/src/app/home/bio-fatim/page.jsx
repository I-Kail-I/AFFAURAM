"use client";

import { useState } from "react";
import { Button, Col, Container, Row, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FaInstagram } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import FatimPictBio from "../../../../public/assets/images/foto-bio/fatim/FatimBioPict.jpg";

export default function FatimBio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      <Container className="shadow-lg min-vh-100">
        <Row className="align-items-center h-100">
          {/* Content Column */}
          <Col md={6} className="order-2 order-md-1 pe-md-5">
            <h1
              className="fw-bolder mb-3 mt-3"
              style={{ fontSize: "45px", color: "#e6632c" }}
            >
              FATIMAH NURUL <br />
              MOSTAVHI
            </h1>

            <div className="mb-2 mt-4 ">
              <Badge
                className="fs-4 bg-dark text-light mb-2"
                style={{ color: "#363d38" }}
              >
                Depressed Teenager
              </Badge>
            </div>

            <Link
              href="https://www.instagram.com/yutaaaax/"
              className="d-inline-block mb-4 link-dark fw-bold"
            >
              <FaInstagram className="me-1" /> Her instagram
            </Link>

            <p className="mb-4 fs-5">
              Orang paling sinis dari semua, tidak pintar tapi pintar, tapi
              paling realistis dari semua, overhating kepada semua hal, listener
              bagus, dan multitalenta, dan motto nya adalah"Hating is my
              passion"
            </p>

            <Row className="g-4">
              <Col lg={6}>
                <h2>Talent nya</h2>
                <ul className="list-unstyled fs-5">
                  <li>💃 Hobi Menari</li>
                  <li>🎨 Jago Desain</li>
                  <li>
                    <IoPeopleSharp /> Enak kalo deeptalk
                  </li>
                  <li>🖼 Jago menggambar</li>
                </ul>
              </Col>
            </Row>

            <div className="mt-4 ms-4">
              <p className="fs-5 fw-bold">Info Kontak</p>

              <Button variant="outline-dark" className="px-4">
                Kontak
              </Button>
            </div>
          </Col>

          {/* Image Column */}
          <Col md={6} className="order-1 order-md-2 mb-5 mb-md-0">
            <div
              className="bg-light rounded-3 position-relative overflow-hidden"
              style={{ minHeight: "500px", cursor: "default" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={FatimPictBio}
                alt="Fatim Bio Pict"
                fill
                className="object-fit-cover position-relative rounded"
                style={{
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "transform 0.5s ease",
                }}
              />

              {isHovered && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white "
                  style={{ zIndex: 2 }}
                >
                  <p
                    className="fs-4 fw-bold m-0"
                    style={{ fontFamily: "cursive" }}
                  >
                    Stay strong!
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
