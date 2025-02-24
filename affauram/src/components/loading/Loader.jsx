"use client";

import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    </Container>
  );
}
