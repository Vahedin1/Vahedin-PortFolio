import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"; // Import from the correct package

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.contactContainer}>
        <h3 style={styles.header}>Contact Me:</h3>
        <div style={styles.links}>
          <a
            href="https://www.linkedin.com/in/vahedin-hamidovic-790251338/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} /> LinkedIn
          </a>

          <a
            href="https://github.com/Vahedin1"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FontAwesomeIcon icon={faGithub} style={styles.icon} /> GitHub
          </a>
        </div>

        <div style={styles.links}>
          <a href="mailto:hamidovicvahedin1@gmail.com" style={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />{" "}
            hamidovicvahedin1@gmail.com
          </a>
        </div>

        <div style={styles.links}>
          <a href="tel:+381638077687" style={styles.link}>
            <FontAwesomeIcon icon={faPhoneAlt} style={styles.icon} /> +381 63
            8077687
          </a>
        </div>
      </div>

      <div style={styles.copyright}>
        <p>&copy; 2025 | www.vaha.com</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    backgroundColor: "navy",
    color: "white",
    padding: "20px 0",
    marginTop: "auto",
    
  },
  contactContainer: {
    marginBottom: "10px",
  },
  header: {
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  icon: {
    marginRight: "8px",
  },
  copyright: {
    marginTop: "10px",
    fontSize: "14px",
  },
  copyrightLink: {
    color: "#ddd",
    textDecoration: "none",
  },
};

export default Footer;
