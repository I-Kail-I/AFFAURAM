import React from "react";
import styles from "./ZahraBio.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "@/components/navbar/Navbar";

export default function ZahraBio() {
  return (
    <div>
      <Navbar />

      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <Row className="h-100 w-100">
          <Row
            style={{ backgroundColor: "#5880d1" }}
            className="mt-2 rounded-top-2 h-50"
            lg={12}
          >
            <Col></Col>
            <Col>
              {/* Header row */}
              <Row>
                <p
                  className="fs-1 fw-light mt-5 text-center"
                  style={{ fontStyle: "italic" }}
                >
                  Fatimah Az-Zahra
                </p>
                <hr />
              </Row>

              {/* Main row */}
              <Row>
                <h2
                  className="mt-3 fs-4 fw-normal text-center"
                  style={{ fontFamily: "GoogleRaleway" }}
                >
                  Orang yang dari Galesong, sekolah di Telkom dari na SMP.
                  Kerjaan na main game dan top up, tidak tau manage uang
                </h2>

              
              </Row>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#c3cf93"}} className="h-50" lg={12}></Row>
        </Row>
      </Container>
    </div>
  );
}
