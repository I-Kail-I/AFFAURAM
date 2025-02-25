"use client";
// Importing needed component
import Image from "next/image";
import {
  GoChevronRight as Rightarrow,
  GoChevronLeft as LeftArrow,
} from "react-icons/go";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Container, Button, Row, Col, Card, CardBody } from "react-bootstrap";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import styles from "./Home.module.css";
import { motion, AnimatePresence } from "framer-motion";

// Foto assets
import fotoBersama from "../../../public/assets/images/foto-mereka/FotoSamaAnak-Anak.jpg";
import Aflah from "../../../public/assets/images/foto-mereka/FotoNaAflah.jpg";
import Fatim from "../../../public/assets/images/foto-mereka/FotoNaFatim.jpg";
import Aurinka from "../../../public/assets/images/foto-mereka/FotoNaAurinka.jpg";
import Zahra from "../../../public/assets/images/foto-mereka/FotoNaZahra.jpg";
import Mikail from "../../../public/assets/images/foto-mereka/FotoNaMikail.jpg";

export default function Home({ onSeeMoreClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const bioAnakAnak = [
    {
      image: Aflah,
      name: "Aflah",
      text: "Sekolah di telkom padahal rumah na di sudiang dongo bet.",
      linkBio: "/home/bio-aflah",
    },
    {
      image: Aurinka,
      name: "Aurinka",
      text: "Orang paling tinggi, mirip cart titan, sama bomber juga",
      linkBio: "/home/bio-aurinka",
    },
    {
      image: Fatim,
      name: "Fatim",
      text: "Oranng paling tidak bisa mtk, jadi harusna di buang mi saja",
      linkBio: "/home/bio-fatim",
    },
    {
      image: Zahra,
      name: "Zahra",
      text: "Orang bodok yang sekolah di telkom galesong poe tinggal",
      linkBio: "/home/bio-zahra",
    },
    {
      image: Mikail,
      name: "Mikail",
      text: "Orang Paling toxic se dunia, pembuat na dajjal juga ini",
      linkBio: "/home/bio-mikail",
    },
  ];

  const igNyaMasingMasing = [
    { name: "Aurinka", link: "https://www.instagram.com/aurinka_ma/" },
    { name: "Fatim", link: "https://www.instagram.com/fatiimtam/" },
    { name: "Zahra", link: "https://www.instagram.com/zhrarahh/" },
    { name: "Mikail", link: "https://www.instagram.com/kaiil._/" },
    { name: "Aflah", link: "https://www.instagram.com/yutaaaax/" },
  ];

  const nextButton = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % bioAnakAnak.length);
  };

  const previousButton = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + bioAnakAnak.length) % bioAnakAnak.length
    );
  };

  // Framer Motion variants for sliding horizontally
  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div>
      <Navbar />

      <home>
        {/* Home Section */}
        <section
          className={`${styles.fotoBersamaSection} vh-100 position-relative`}
          style={{
            backgroundImage: `url(${fotoBersama.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.fotoBersamaOverlay}>
            <Image
              src={fotoBersama}
              alt="Group Photo Overlay"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
            />
            <Container className="h-100 d-flex position-relative">
              <div className="text-white d-flex flex-column text-center justify-content-center align-items-center vh-100 w-100">
                <h1 className="display-3 fw-normal mb-4">
                  Picture with the <br /> Gang
                </h1>

                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => onSeeMoreClick("/home/bio-aurinka")}
                >
                  See more
                </Button>
              </div>
            </Container>
          </div>
        </section>

        {/* Meeting Point Section */}
        <section className={`py-5 ${styles.ourInfoSection}`}>
          <Container>
            <Row className="g-4">
              <Col md={6}>
                <h2 className="display-5 mb-4 fw-normal">Ketemu di</h2>

                <p className="lead text-muted fs-4">
                  Ini semua nda tau ketemu dari mana, tapi yang pasti di SMK
                  Telkom Makassar dan tiba-tiba ji baku teman ji
                </p>
              </Col>

              <Col md={6}>
                <Card bg="primary" text="white" className="h-100 border-0">
                  <CardBody className="d-flex flex-column">
                    <div>
                      <h3 className="mb-3 fw-normal">Our location</h3>

                      <address className="mb-4 fs-5 fw-light">
                        SMK Telkom Makassar
                        <br />
                        Jl. A. P. Pettarani No.109
                        <br />
                        Makassar, Sulawesi Selatan
                      </address>
                    </div>

                    <Button variant="outline-light" size="lg">
                      Get directions
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Bio's Section */}
        <section
          className={`text-white py-5 bg-secondary bg-gradient ${styles.bioNyaMereka}`}
        >
          {/* Desktop Version */}
          <Container fluid className="px-3 d-none d-md-block">
            <Row className="flex-nowrap overflow-auto gx-4">
              {bioAnakAnak.map((person, index) => (
                <Col md={4} lg={3} key={index} className="px-3 text-center">
                  <div className="bioCard">
                    <Image
                      src={person.image}
                      alt={person.name}
                      style={{ height: "500px" }}
                      className="img-fluid rounded-3"
                      objectFit="cover"
                    />

                    <div className="mt-3">
                      <h3 className="h2 fw-normal">{person.name}</h3>

                      <p className="mb-4 fw-normal">{person.text}</p>

                      <Link href={person.linkBio} passHref>
                        <Button className="w-10 btn btn-dark rounded-pill">
                          Learn more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Mobile Version with Animated Slider */}
          <Container className="d-block d-md-none position-relative mt-4">
            <div className={styles.sliderContainer}>
              <Button
                variant="outline-light"
                className={`${styles.sliderButton} position-absolute start-0 top-50 translate-middle-y`}
                style={{ left: "10px" }}
                onClick={previousButton}
              >
                <LeftArrow />
              </Button>

              <div
                className="text-center px-4"
                style={{ position: "relative", height: "100%" }}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeIndex}
                    className={styles["bio-card-mobile"]}
                    custom={direction}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={bioAnakAnak[activeIndex].image}
                      alt={bioAnakAnak[activeIndex].name}
                      className="img-fluid rounded-3"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="mt-4">
                      <h3 className="h2 fw-normal">
                        {bioAnakAnak[activeIndex].name}
                      </h3>

                      <p className="mb-4">{bioAnakAnak[activeIndex].text}</p>

                      <Link href={bioAnakAnak[activeIndex].linkBio} passHref>
                        <Button className="rounded-pill btn btn-dark w-10">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <Button
                variant="outline-light"
                className={`${styles.sliderButton} position-absolute end-0 top-50 translate-middle-y`}
                style={{ right: "10px" }}
                onClick={nextButton}
              >
                <Rightarrow />
              </Button>
            </div>
          </Container>
        </section>

        {/* Social Links Section */}
        <section className="bg-warning bg-gradient text-white py-5">
          <Container>
            <Row className="justify-content-center">
              <Col xl={8} className="text-center">
                <h2 className="display-5 mb-5">Link masing-masing instagram</h2>

                <div className="d-flex flex-wrap justify-content-center">
                  {igNyaMasingMasing.map((account, index) => (
                    <Link
                      key={index}
                      href={account.link}
                      passHref
                      legacyBehavior
                    >
                      <Button
                        as="a"
                        variant="link"
                        className="d-flex align-items-center px-4 mx-2 mt-2 bg-dark link-light socialLink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="me-2" />
                        {account.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </home>

      <Footer />
    </div>
  );
}