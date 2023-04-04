import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Berea</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <div className={styles["profile-pic-container"]}>
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className={styles.image}
              />
            </div>
            <h1 className={styles.heading}>Michael Berea</h1>
            <p className={styles.paragraph}>I love my <a target={'_blank'} className={styles.link} href="https://www.livinglightchurch.com/kenosha-wisconsin/">local church</a></p>
            <p className={styles.paragraph}>I'm a <a target={'_blank'} className={styles.link} href="https://github.com/michaelberea">software developer</a></p>
            <p className={styles.paragraph}>I like to play the <a target={'_blank'} className={styles.link} href="https://www.youtube.com/watch?v=6VjWaBhikwE">bass</a></p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={styles.headingSmall}>Get in touch</h2>
            <ul className={styles.list}>
              <li>
                <a target={'_blank'} href="https://github.com/michaelberea">
                  <FaGithub /> Github
                </a>
              </li>
              <li>
                <a target={'_blank'} href="https://www.linkedin.com/in/michaelberea/">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              {/* <li>
          <a href="#">
            <FaTwitter /> Twitter
          </a>
        </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
