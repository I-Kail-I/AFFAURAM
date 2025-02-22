// Importing needed component
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Container, Button, Row, Col, Card, CardBody,  } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.css";

// Foto nya semua
import fotoBersama from "../../assets/images/foto-mereka/FotoSamaAnak-Anak.jpg";
import Aflah from "../../assets/images/foto-mereka/FotoNaAflah.jpg";
import Fatim from "../../assets/images/foto-mereka/FotoNaFatim.jpg";
import Aurinka from "../../assets/images/foto-mereka/FotoNaAurinka.jpg";
import Zahra from "../../assets/images/foto-mereka/FotoNaZahra.jpg";
import Mikail from "../../assets/images/foto-mereka/FotoNaMikail.jpg"; // Fixed import

const Home = () => {
  const bioAnakAnak = [
    {
      image: Aflah,
      name: "Aflah",
      text: "Nda tau kenapa sekolah i di telkom, jauh na poe rumah na, ada di Sudiang.",
    },
    {
      image: Aurinka,
      name: "Aurinka",
      text: "Orang paling tinggi, titan na diantara kita semua, terus suka bom orang",
    },
    {
      image: Fatim,
      name: "Fatim",
      text: "Orang harus dibuang, ka dongo i lowkley chill",
    },
    {
      image: Zahra,
      name: "Zahra",
      text: "Orang bodok yang pergi sekolah di telkom padahal rumah na di Galesong",
    },
    {
      image: Mikail,
      name: "Mikail",
      text: "Orang Paling toxic se dunia, pembuat na dajjal juga ini",
    },
  ];

  const igNyaMasingMasing = [
    {
      name: "Aurinka",
      link: "https://www.instagram.com/aurinka_ma/",
    },
    {
      name: "Fatim",
      link: "https://www.instagram.com/fatiimtam/",
    },
    {
      name: "Zahra",
      link: "https://www.instagram.com/zhrarahh/",
    },
    {
      name: "Mikail",
      link: "https://www.instagram.com/kaiil._/",
    },
    {
      name: "Aflah",
      link: "https://www.instagram.com/yutaaaax/",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.fotoBersamaSection}>
        <div className={styles.heroBackground}>
          <Image
            src={fotoBersama}
            alt="Group Photo"
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
          />
        </div>
        <Container className="h-100 d-flex align-items-center text-center text-white">
          <div className={styles.heroContent}>
            <h1 className="display-3 fw-bold mb-4">
              Picture with the <br /> Gang
            </h1>
            <Button variant="outline-light" size="lg">
              Learn more
            </Button>
          </div>
        </Container>
      </section>

      {/* Meeting Point Section */}
      <section className={`py-5 ${styles.ourInfoSection}`}>
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <h2 className="display-5 fw-bold mb-4">Ketemu di</h2>
              <p className="lead text-muted">
                Ini semua nda tau ketemu dari mana, tapi yang pasti di SMK
                Telkom Makassar dan tiba-tiba ji baku teman ji
              </p>
            </Col>
            <Col md={6}>
              <Card bg="primary" text="white" className="h-100">
                <CardBody className="d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="mb-3">Our location</h3>
                    <address className="mb-4">
                      SMK Telkom Makassar
                      <br />
                      Jl. A. P. Pettarani No.109
                      <br />
                      Makassar, Sulawesi Selatan
                    </address>
                  </div>
                  <Button variant="outline-light" size="sm">
                    Get directions
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bio's Section */}
      <section className="bg-info text-white py-5">
        <Container className="text-center mb-5">
          <blockquote className="fs-3 fst-italic">
            Ini semua bio yang nda jelas untuk masing-masing orang disini
          </blockquote>
        </Container>
        <Container fluid className="px-4">
          <Row className="flex-nowrap overflow-auto gx-4">
            {bioAnakAnak.map((person, index) => (
              <Col md={4} lg={3} key={index} className="px-3">
                <div className={styles.bioCard}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={300}
                    height={400}
                    className="img-fluid rounded-3"
                    objectFit="cover"
                  />
                  <div className="mt-3">
                    <h3 className="h2">{person.name}</h3>
                    <p className="mb-3">{person.text}</p>
                    <Button variant="dark" className="w-100">
                      Learn more
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Social Links Section */}
      <section className="bg-warning text-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} className="text-center">
              <h2 className="display-5 mb-5">Masing-Masing link instagram</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
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
                      className={`d-flex align-items-center ${styles.socialLink}`}
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

      <Footer />
    </>
  );
}

export default Home;