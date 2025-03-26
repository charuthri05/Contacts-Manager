import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Contacts Manager";
      }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact List Manager</h1>
      <div style={styles.buttonGroup}>
        <Link to="/add" style={styles.button}>Add Contact</Link>
        <Link to="/list" style={styles.button}>View Contacts</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "10vh",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};
