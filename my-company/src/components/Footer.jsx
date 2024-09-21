import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 My Company. All rights reserved.</p>
      <div style={styles.socialIcons}>
        <img
          src="/images/facebook-icon.png"
          alt="Facebook"
          style={styles.icon}
        />
        <img src="/images/twitter-icon.png" alt="Twitter" style={styles.icon} />
        <img
          src="/images/linkedin-icon.png"
          alt="LinkedIn"
          style={styles.icon}
        />
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  text: {
    margin: "0",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    width: "30px",
    margin: "0 10px",
  },
};

export default Footer;
